import React, { useRef, useState } from 'react';
import style from './Order.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import DaumPostcode from 'react-daum-postcode';

/***********************************
 * graphQL start
 ***********************************/
const GET_LAST_ORDER = gql`
    query GetLastOrder($user_id:Int!){
        lastOrder(user_id:$user_id){
            id
            user_id
            color
            title
            hashtag1
            hashtag2
            hashtag3
            is_pay
        }
    }
`;


/***********************************
 * graphQL end
 ***********************************/


function Order() {
    const cx = classNames.bind(style);
    const history = useHistory(); // router
    const user = localStorage.getItem('user') // for user_id


    /***********************************
     * daum API
     ***********************************/
    const addrInputRef = useRef();
    const [isShowPostCode, setIsShowPostCode] = useState(false);
    const [defailAddress, setDefailAddress] = useState('');

    const [inputs, setInputs] = useState([
        
    ])
    
    const execPostcode = () => {
        isShowPostCode === true 
        ? setIsShowPostCode(false)
        : setIsShowPostCode(true)
    }

    const handlePostcodeComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
    
        addrInputRef.current.value=fullAddress;
        setIsShowPostCode(false);
    }



    /***********************************
     * apollo client
     ***********************************/
    const { loading, error, data } = useQuery(
        GET_LAST_ORDER, 
        { variables: { user_id: JSON.parse(user).user.id } }
    )
    
    if (loading) return <p className="loading">Loading...</p>
    if (error) return <p className="error">Error :(</p>
    if (data.is_pay === 'y'){
        alert('error : 이미 결제된 상품입니다.');
        history.push("/");
    }
        
    const order = data.lastOrder;

    return (
        <div className={style.Order}>
            <div className={style.Left}>
                <h2>결제</h2>
                <div className={style.Title}>주문자 / 배송지 정보</div>
                <div className={style.InputName}>이름</div>
                <input type="text" className={style.InputStyle} placeholder="이름 입력" />

                <div className={style.InputName}>휴대폰 번호</div>
                <input type="text" className={style.InputStyle} placeholder="휴대폰 번호 입력" />


                <div className={style.InputName}>배송지 주소</div>
                <div className={style.InputAddress}>
                    <input type="text" className={cx('InputStyle', 'Address')} placeholder="주소 입력" readOnly ref={addrInputRef} />
                    {
                        isShowPostCode === true &&  <DaumPostcode onComplete={handlePostcodeComplete} /> 
                    }

                    <button className={style.BtnSearch} onClick={execPostcode}><img src="/images/pay/ico_search.svg" alt="주소 버튼 이미지" /></button> 
                </div>
                <input type="text" className={style.InputStyle} placeholder="상세주소 입력" onChange={setDefailAddress} />
            </div>
            <div className={style.Right}>
                <div className={style.OrderInfoBox}>
                    <p className={style.TitlePay}>
                        <img src="/images/pay/ico_card.svg" alt="" />
                        결제 정보
                    </p>
                    <ul className={style.PayList}>
                        <li>
                            <span>제품</span>
                            <span>샴푸, 컨디셔너 300ml</span>
                        </li>
                        <li>
                            <span>색상</span>
                            <span style={{color:order.color}}>{order.color}</span>
                        </li>
                        <li>
                            <span>상품이름</span>
                            <span>{order.title}</span>
                        </li>
                        <li>
                            <span>해시태그1</span>
                            <span>{order.hashtag1}</span>
                        </li>
                        <li>
                            <span>해시태그2</span>
                            <span>{order.hashtag2}</span>
                        </li>
                        <li>
                            <span>해시태그3</span>
                            <span>{order.hashtag3}</span>
                        </li>
                        <li className={style.Total}>
                            <b>결제하실 금액</b>
                            <b>29,900원</b>
                        </li>
                    </ul>
                    <Link to="/orderEnd">
                        <button className={style.BtnPay}>결제하기</button>
                    </Link>
                    
                    <p className={style.SubText}>결제를 진행하면 결제서비스 약관 및 배송을 위한<br />
                    개인정보 제공 및 위탁에 동의하는 것으로 간주합니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Order;

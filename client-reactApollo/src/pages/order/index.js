import React, { useRef, useState } from 'react';
import style from './Order.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import DaumPostcode from 'react-daum-postcode';

/***********************************
 * graphQL start
 ***********************************/
const POST_ORDER = gql`
    mutation PostOrder($input: PostOrderInput!){
        postOrder(input: $input){
            user_id,
            color,
            title,
            hashtag1,
            hashtag2,
            hashtag3,
            is_pay,
            name,
            phone,
            addr,
            price
        }
    },
`;
/***********************************
 * graphQL end
 ***********************************/


function Order() {
    const cx = classNames.bind(style);
    const history = useHistory(); // router
    const user = localStorage.getItem('user') // for user_id


    /***********************************
     * states
     ***********************************/
    const product = JSON.parse(sessionStorage.getItem('orderInfomation'));
    const [name, setName] = useState(''); // 이름
    const [phone, setPhone] = useState(''); // 폰
    const [address, setAddress] = useState(''); // 주소 input
    const [defailAddress, setDefailAddress] = useState(''); // 상세주소 input
    const [price, setPrice] = useState('29900'); // 결제금액

    
    /***********************************
     * daum API
     ***********************************/
    const addrInputRef = useRef(); // 주소 input DOM
    const [isShowPostCode, setIsShowPostCode] = useState(false); // 주소 API UI
    
    const execPostcode = () => {
        isShowPostCode === true 
        ? setIsShowPostCode(false)
        : setIsShowPostCode(true)
    }

    // 주소 선택시 실행
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
    
        addrInputRef.current.value=fullAddress; // 주소 input에 삽입
        setAddress(fullAddress); // 주소 value
        setIsShowPostCode(false); // hide 다음주소 UI
    }



    /***********************************
     * apollo client & submit
     ***********************************/
    const [postOrder] = useMutation(
        POST_ORDER, { onCompleted: postOrderCompleted }
    )

    function execPostOrder(){
        // validation check
        if( !name ){
            alert('이름을 입력해주세요')
            return
        }
        else if( !phone ){
            alert('전화번호를 입력해주세요')
            return
        }
        else if( !address ){
            alert('주소를 입력해주세요')
            return
        }
        else if( !defailAddress ){
            alert('상세 주소를 입력해주세요')
            return
        }


        const inputs = {
            user_id:JSON.parse(user).user.id,
            color:product.color,
            title:product.title,
            hashtag1:product.hashtag1,
            hashtag2:product.hashtag2,
            hashtag3:product.hashtag3,
            is_pay:"y",
            name:name,
            phone:phone,
            addr:`${address}, ${defailAddress}`,
            price:price
        }
        console.log(inputs)
        

        if( window.confirm(`주문하시겠어요 ?`) ){
            postOrder({ variables:{input: inputs} })
        }
    }

    function postOrderCompleted(){
        history.push("/orderEnd")
    }

    
    if (!product){
        alert('제품 정보를 찾을 수 없어요. 제품 주문화면으로 돌아갈게요');
        history.push('/')
    }

    return (
        <div className={style.Order}>
            <div className={style.Left}>
                <h2>결제</h2>
                <div className={style.Title}>주문자 / 배송지 정보</div>
                <div className={style.InputName}>이름</div>
                <input type="text" className={style.InputStyle} placeholder="이름 입력" onChange={setName} />

                <div className={style.InputName}>휴대폰 번호</div>
                <input type="text" className={style.InputStyle} placeholder="휴대폰 번호 입력" onChange={setPhone} />


                <div className={style.InputName}>배송지 주소</div>
                <div className={style.InputAddress}>
                    <input type="text" className={cx('InputStyle', 'Address')} placeholder="주소 입력" readOnly ref={addrInputRef} />
                    {
                        isShowPostCode === true && <DaumPostcode onComplete={handlePostcodeComplete} /> 
                    }

                    <button className={style.BtnSearch} onClick={execPostcode}>
                        <img src="/images/pay/ico_search.svg" alt="주소 버튼 이미지" />
                    </button> 
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
                            <span style={{color:product.color}}>{product.color}</span>
                        </li>
                        <li>
                            <span>상품이름</span>
                            <span>{product.title}</span>
                        </li>
                        <li>
                            <span>해시태그1</span>
                            <span>{product.hashtag1}</span>
                        </li>
                        <li>
                            <span>해시태그2</span>
                            <span>{product.hashtag2}</span>
                        </li>
                        <li>
                            <span>해시태그3</span>
                            <span>{product.hashtag3}</span>
                        </li>
                        <li className={style.Total}>
                            <b>결제하실 금액</b>
                            <b>29,900원</b>
                        </li>
                    </ul>
                    <button className={style.BtnPay} onClick={execPostOrder}>결제하기</button>
                    
                    <p className={style.SubText}>결제를 진행하면 결제서비스 약관 및 배송을 위한<br />
                    개인정보 제공 및 위탁에 동의하는 것으로 간주합니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Order;

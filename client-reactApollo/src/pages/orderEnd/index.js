import React, { useEffect } from 'react';
import style from './OrderEnd.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import { onError } from "apollo-link-error";
import { colorcode } from '../../util/colorcode'

/***********************************
 * graphQL start
 ***********************************/
const GET_LAST_ORDER = gql`
    query GetLastOrder($user_id: Int!){
        lastOrder(user_id: $user_id){
            user_id
            color
            title
            hashtag1
            hashtag2
            hashtag3
            name
            phone
            addr
            price
            is_pay
        }
    }
`;
/***********************************
* graphQL end
***********************************/



function OrderEnd() {
    useEffect(() => {
        sessionStorage.removeItem('tempOrder'); // 주문시 필요했던 주문정보 삭제
    }, []);

    const cx = classNames.bind(style); // classNames
    const history = useHistory(); // router
    const user = localStorage.getItem('user') // for user_id

    /***********************************
     * functions
     ***********************************/
    const moveOrderList = () => {
        history.push("/orderList")
    }

    /***********************************
     * apollo client
     ***********************************/
    const { data } = useQuery(GET_LAST_ORDER, {
        variables:{user_id:JSON.parse(user).user.id},
    });
    const proudct = data?.lastOrder;

    
    return (
        <div className={style.OrderEnd}>
            <h2>주문이 완료되었습니다.</h2>
        
            <div className={style.Productbox}>
                <div className={cx('Item', 'Item1')}>
                    <div className={style.InnerText}>
                        <div className={style.ColorNum}>{colorcode(proudct.color)}</div>
                        <div className={style.ItemName}>SHAMPOO</div>
                        <div className={style.CodeName}>{proudct.name !== '' ? proudct.name : 'BEAUTY'}</div>
                        <div className={style.Hashtag}>
                            {`#${proudct.hashtag1} `}
                            {`#${proudct.hashtag2} `}
                            {`#${proudct.hashtag3} `}
                        </div>
                        <div className={style.Size}>300ml / 10.14 fl. oz.</div>
                    </div>
                    <img src={`/images/goods/goods_${proudct.color}.png`} alt="상품이미지1" />
                </div>

                <div className={cx('Item', 'Item2')}>
                    <div className={style.InnerText}>
                        <div className={style.ColorNum}>{colorcode(proudct.color)}</div>
                        <div className={style.ItemName}>CONDITIONER</div>
                        <div className={style.CodeName}>{proudct.name !== '' ? proudct.name : 'BEAUTY'}</div>
                        <div className={style.Hashtag}>
                            {`#${proudct.hashtag1} `}
                            {`#${proudct.hashtag2} `}
                            {`#${proudct.hashtag3} `}
                        </div>
                        <div className={style.Size}>300ml / 10.14 fl. oz.</div>
                    </div>
                    <img src={`/images/goods/goods_${proudct.color}.png`} alt="상품이미지2" />
                </div>
            </div>

            <div className={style.Userbox}>
                <table>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>{proudct.name}</td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td>{proudct.phone}</td>
                        </tr>
                        <tr>
                            <th>주문 주소</th>
                            <td>{proudct.addr}</td>
                        </tr>
                        <tr>
                            <th>결제금액</th>
                            <td>{proudct.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button onClick={moveOrderList} className="btn_common" style={{backgroundColor:proudct.color}}>모든 주문목록 보기</button>
        </div>
    );
}

export default OrderEnd;

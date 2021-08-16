import React from 'react';
import style from './OrderList.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import { onError } from "apollo-link-error";
import { colorcode } from '../../util/colorcode'

/***********************************
 * graphQL start
 ***********************************/
const GET_ORDERS = gql`
    query{
        orders {
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



function OrderList() {
    const cx = classNames.bind(style); // classNames
    const history = useHistory(); // router
    const user = localStorage.getItem('user') // for user_id


    const clickEditOrder = () => {

    }

    const clickDeleteOrder = () => {
        
    }

    /***********************************
     * apollo client
     ***********************************/
    const {data, loading, error} = useQuery(GET_ORDERS);


    const user_data = data?.orders.filter(order => order.user_id === JSON.parse(user).user.id );
    console.log("🚀 ~ file: index.js ~ line 56 ~ OrderList ~ user_data", user_data)

    
    return (
        <div className={style.OrderList}>
            <h2>님의 주문내역</h2>

            <ul className={style.List}>
                 {
                    ( !user_data
                    ) ? ( <li>주문 내역이 없습니다.</li>
                    ) : ( 
                        user_data.map((order, i) => 
                            <li>
                                <div className={style.Productbox}>
                                    <div className={cx('Item', 'Item1')}>
                                        <div className={style.InnerText}>
                                            <div className={style.ColorNum}>{colorcode(order.color)}</div>
                                            <div className={style.ItemName}>SHAMPOO</div>
                                            <div className={style.CodeName}>{order.title !== '' ? order.title : 'BEAUTY'}</div>
                                            <div className={style.Hashtag}>
                                                {`#${order.hashtag1} `}
                                                {`#${order.hashtag2} `}
                                                {`#${order.hashtag3} `}
                                            </div>
                                            <div className={style.Size}>300ml / 10.14 fl. oz.</div>
                                        </div>
                                        <img src={`/images/goods/goods_${order.color}.png`} alt="상품이미지1" />
                                    </div>

                                    <div className={cx('Item', 'Item2')}>
                                        <div className={style.InnerText}>
                                            <div className={style.ColorNum}>{colorcode(order.color)}</div>
                                            <div className={style.ItemName}>CONDITIONER</div>
                                            <div className={style.CodeName}>{order.title !== '' ? order.title : 'BEAUTY'}</div>
                                            <div className={style.Hashtag}>
                                                {`#${order.hashtag1} `}
                                                {`#${order.hashtag2} `}
                                                {`#${order.hashtag3} `}
                                            </div>
                                            <div className={style.Size}>300ml / 10.14 fl. oz.</div>
                                        </div>
                                        <img src={`/images/goods/goods_${order.color}.png`} alt="상품이미지2" />
                                    </div>
                                </div>

                                <div className={style.Userbox}>
                                    <p>
                                        <span>이름</span>
                                        <span>{order.name}</span>
                                    </p>
                                    <p>
                                        <span>전화번호</span>
                                        <span>{order.phone}</span>
                                    </p>
                                    <p>
                                        <span>주소</span>
                                        <span>{order.addr}</span>
                                    </p>
                                    <p>
                                        <span>결제금액</span>
                                        <span>{order.price}원</span>
                                    </p>
                                    <div className={style.Btnbox}>
                                        <button className="btn_common" onClick={clickEditOrder} style={{backgroundColor:order.color}}>주문수정</button>
                                        <button className={cx('btn_common', 'cancel')} onClick={clickDeleteOrder}>주문취소</button>
                                    </div>
                                </div>
                            </li>
                        )
                    ) // ) : ( 
                } 
            </ul>
        </div>
    );
}

export default OrderList;

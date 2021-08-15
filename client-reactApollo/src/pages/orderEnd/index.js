import React from 'react';
import style from './OrderEnd.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';

/***********************************
 * graphQL start
 ***********************************/
const GET_LAST_ORDER = gql`
    query GetLastOrder($user_id: Int!){
        lastOrder(user_id: $user_id){
            id
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


    /***********************************
     * apollo client
     ***********************************/
    const order = useQuery(GET_LAST_ORDER);
    console.log("🚀 ~ file: index.js ~ line 44 ~ OrderEnd ~ order", order.data)

    return (
        <div className={style.OrderEnd}>
            <h2>주문이 완료되었습니다.</h2>

            <div className="h50"></div>

            <Link to="/">
                <button class="btn_common">메인으로 이동</button>
            </Link>
        </div>
    );
}

export default OrderEnd;

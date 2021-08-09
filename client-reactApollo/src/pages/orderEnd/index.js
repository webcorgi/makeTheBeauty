import React from 'react';
import style from './OrderEnd.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

function OrderEnd() {

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

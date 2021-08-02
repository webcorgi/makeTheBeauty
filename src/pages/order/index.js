import React from 'react';
import style from './Order.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

function Order() {

    const cx = classNames.bind(style);

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
                    <input type="text" className={cx('InputStyle', 'Address')} placeholder="주소 입력" readonly="" />
                    
                    <button className={style.BtnSearch}><img src="/images/pay/ico_search.svg" alt="주소 버튼 이미지" /></button> 
                </div>
                <input type="text" className={style.InputStyle} placeholder="상세주소 입력" />
            </div>
            <div className={style.Right}>
                <div className={style.OrderInfoBox}>
                    <p className={style.TitlePay}>
                        <img src="/images/pay/ico_card.svg" alt="" />
                        결제 정보
                    </p>
                    <ul className={style.PayList}>
                        <li>
                            <span>샴푸, 컨디셔너 500ml</span>
                            <span>12,800원</span>
                        </li>
                        <li>
                            <span>색상</span>
                            <span>블루</span>
                        </li>
                        <li>
                            <span>상품이름</span>
                            <span>커스텀 샴푸</span>
                        </li>
                        <li>
                            <span>해시태그1</span>
                            <span>없음</span>
                        </li>
                        <li>
                            <span>해시태그2</span>
                            <span>없음</span>
                        </li>
                        <li>
                            <span>해시태그3</span>
                            <span>없음</span>
                        </li>
                        <li className={style.Total}>
                            <b>결제하실 금액</b>
                            <b>53,900원</b>
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

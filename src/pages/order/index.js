import React from 'react';
import style from './Order.module.css';

function Order() {
    return (
        <div className={style.Order}>
            <div className="left">
                <h2>결제</h2>
                <div className="title">주문자 정보</div>
                <div className="input_title">이름</div>
                <input type="text" className="inputStyle" placeholder="이름 입력" />

                <div className="input_title">휴대폰 번호</div>
                <input type="text" className="inputStyle" placeholder="휴대폰 번호 입력" />

                <div className="title">배송지 정보</div>
                <div className="input_title">이름</div>
                <div className="input_addr">
                    <input type="text" className="inputStyle addr" placeholder="주소 입력" readonly="" />
                    <button className="btn_search"></button>
                </div>
                <input type="text" className="inputStyle" placeholder="상세주소 입력" />
            </div>
            <div className="right">
                <div className="orderInfoBox">
                    <p className="title">
                        <img src="../images/pay/ico_card.svg" alt="" />
                        결제 정보
                    </p>
                    <ul>
                        <li>
                            <span className="arr_down">제품 금액</span>
                            <span>72,800원</span>
                            <ul>
                                <li>
                                    <span>코드포뷰티 샴푸, 컨디셔너 300ml *2</span>
                                    <span>12,800원</span>
                                </li>
                                <li>
                                    <span>코드포뷰티 샴푸 700ml *1</span>
                                    <span>27,800원</span>
                                </li>
                                <li>
                                    <span>대나무 수건 * 1</span>
                                    <span>9,800원</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="arr_down">제품 할인 금액</span>
                            <span>-28,800원</span>
                            <ul>
                                <li>
                                    <span>기본 할인</span>
                                    <span>-12,000원</span>
                                </li>
                                <li>
                                    <span>쿠폰 사용 [50% 생일축하]</span>
                                    <span>-2,000원</span>
                                </li>
                                <li>
                                    <span>적립금 사용</span>
                                    <span>-6,800원</span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span>배송비</span>
                            <span>2,500원</span>
                        </li>
                        <li>
                            <b>결제하실 금액</b>
                            <b>
                                53,900원
                                <span>3,250원(5%) 적립</span>
                            </b>
                        </li>
                    </ul>
                    
                    <div className="h30"></div>
                    
                    <button className="">결제하기</button>
                    결제를 진행하면 <a href="./privacy.php">결제서비스 약관</a> 및 배송을 위한<br />
                    <a href="./terms.php">개인정보 제공 및 위탁</a>에 동의하는 것으로 간주합니다.
                </div>
            </div>
        </div>
    );
}

export default Order;

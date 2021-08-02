import React from 'react';
import style from './Home.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const colorArr = [
    'blue',
    'green',
    'red',
    'violet'
]

function Home() {
    const cx = classNames.bind(style);


    return (
        <div className={style.Home}>

            <div className={style.Textbox}>
                <h2>상품을 내 마음대로 꾸며보세요!</h2>
                <p>취향에 맞는 향은 물론 알록달록한 샴푸색상으로 욕실 분위기를 바꿔보세요 !</p>
            </div>
            
            <div className={style.Goodsbox}>
                <img src={'/images/main/bracket_left_gray.svg'} className={style.BracketLeft} />
                <img src={'/images/main/bracket_right_gray.svg'} className={style.BracketRight} />

                <div className={cx('Item', 'Item1')}>
                    <div className={style.InnerText}>
                        <p className={style.ColorNum}>#291253</p>
                        <p className={style.ItemName}>SHAMPOO</p>
                        <p className={style.CodeName}>BEAUTY</p>
                        <p className={style.Hashtag}>
                            PERSONALIZED HAIR CARE
                        </p>
                        <p className={style.Size}>300ml / 10.14 fl. oz.</p>
                    </div>
                    <img src="/images/goods/goods_violet.png" alt="상품이미지1" />
                </div>

                <div className={cx('Item', 'Item2')}>
                    <div className={style.InnerText}>
                        <p className={style.ColorNum}>#291253</p>
                        <p className={style.ItemName}>CONDITIONER</p>
                        <p className={style.CodeName}>BEAUTY</p>
                        <p className={style.Hashtag}>
                            PERSONALIZED HAIR CARE
                        </p>
                        <p className={style.Size}>300ml / 10.14 fl. oz.</p>
                    </div>
                    <img src="/images/goods/goods_violet.png" alt="상품이미지2" />
                </div>

                <div className={style.CustomWrapper}>
                    <ul className={style.Colorbox}>
                        {
                            colorArr.map((color, i) => {
                                return (
                                    <li key={i}>
                                        <label>
                                            <input type="radio" className="color_shampoo" name="color_shampoo" />
                                            <div style={{background:color}}></div>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className={style.InputGoodsnameWrap}>
                        <img src="/images/main/bracket_left_black.svg" className={style.BreacketLeftBlack} />
                        <img src="/images/main/bracket_right_black.svg" className={style.BreacketRightBlack} />
                        <input type={"text"} className={style.InputGoodsname}  placeholder={"상품이름"} />
                    </div>


                    <div className={style.InputHashtagWrap}>
                        <label className={style.InputHashtag}>
                            <img src="/images/main/hashtag.svg" />
                            <input type="text" placeholder="해시태그" />
                        </label>
                        <label className={style.InputHashtag}>
                            <img src="/images/main/hashtag.svg" />
                            <input type="text" placeholder="해시태그" />
                        </label>
                        <label className={style.InputHashtag}>
                            <img src="/images/main/hashtag.svg" />
                            <input type="text" placeholder="해시태그" />
                        </label>
                    </div>

                    <Link to="/order" ><a className="btn_common">제품 주문하기</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
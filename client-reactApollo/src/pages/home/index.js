import React, { useState, useEffect } from 'react';
import style from './Home.module.css';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';

import { useQuery, useMutation, gql } from '@apollo/client';

/**
 * graphQL
 */
const GET_COLORS = gql`
    query{
        colors{
            id
            color_name
        }
    }
`;



function Home() {
    const cx = classNames.bind(style);
    const history = useHistory();

    const [selectedColor, setSelectedColor] = useState('red');
    const [productName, setProductName] = useState('');
    const [hashtag, setHashtag] = useState([
        {
            id:0,
            tag_name:'',
        },
        {
            id:1,
            tag_name:'',
        },
        {
            id:2,
            tag_name:'',
        },
    ]);

    useEffect(() => {
        console.log("🚀 ~ file: index.js ~ line 100 ~ Home ~ tag", hashtag)
    }, [hashtag]);


    // 색상
    const clickColor = (color) => {
        setSelectedColor(color);
    }

    // 상품이름
    const changeProductName = (e) => {
        setProductName(e.target.value)
    }

    // 해시태그1,2,3
    const changeHashtag = (e, idx) => {
        const { value } = e.target;

        // input value 저장
        let getHashtag = [
            ...hashtag.filter(h => h.id !== idx),
            {
                id:idx,
                tag_name: value
            }
        ];

        // id 기준으로 오름차순 정렬
        getHashtag.sort((a,b) => { 
            return a.id-b.id;
        })

        setHashtag(getHashtag)
    }

    // 제품 주문하기
    const clickSubmit = () => {
        history.push("/order")
    }


    const get_colors = useQuery(GET_COLORS);

    if (get_colors.loading) return <p className="loading">Loading...</p>
    if (get_colors.error) return <p className="error">Error :(</p>


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
                        <p className={style.CodeName}>{productName !== '' ? productName : 'BEAUTY'}</p>
                        <p className={style.Hashtag}>
                            {
                                hashtag.map((tag, i) => 
                                    tag.tag_name !== '' &&
                                    <span key={i}>
                                        {`#${tag.tag_name} `}
                                    </span>
                                )
                            }
                        </p>
                        <p className={style.Size}>300ml / 10.14 fl. oz.</p>
                    </div>
                    <img src={`/images/goods/goods_${selectedColor}.png`} alt="상품이미지1" />
                </div>

                <div className={cx('Item', 'Item2')}>
                    <div className={style.InnerText}>
                        <p className={style.ColorNum}>#291253</p>
                        <p className={style.ItemName}>CONDITIONER</p>
                        <p className={style.CodeName}>{productName !== '' ? productName : 'BEAUTY'}</p>
                        <p className={style.Hashtag}>
                            {
                                hashtag.map((tag, i) => 
                                    tag.tag_name !== '' &&
                                    <span key={i}>
                                        {`#${tag.tag_name} `}
                                    </span>
                                )
                            }
                        </p>
                        <p className={style.Size}>300ml / 10.14 fl. oz.</p>
                    </div>
                    <img src={`/images/goods/goods_${selectedColor}.png`} alt="상품이미지2" />
                </div>

                <div className={style.CustomWrapper}>
                    <ul className={style.Colorbox}>
                        {
                            get_colors.data.colors.map((color, i) => {
                                return (
                                    <li key={color.id}>
                                        <label onClick={() => clickColor(color.color_name)}>
                                            <input type="radio" className="color_shampoo" name="color_shampoo" />
                                            <div style={{background:color.color_name}}></div>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className={style.InputGoodsnameWrap}>
                        <img src="/images/main/bracket_left_black.svg" className={style.BreacketLeftBlack} />
                        <img src="/images/main/bracket_right_black.svg" className={style.BreacketRightBlack} />
                        <input type={"text"} className={style.InputGoodsname} onChange={changeProductName}  placeholder={"상품이름"} />
                    </div>


                    <div className={style.InputHashtagWrap}>
                        {
                            hashtag.map((tag, i) => {

                                return (
                                    <label key={i} className={style.InputHashtag}>
                                        <img src="/images/main/hashtag.svg" />
                                        <input type="text" name={`hashtag${i}`} placeholder="해시태그" onChange={(e) => changeHashtag(e, i)} />
                                    </label>
                                )
                            })
                        }
                    </div>

                    <a 
                        className="btn_common"
                        style={{backgroundColor:`${selectedColor}`}}
                        onClick={clickSubmit}
                    >
                        제품 주문하기
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
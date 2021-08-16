import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import style from './Modify.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';


/***********************************
 * graphQL start
 ***********************************/
const EDIT_ORDER = gql`
    mutation EditOrder($id: ID!, $input: PostOrderInput!){
        editOrder(id:$id, input: $input){
            id
            user_id,
            color,
            title,
            hashtag1,
            hashtag2,
            hashtag3,
            name,
            phone,
            addr,
            price,
            is_pay
        }
    },
`;
/***********************************
* graphQL end
***********************************/


// refetch는 orderlist 에서 해주고 있기 때문에, 변경 값이 화면에 갱신되므로 닫음.
// let refetchOrder; // refetch variables

function Modify({ order, setIsShowModify }) {
    const cx = classNames.bind(style); // classNames

    /***********************************
     * states
     ***********************************/
    const [colorChecked, setColorChecked] = useState(order.color);
    const [inputs, setInputs] = useState(order);

    /***********************************
     * apollo client
     ***********************************/
    // const { data, refetch } = useQuery(GET_ORDERS);
    const [editOrder] = useMutation( EDIT_ORDER, { onCompleted: editOrderCompleted })
    
    function execEditOrder(){
        const result_data = {
            user_id:inputs.user_id,
            color:inputs.color,
            title:inputs.title,
            hashtag1:inputs.hashtag1,
            hashtag2:inputs.hashtag2,
            hashtag3:inputs.hashtag3,
            name:inputs.name,
            phone:inputs.phone,
            addr:inputs.addr,
            price:inputs.price,
            is_pay:inputs.is_pay
        }

        editOrder({
            variables:{
                id:order.id, 
                input:result_data
            }
        })
    }

    function editOrderCompleted(){
        alert('상품을 수정했어요')
        setIsShowModify(false)
    }

    /***********************************
     * functions
     ***********************************/
    const changeInputs = (e) => {
        const new_data = {
            ...inputs,
            [e.target.name]:e.target.value
        }
        
        setInputs(new_data)
    }

    const clickSubmit = () => {
        if( window.confirm('이 정보로 수정하시겠어요 ?') ){
            execEditOrder();
            // refetchOrder = refetch;
            // refetchOrder();
        }
    }


    /***********************************
     * components
     ***********************************/
    const InputColorCode = useCallback(({ color }) =>
        <label>
            <input 
                type="radio" 
                name="color" 
                value={color} 
                onChange={(e) => {
                    setColorChecked(color);
                    changeInputs(e);
                }}
            />
            <span className={style.ColorCode}></span>
        </label>
    ,[]);

    const Inputbox = useCallback(({ clickSubmit, title, value, name, type }) => 
        <div className={style.Inputbox}>
            <p>{title}</p>
            <input 
                type={type} 
                value={value} 
                name={name}
                onChange={changeInputs} 
                className={style.InputStyle} 
            />
            <button onClick={clickSubmit} style={{backgroundColor:colorChecked}}>수정</button>
        </div>
    ,[]);


    return (
        <div className={style.Modify}>
            <h3>상품 수정</h3>
            <div className={style.Inputbox}>
                <p>상품 색상</p>
                <div className={style.Colorbox}>
                    <InputColorCode color={"red"} />
                    <InputColorCode color={"blue"} />
                    <InputColorCode color={"green"} />
                    <InputColorCode color={"violet"} />
                </div>
            </div>
            <Inputbox clickSubmit={clickSubmit} title={"상품 이름"} value={inputs.title} name={'title'} type={"text"} />
            <Inputbox clickSubmit={clickSubmit} title={"상품 해시태그1"} value={inputs.hashtag1} name={'hashtag1'} type={"text"} />
            <Inputbox clickSubmit={clickSubmit} title={"상품 해시태그2"} value={inputs.hashtag2} name={'hashtag2'} type={"text"} />
            <Inputbox clickSubmit={clickSubmit} title={"상품 해시태그3"} value={inputs.hashtag3} name={'hashtag3'} type={"text"} />
            <Inputbox clickSubmit={clickSubmit} title={"주문자 이름"} value={inputs.name} name={'name'} type={"text"} />
            <Inputbox clickSubmit={clickSubmit} title={"주문자 번호"} value={inputs.phone} name={'phone'} type={"number"} />
            <Inputbox clickSubmit={clickSubmit} title={"주문자 주소"} value={inputs.addr} name={'addr'} type={"text"} />
            <button className={cx('btn_common', 'cancel', 'w100')} onClick={() => setIsShowModify(false)}>수정 취소</button>
        </div>
    );
}

export default Modify;

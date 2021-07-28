import React from 'react';
import style from './Wrapper.module.css'

function Wrapper({children }) {
    return (
        <>
            <div className={style.Wrapper}>
                {children}
            </div>
            <div className={style.Banner}>
                <p>아름다움을 위한 끊임없는 연구</p>
                <img src="/images/main/banner_bg.png" alt="" />
            </div>
        </>
    );
}

export default Wrapper;

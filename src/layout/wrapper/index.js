import React from 'react';
import style from './Wrapper.module.css'

function Wrapper({children }) {
    return (
        <div className={style.Wrapper}>
            {children}
        </div>
    );
}

export default Wrapper;

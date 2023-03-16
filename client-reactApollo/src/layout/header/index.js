import React, { useState } from 'react';
import style from './Header.module.css'
import { Link } from "react-router-dom";

function Header() {
    const [openNav, setOpenNav] = useState(false);

    const navOpener = () => setOpenNav(true);
    const navCloser = () => setOpenNav(false);

    return (
        <>
            <div className={style.HeaderPc}>
                <Link to="/beauty" className={style.Logo}>MAKE THE BEAUTY</Link>
                <Link to="/beauty">ORDER</Link>
                <Link to="/beauty/orderList">ORDER LIST</Link>
            </div>

            <div className={style.HeaderMobile}>
                <Link to="/beauty" className={style.Logo}>MAKE THE BEAUTY</Link>
                <button className={style.NavOpen} onClick={navOpener}>
                    <img src="/images/common/hamburger.svg" alt="open navigation"/>
                </button>

                <nav isshow={openNav===false ? '' : 'active'}>
                    <button className={style.NavClose} onClick={navCloser}>
                        <img src="/images/common/hamburger_close.svg" alt="close navigation" />
                    </button>
                    <Link onClick={navCloser} to="/">ORDER</Link>
                    <Link onClick={navCloser} to="/orderList">ORDER LIST</Link>

                    <p>MAKE THE BEAUTY</p>
                </nav>
            </div>
        </>
    );
}

export default Header;

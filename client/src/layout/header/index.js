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
                <Link to="/"><a className={style.Logo}>MAKE THE BEAUTY</a></Link>
                <Link to="/order"><a>ORDER</a></Link>
                <Link to="/faq"><a>FAQ</a></Link>
                <Link to="/login"><a>LOGIN</a></Link>
                <Link to="/signup"><a>SINGUP</a></Link>
            </div>

            <div className={style.HeaderMobile}>
                <Link to="/"><a className={style.Logo}>MAKE THE BEAUTY</a></Link>
                <button className={style.NavOpen} onClick={navOpener}>
                    <img src="/images/common/hamburger.svg" alt="open navigation"/>
                </button>

                <nav isshow={openNav===false ? '' : 'active'}>
                    <button className={style.NavClose} onClick={navCloser}>
                        <img src="/images/common/hamburger_close.svg" alt="close navigation" />
                    </button>
                    <Link onClick={navCloser} to="/order"><a>ORDER</a></Link>
                    <Link onClick={navCloser} to="/faq"><a>FAQ</a></Link>
                    <Link onClick={navCloser} to="/login"><a>LOGIN</a></Link>
                    <Link onClick={navCloser} to="/signup"><a>SINGUP</a></Link>

                    <p>MAKE THE BEAUTY</p>
                </nav>
            </div>
        </>
    );
}

export default Header;

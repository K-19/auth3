import style from "./Footer.module.css";
import TodesLogo from './TodesLogo/TodesLogo'
import React from "react";

const Footer = () => {
    return (
        <footer>
            <TodesLogo height='100%' width='auto'/>
            <span className={style.year}>© <u>2022</u></span>
            <span className={style.text}>НПООО ТОДЕС Все права защищены</span>
        </footer>
    )
}

export default Footer;

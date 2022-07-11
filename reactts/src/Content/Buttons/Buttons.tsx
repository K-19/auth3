import style from './Buttons.module.css'
import React from "react";

interface IProps {
    setRegModalActive : any;
    setPassResetModalActive : any;
}

const Buttons: React.FC<IProps> = ({setRegModalActive, setPassResetModalActive}) => {
    return (
        <div className={style.buttonPanel}>
            <button className={style.regButton} onClick={() => setRegModalActive(true)}>Регистрация</button>
            <button className={style.passButton} onClick={() => setPassResetModalActive(true)}>Забыли пароль?</button>
        </div>
    )
}

export default Buttons;
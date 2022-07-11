import style from './InputPanel.module.css'
import React from "react";

const InputPanel = () => {
    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <div className={style.inputLogin}>
                    <input placeholder='Логин СЭД'/>
                </div>
                <br/>
                <div className={style.inputPassword}>
                    <input type="password" placeholder='Пароль'/>
                </div>
            </div>
            <div className={style.enterButton}>
                <button/>
            </div>
        </div>
    )
}

export default InputPanel;
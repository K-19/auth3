import React from "react";
import style from './PassResetPanel.module.css'

interface IProps {
    setPassResetModalActive: any;
}

const PassResetPanel: React.FC<IProps> = ({setPassResetModalActive}) => {
    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <h1>Восстановление пароля</h1>
                <div className={style.inputLogin}>
                    <input placeholder='Логин'/>
                </div>
                <br/>
                <div>
                    <input placeholder='Проверочное слово'/>
                </div>
                <div className={style.buttons}>
                    <button onClick={() => setPassResetModalActive(false)}>Восстановить пароля</button>
                    <button onClick={() => setPassResetModalActive(false)}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default PassResetPanel;
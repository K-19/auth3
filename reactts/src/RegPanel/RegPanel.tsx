import style from "./RegPanel.module.css";
import React from "react";

interface IProps {
    setRegModalActive: any;
}

const RegPanel: React.FC<IProps> = ({setRegModalActive}) => {
    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <h1>Регистрация</h1>
                <div className={style.inputLogin}>
                    <input placeholder='Логин'/>
                </div>
                <br/>
                <div>
                    <input type="password" placeholder='Пароль'/>
                </div>
                <br/>
                <div>
                    <input type="password" placeholder='Подтверждение пароля'/>
                </div>
                <br/>
                <div>
                    <input placeholder='Учетная запись СМДО'/>
                </div>
                <br/>
                <div>
                    <input type="password" placeholder='Пароль от учетной записи СМДО'/>
                </div>
                <br/>
                <div>
                    <input placeholder='Проверочное слово (требуется для восстановления пароля)'/>
                </div>
                <div className={style.buttons}>
                    <button onClick={() => setRegModalActive(false)}>Зарегистрироваться</button>
                    <button onClick={() => setRegModalActive(false)}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default RegPanel;
import style from "./RegPanel.module.css";
import React from "react";
import properties from "../config";

interface IProps {
    setRegModalActive: any;
}

const RegPanel: React.FC<IProps> = ({setRegModalActive}) => {
    return (
        <div className={style.main}>
            <div className={style.inputs}>
                <h1>Регистрация</h1>
                <div className={style.inputLogin}>
                    <input id="regLogin" placeholder='Логин'/>
                </div>
                <br/>
                <div>
                    <input id="regPassword" type="password" placeholder='Пароль'/>
                </div>
                <br/>
                <div>
                    <input id="regConfirmPass" type="password" placeholder='Подтверждение пароля'/>
                </div>
                <br/>
                <div>
                    <input id="regAccSMDO" placeholder='Учетная запись СМДО'/>
                </div>
                <br/>
                <div>
                    <input id="regPassSMDO" type="password" placeholder='Пароль от учетной записи СМДО'/>
                </div>
                <br/>
                <div>
                    <input id="regTestWord" placeholder='Проверочное слово (требуется для восстановления пароля)'/>
                </div>
                <div className={style.buttons}>
                    <button onClick={() => {
                        registration();
                        setRegModalActive(false);
                    }}>
                        Зарегистрироваться
                    </button>
                    <button onClick={() => setRegModalActive(false)}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

interface UserData {
    regLogin: string,
    regPassword: string,
    regConfirmPass: string,
    regAccSMDO: string,
    regPassSMDO: string,
    regTestWord: string
}

async function registration() {
    const loginSED = document.getElementById("regLogin") as HTMLInputElement;
    if (loginSED == null || loginSED.value == '')
        return;
    let password = document.getElementById("regPassword") as HTMLInputElement;
    if (password == null || password.value == '')
        return;
    let regConfirmPass = document.getElementById("regConfirmPass") as HTMLInputElement;
    if (regConfirmPass == null || regConfirmPass.value == '')
        return;
    let accountSMDO = document.getElementById("regAccSMDO") as HTMLInputElement;
    if (accountSMDO == null || accountSMDO.value == '')
        return;
    let passwordAccountSMDO = document.getElementById("regPassSMDO") as HTMLInputElement;
    if (passwordAccountSMDO == null || passwordAccountSMDO.value == '')
        return;
    let testWord = document.getElementById("regTestWord") as HTMLInputElement;
    if (testWord == null || testWord.value == '')
        return;
    if (regConfirmPass.value.localeCompare(password.value) != 0)
        return;
    const userData = {
        loginSED: loginSED.value,
        password: password.value,
        accountSMDO: accountSMDO.value,
        passwordAccountSMDO: passwordAccountSMDO.value,
        testWord: testWord.value
    }
    const url = properties.serverUrl + "/api/reg";
    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const answer: UserData = await response.json();
        console.log(answer);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export default RegPanel;
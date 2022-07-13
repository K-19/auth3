import style from './InputPanel.module.css'
import React from "react";
import properties from '../../config'

const InputPanel = () => {
    return (
        <div className={style.main}>
            <script src="../../config.js"/>
            <div className={style.inputs}>
                <div className={style.inputLogin}>
                    <input id='loginSEDInput' placeholder='Логин СЭД'/>
                </div>
                <br/>
                <div className={style.inputPassword}>
                    <input id='passwordInput' type="password" placeholder='Пароль'/>
                </div>
            </div>
            <div className={style.enterButton}>
                <button onClick={login}/>
            </div>
        </div>
    )
}

interface User {
    loginSED: string,
    password: string,
    accountSMDO: string,
    passwordAccountSMDO: string,
    testWord: string
}

async function login() {
    const loginSED = document.getElementById("loginSEDInput") as HTMLInputElement;
    if (loginSED == null || loginSED.value == '')
        return;
    let password = document.getElementById("passwordInput") as HTMLInputElement;
    if (password == null || password.value == '')
        return;
    const userData = {
        loginSED: loginSED.value,
        password: password.value
    }
    const url = properties.serverUrl + "/api/login";
    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const answer: User = await response.json();
        console.log(answer);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export default InputPanel;
import React from "react";
import style from './PassResetPanel.module.css'
import properties from "../config";

interface IProps {
    setPassResetModalActive: any;
}

interface IState {
    user: any;
}

interface UserData {
    loginSED: string,
    password: string,
    confirmPass: string,
    accSMDO: string,
    passSMDO: string,
    testWord: string
}

class PassResetPanel extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            user: null
        };
    }

    render() {
        if (this.state.user == null)
            return (
                <div className={style.main}>
                    <div className={style.inputs}>
                        <h1>Восстановление пароля</h1>
                        <div className={style.inputLogin}>
                            <input id="loginPassReset" placeholder='Логин'/>
                        </div>
                        <br/>
                        <div>
                            <input id="testWordPassReset" placeholder='Проверочное слово'/>
                        </div>
                        <div className={style.buttons}>
                            <button onClick={() => this.checkTestWord()}>Восстановить пароль</button>
                            <button onClick={() => this.props.setPassResetModalActive(false)}>Отмена</button>
                        </div>
                    </div>
                </div>
            )
        else return (
            <div className={style.main}>
                <div className={style.inputs}>
                    <h1>Восстановление пароля</h1>
                    <div className={style.inputLogin}>
                        <input id="passReset" placeholder='Новый пароль'/>
                    </div>
                    <br/>
                    <div>
                        <input id="confirmPassReset" placeholder='Подтвердите пароль'/>
                    </div>
                    <div className={style.buttons}>
                        <button onClick={() => {
                            this.resetPassword();
                            this.props.setPassResetModalActive(false);
                        }}>Установить новый пароль
                        </button>
                        <button onClick={() => {
                            this.props.setPassResetModalActive(false);
                            this.setState({
                                user: null
                            })
                        }}>Отмена
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    async checkTestWord() {
        const login = document.getElementById("loginPassReset") as HTMLInputElement;
        if (login == null || login.value == '')
            return;
        let testWord = document.getElementById("testWordPassReset") as HTMLInputElement;
        if (testWord == null || testWord.value == '')
            return;
        const userData = {
            loginSED: login.value,
            testWord: testWord.value,
        }
        const url = properties.serverUrl + "/api/word";
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const answer: UserData = await response.json();
            this.setState({
                user: answer
            })
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            console.log(answer);
        } catch (error) {
            console.error('Ошибка:', error);
            this.props.setPassResetModalActive(false);
        }
    }

    async resetPassword() {
        const pass = document.getElementById("passReset") as HTMLInputElement;
        if (pass == null || pass.value == '')
            return;
        let confirmPass = document.getElementById("confirmPassReset") as HTMLInputElement;
        if (confirmPass == null || confirmPass.value == '')
            return;
        const userData = {
            loginSED: this.state.user.loginSED,
            password: pass.value,
            confirmPass: confirmPass.value,
        }
        const url = properties.serverUrl + "/api/resetPass";
        try {
            const response = await fetch(url, {
                method: 'POST',
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
}

export default PassResetPanel;
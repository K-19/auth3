import style from "./Content.module.css";
import Logo from "./Logo/Logo";
import InputPanel from "./InputPanel/InputPanel";
import Buttons from "./Buttons/Buttons";
import React from "react";

interface IProps {
    setRegModalActive : any;
    setPassResetModalActive : any;
}

const Content: React.FC<IProps> = ({setRegModalActive, setPassResetModalActive}) => {
    return (
        <div className={style.content}>
            <div className={style.identification}>
                <Logo/>
                <InputPanel/>
                <Buttons setRegModalActive={setRegModalActive} setPassResetModalActive={setPassResetModalActive}/>
            </div>
        </div>
    )
}

export default Content;
import style from './App.module.css';
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import React, {useState} from "react";
import Modal from "./Modal/Modal";
import RegPanel from "./RegPanel/RegPanel";
import PassResetPanel from "./PassResetPanel/PassResetPanel";

function App() {
    const [regModalActive, setRegModalActive] = useState(false);
    const [passResetModalActive, setPassResetModalActive] = useState(false);
    return (
        <div className={style.app}>
            <Content setRegModalActive={setRegModalActive} setPassResetModalActive={setPassResetModalActive}/>
            <Footer/>
            <Modal active={regModalActive} setActive={setRegModalActive}>
                <RegPanel setRegModalActive={setRegModalActive}/>
            </Modal>
            <Modal active={passResetModalActive} setActive={setPassResetModalActive}>
                <PassResetPanel setPassResetModalActive={setPassResetModalActive}/>
            </Modal>
        </div>
    )
}

export default App;

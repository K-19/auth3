import React from "react";
import style from './Modal.module.css'

interface IProps {
    active: boolean;
    setActive: any;
    children: any;
}

const Modal: React.FC<IProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? style.modal + " " + style.active : style.modal} onClick={() => setActive(false)}>
            <div className={active ? style.modal__content + " " + style.active : style.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;
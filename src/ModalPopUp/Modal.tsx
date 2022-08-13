import React, {FC} from "react";
import ReactDOM from 'react-dom';

interface ModalProps{
    onBackDropClick:() => void;
    children:JSX.Element
}

const Modal:FC<ModalProps> = ({onBackDropClick, children}) => {

    return ReactDOM.createPortal(
        <div onClick={onBackDropClick}>
            {children}
        </div>,
        document.body
    );
}

export default Modal;
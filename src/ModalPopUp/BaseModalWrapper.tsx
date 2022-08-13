import React, {FC} from "react";
import Modal from "./Modal";

interface BaseModalWrapperProps{
    onBackDropClick: () => void;
    isModalVisible:boolean;
}

const BaseModalWrapper:FC<BaseModalWrapperProps> = ({onBackDropClick, isModalVisible}) =>{

    if(!isModalVisible){
        return null;
    }
    else return (
        <Modal onBackDropClick={onBackDropClick}>
            <span>N'oublie jamais d'où tu viens et où veux-tu aller</span>
        </Modal>
    );

}

export default BaseModalWrapper;
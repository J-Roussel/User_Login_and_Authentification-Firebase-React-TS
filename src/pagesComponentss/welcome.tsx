import React,{ FC } from "react";
import welcomeImg from "../images/welcome.png";
import '../App.css';
import '../pagesComponentss/welcome.css';

import { signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

import {auth} from "../config/firebase";

export interface IWelcomeProps {};

const Welcome:FC<IWelcomeProps> = ():JSX.Element => {

    const navigate = useNavigate();

    return (
        <div className="containerAll">
            <div className="containerGrid">
                <div className="containerWelcomeImg">
                    <img src={welcomeImg} alt="welcome" className="welcomeImg"/>
                </div>
                <div className="deconnecter">
                    <input 
                        onClick={() => {
                            signOut(auth);
                            navigate('/Connexion');
                        
                        }} 
                        type="submit" 
                        value="SE DECONNECTER" 
                        className="inputBtnSubmit"/>
                </div>
            </div>
        </div>
    );

}

export default Welcome;
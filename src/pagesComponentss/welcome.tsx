import React,{ FC } from "react";
import welcomeImg from "../images/welcome.png";
import '../App.css';
import '../pagesComponentss/welcome.css';


export interface IWelcomeProps {};

const Welcome:FC<IWelcomeProps> = ():JSX.Element => {


    return (
        <div className="containerAll">
            <div className="containerGrid">
                <div className="containerWelcomeImg">
                    <img src={welcomeImg} alt="welcome" className="welcomeImg"/>
                </div>
                <div className="deconnecter">
                    <input type="submit" value="SE DECONNECTER" className="inputBtnSubmit"/>
                </div>
            </div>
        </div>
    );

}

export default Welcome;
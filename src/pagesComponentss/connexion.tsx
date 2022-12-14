import React, {FC,  useState, useContext, useRef} from "react";
import logoFacebook from "../../src/images/facebookk.png";
import logoGoogle from "../../src/images/google.png";
import logoGithub from "../../src/images/github.png";
import '../bootstrap-4.5.3-dist/css/bootstrap.min.css';
import '../App.css';
import BaseModalWrapper from "../ModalPopUp/BaseModalWrapper";
import {useNavigate} from "react-router-dom";

import {auth} from "../config/firebase";


import {AuthProvider, UserCredential, signInWithPopup} from "firebase/auth";
import { Providers } from "../config/firebase";

const Connexion:FC = ():JSX.Element => {

    const navigate = useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);



    //sign in : social media
    const signInWithSocialMedia = async (provider: AuthProvider) => {
      setAuthing(true);
      new Promise<UserCredential>((resolve, reject) => {
        signInWithPopup(auth, provider)
        .then((result) => {
          resolve(result);
          console.log(result.user.uid);
          navigate("/");
          
        })
        .catch(error => {
          reject(error);
          console.log("misy error");
          console.log(error);
          setAuthing(false);
          navigate("/");
        });
      });

    }


    
    
    
    
    //changer les valeurs des champs
    const [mailValue, setMailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e:React.FormEvent<HTMLInputElement>):void => {
      (e.currentTarget.name === "mailValue")?setMailValue(e.currentTarget.value):setPasswordValue(e.currentTarget.value);
    }
  


    //modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const toggleModal = () =>{
      setIsModalVisible(!isModalVisible);
    }
    




    
    return (
      <div className="containerAll" >
        <div className="containerGrid">
          <div className="containerAllForm">
            <div className="infoLogin">
                <label htmlFor="email">Adresse email <br />
                  <input  type="email" placeholder="rakoto@gmail.com" value={mailValue} className="inputInfoLogin" onChange={handleChange} name="mailValue"/>
                </label>
            </div>
            <div className="infoLogin">
                <label htmlFor="password">Mot de passe <br />
                  <input  type="password" placeholder="Mot de passe" value={passwordValue} className="inputInfoLogin" name="passwordValue" onChange={handleChange}/>
                </label>
            </div>
            <div className="btnSubmit">
              <input onClick={() => {
                signInWithSocialMedia(Providers.email);
                }} type="submit" value="SE CONNECTER" className="inputBtnSubmit" disabled ={authing}/>
              <div className="authentify-with">
                <button onClick={() => signInWithSocialMedia(Providers.facebook)} disabled ={authing} className="methods-link">
                  <img src={logoFacebook} alt="facebook" className="auth-logo"/>
                </button>
                <button onClick={() => signInWithSocialMedia(Providers.google)} disabled ={authing} className="methods-link">
                  <img src={logoGoogle} alt="google" className="auth-logo"/>
                </button>
                <button onClick={() => signInWithSocialMedia(Providers.github)} disabled={authing} className="methods-link">
                  <img src={logoGithub} alt="github" className="auth-logo"/>
                </button>
              </div>
            </div>
            <div className="creerCompte">
              <a href="#" className="aCreerCompte" onClick={toggleModal}>cr??er un compte</a>
            </div>
          </div>
        </div>
        <div>
          <BaseModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal} />
        </div>
      </div>
    );
  }
  
  export default Connexion;
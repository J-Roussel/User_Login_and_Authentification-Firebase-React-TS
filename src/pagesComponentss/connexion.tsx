import React, {FC, useState} from "react";
import logoFacebook from "../../src/images/facebookk.png";
import logoGoogle from "../../src/images/google.png";
import logoGithub from "../../src/images/github.png";
import '../bootstrap-4.5.3-dist/css/bootstrap.min.css';
import '../App.css';
import BaseModalWrapper from "../ModalPopUp/BaseModalWrapper";
import {useNavigate} from "react-router-dom";

import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Connexion:FC = ():JSX.Element => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);

    const signInWithGoogle = async () => {
      setAuthing(true);

      signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
        
      })
      .catch(error => {
        console.log(error);
        setAuthing(false);
      })
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
                  <input type="email" placeholder="rakoto@gmail.com" value={mailValue} className="inputInfoLogin" onChange={handleChange} name="mailValue"/>
                </label>
            </div>
            <div className="infoLogin">
                <label htmlFor="password">Mot de passe <br />
                  <input type="password" placeholder="Mot de passe" value={passwordValue} className="inputInfoLogin" name="passwordValue" onChange={handleChange}/>
                </label>
            </div>
            <div className="btnSubmit">
              <input type="submit" value="SE CONNECTER" className="inputBtnSubmit"/>
              <div className="authentify-with">
                <a href="#" className="facebook-link">
                  <img src={logoFacebook} alt="facebook" className="auth-logo"/>
                </a>
                <button onClick={() => signInWithGoogle()} disabled ={authing}>
                  <img src={logoGoogle} alt="google" className="auth-logo"/>
                </button>
                <a href="">
                  <img src={logoGithub} alt="github" className="auth-logo"/>
                </a>
              </div>
            </div>
            <div className="creerCompte">
              <a href="#" className="aCreerCompte" onClick={toggleModal}>créer un compte</a>
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
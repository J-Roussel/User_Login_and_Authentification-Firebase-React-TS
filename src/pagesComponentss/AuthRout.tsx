import React,{ FC, PropsWithChildren, useEffect, useState} from "react";
import { onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../config/firebase";

export interface IAuthRouteProps {};

const AuthRoute:FC<IAuthRouteProps> = ( props:PropsWithChildren) => {

    const {children} = props;
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        AuthCheck();
        return AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false);
            console.log("user detected");
            
        }
        else {
            console.log("no user detected");         
            navigate('/Connexion');
        }
    });

    if(loading) return <p>loading...</p>

    return (
        <>
            {children}
        </>
    );

}

export default AuthRoute;
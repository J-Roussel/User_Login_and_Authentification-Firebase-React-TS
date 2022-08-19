import React, {FC} from "react";
import './bootstrap-4.5.3-dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Welcome from "./pagesComponentss/welcome";
import Connexion from "./pagesComponentss/connexion";

import {initializeApp} from "firebase/app";
import { config } from "./auth/config";
import AuthRoute from "./pagesComponentss/AuthRout";


initializeApp(config.firebaseConfig);

export interface IAppProps {};

const App:FC = ():JSX.Element => {


  return (
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
            <AuthRoute>
              <Welcome />
            </AuthRoute>}    
          />

          <Route path="/Connexion" element={<Connexion />}/>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;



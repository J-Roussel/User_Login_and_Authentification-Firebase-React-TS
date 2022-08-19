import React, {FC, useState} from "react";
import './bootstrap-4.5.3-dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Connexion from "./pagesComponentss/connexion";


const App:FC = ():JSX.Element => {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Connexion />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;



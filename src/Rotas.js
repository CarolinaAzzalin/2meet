import React from "react";
import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Eventos from './Pages/Eventos';
import Estabelecimentos from './Pages/Estabelecimentos';
import Login from './Pages/Login';
import Cadastrar from "./Pages/Cadastrar";


export default ()=>{
    return(
        <Routes>
            <Route exact path="/home" element = {<Home/>}>    
            </Route>
            <Route exact path="/eventos" element = {<Eventos/>}>    
            </Route>
            <Route exact path="/estabelecimentos" element = {<Estabelecimentos/>}>    
            </Route>
            <Route exact path="/" element = {<Login/>}>    
            </Route>
            <Route exact path="/cadastrar" element = {<Cadastrar/>}>    
            </Route>
        </Routes>
    );
}
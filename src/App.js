import React, {useState} from "react";
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Rotas from './Rotas';


import Footer from "./Componentes/Footer/index.js";
import Header from "./Componentes/header/index.js";
import Login from "./Pages/Login";




function App() {

  // const [user, setUser] = useState(null);

  // const actionLoginDataGoogle = async (u) => {
  //   let newUser = {
  //     id: u.uid,
  //     name: u.displayName,
  //     avatar: u.photoURL
  //   }

  //   setUser(newUser);
  // }

  // if(user === null){

  //   return (
  //     <Login onReceiveGoggle= {actionLoginDataGoogle}/>
  //   );
  // }

  return (
    <BrowserRouter>
    
        <Header/>

          <Rotas/>

        <Footer />
      
    </BrowserRouter>
  )
}

export default App;
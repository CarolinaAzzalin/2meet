import React from "react";
import {Link} from 'react-router-dom';
import { AreaHeader } from './styled';
import "rbx/index.css";





function Header(props){

  return (
    <AreaHeader>
      <div className = "container">
        <div className= "logo" >
          <img src= "../../../logo.png" />
        </div>
        <nav>
          <ul>
            <li><Link to ="/home">Início</Link></li>
            <li><Link to ="/eventos">Eventos</Link></li>
            <li><Link to ="/estabelecimentos">Estabelecimentos</Link></li>
            <li><Link to ="/">Sair</Link></li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
    
  ) 
}
export default Header;


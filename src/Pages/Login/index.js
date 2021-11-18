import React from "react";
import { Link } from 'react-router-dom';
import { AreaLogin } from './style';
import { BtnDefautIcons, BtnDefaut } from '../../Componentes/style';

import Api from '../../Api';

import FacebookIcon from '@material-ui/icons/Facebook'




export default ({ onReceiveGoggle }) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googlelogar();

        if (result) {

            onReceiveGoggle(result.user);

        } else {

            alert('Error');
        }
    }

    return (
        <AreaLogin>
            <div className="logo" >
                <img src="../../../logo.png" />
            </div>

            <h1>Faça login em sua conta</h1>

            <form>
                <div className="form--input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
                <div className="form--input">
                    <label>Senha</label>
                    <input type="password" />
                </div>


                <BtnDefaut>
                    <Link to ="/Home">Entrar</Link>
                </BtnDefaut>
                
                <p>OU</p>

            </form>


            <BtnDefautIcons>
                <FacebookIcon />
                <div className="centerface">Entre com Facebook</div>
            </BtnDefautIcons>
            <BtnDefautIcons onclick={actionLoginGoogle}>
                <FacebookIcon />
                <div className="centergmail">Entre com Gmail</div>
            </BtnDefautIcons>


            <div className="footerLogin">
                Não tem conta?
                <Link to="/Cadastrar">Cadastre-se</Link>
            </div>

        </AreaLogin>

    );
}
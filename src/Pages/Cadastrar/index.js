import React from "react";
import { Link } from 'react-router-dom';
import { AreaCadastro } from './style';
import { BtnDefaut } from '../../Componentes/style';



export default () => {

    return (
        <AreaCadastro>
            <div className="logo" >
                <img src="../../../logo.png" />
            </div>

            <h1>Crie sua conta</h1>

            <form>
                <div className="form--input">
                    <label>Nome</label>
                    <input type="name" />
                </div>
                <div className="form--input">
                    <label>E-mail</label>
                    <input type="email" />
                </div>
                <div className="form--input">
                    <label>Senha</label>
                    <input type="password" />
                </div>


                <BtnDefaut>
                    <Link to="/Home">Cadastrar</Link>
                </BtnDefaut>

            </form>


            <div className="footerLogin">
                Já possui conta?
                <Link to="/">Login</Link>
            </div>

        </AreaCadastro>

    );
}
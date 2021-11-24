import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import Card from "../../Componentes/Card"
//mport {Routes, Route } from 'react-router-dom';

const eventos = [
    {
        title: "Festa do Livro",
        category: "Evento Externo",
        picURL: "../../../livro.jpg",
        description: "Bem vindo ao melhor evento da cidade. Não se preocupe com alimentação ou segurança.",
        time: "25/03/2022"
    },
    {
        title: "Bienal do automóvel",
        category: "Exposições",
        picURL: "../../../automovel.jpg",
        description: "Bem vindo ao melhor evento da cidade. Não se preocupe com alimentação ou segurança.",
        time: "17/09/2022"
    },
    {
        title: "Jubileu de agosto",
        category: "Evento Externo",
        picURL: "../../../jubileu.jpg",
        description: "Bem vindo ao melhor evento da cidade. Não se preocupe com alimentação ou segurança.",
        time: "25/08/2022"
    },
    {
        title: "Festa do milho",
        category: "Evento Externo",
        picURL: "../../../milho.jpg",
        description: "Bem vindo ao melhor evento da cidade. Não se preocupe com alimentação ou segurança.",
        time: "25/03/2022"
    }
];

const Page = () => {

    const eventosRenderizados = eventos.map( evento => {
        return (
            <Card
                title={evento.title}
                category={evento.category}
                picURL={evento.picURL}
                description={evento.description}
                time={evento.time}
            />
        )
    })

    return (
        <ContainerPage>
            <div className="title-container">                          
                    <TitlePage>
                        Eventos
                    </TitlePage>
                    <i class="comment icon"></i>
                </div>
            <div className="card-container">
            {eventosRenderizados}
            </div>
        </ContainerPage>
    );
}

export default Page;
import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import Card from "../../Componentes/Card"
//mport {Routes, Route } from 'react-router-dom';

const eventos = [
    {
        title: "Bar do Maurício",
        category: "Bar",
        picURL: "../../../logo.png",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "13h às 16h"
    },
    {
        title: "Restaurante do Jeremias",
        category: "Restaurante",
        picURL: "../../../logo.png",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "14h às 20h"
    },
    {
        title: "Bar do Agustinho",
        category: "Bar",
        picURL: "../../../logo.png",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "18h às 00h"
    },
    {
        title: "Reinaldo Butiquim",
        category: "Bar",
        picURL: "../../../logo.png",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "12h às 18h"
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
import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import Card from "../../Componentes/Card";

//mport {Routes, Route } from 'react-router-dom';

const estabelecimentos = [
    {
        title: "Juramento",
        category: "Bar",
        picURL: "../../../juramento.jpg",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "13h às 16h"
    },
    {
        title: "Bar do Orlando",
        category: "Restaurante",
        picURL: "../../../orlando.jpg",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "14h às 20h"
    },
    {
        title: "The Butcher Bar",
        category: "Bar",
        picURL: "../../../butcher.jpg",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "18h às 00h"
    },
    {
        title: "Edificio Maletta",
        category: "Bar",
        picURL: "../../../maletta.jpg",
        description: "Melhor bar e restaurante da cidade. Servimos cerveja gelada e os mais incríveis petiscos, ao melhor preço. Venha conhecer!",
        time: "12h às 18h"
    }
];

const Page = () => {

const estabRenderizados = estabelecimentos.map( estab => {
    return (
        <Card
            title={estab.title}
            category={estab.category}
            picURL={estab.picURL}
            description={estab.description}
            time={estab.time}
        />
    )
})

    return (
        <ContainerPage>
                <div className="title-container estabelecimentos">                          
                    <TitlePage>
                        Estabelecimentos
                    </TitlePage>
                    <i class="comment icon"></i>
                </div>          
            <div className="card-container">
            {estabRenderizados}
            </div>
        </ContainerPage>
    );
}

export default Page;
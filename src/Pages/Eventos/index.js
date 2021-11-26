import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import Card from "../../Componentes/Card"
//mport {Routes, Route } from 'react-router-dom';

const eventos = [
    {
        title: "Festival de Verão BH",
        category: "Festival",
        picURL: "../../../Festverao.png",
        description: "Viver é Melhor Que Sonhar - e este é um convite para vivermos juntos de novo! Adquira seu ingresso.",
        instURL: "www.sympla.com.br/festival-de-verao-bh---29-e-30-de-janeiro__1421795",
        time: "29/01/2022 e 30/01/2022"
    },
    {
        title: "We Love Carnaval Beaga",
        category: "Festival",
        picURL: "../../../welove.png",
        description: "O WE LOVE CARNAVAL 2022 vem com grandes shows, os melhores blocos de BH e o mais importante, estar com os amigos. ",
        instURL: "www.sympla.com.br/we-love-carnaval--beaga-2022__1409361",
        time: "26/02/2022 a 01/03/2022"
    },
    {
        title: "BOP Games",
        category: "Evento Esportivo",
        picURL: "../../../bopgames.png",
        description: "Seja bem-vindo ao Maior Festival Multiesportivo da América Latina! Algo incrível está para acontecer...",
        instURL: "www.sympla.com.br/evento/bop-games-visitantes/1375229",
        time: "04/12/2021 e 05/12/2021"
    },
    {
        title: "Nerd Experience",
        category: "Evento Gamer",
        picURL: "../../../nerd.png",
        description: " A porta do multiverso se abriu. Venha participar de momentos únicos e imersivos no Nerd Experience.",
        instURL: "www.sympla.com.br/nerd-experience-2021__1404272",
        time: "11/12/2021 e 12/12/2021"
    },
    {
        title: "Festa do Livro",
        category: "Evento Externo",
        picURL: "../../../livro.png",
        description: "Organizada anualmente pela Edusp desde 1999, a Festa do Livro da USP é um evento já tradicional na Universidade de São Paulo",
        time: "15/02/2022"
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
        category: "Evento Religioso",
        picURL: "../../../jubileu.png",
        description: "Em agosto, Sambossand’roll entra em cena no Jubileu de Nossa Senhora da Saúde,  festa centenária de Lagoa Santa.",
        time: "14/08/2022"
    },
    {
        title: "Festa do milho",
        category: "Evento Externo",
        picURL: "../../../milho.jpg",
        description: "A Festa Nacional do Milho é a principal festa agropecuária de MG e acontece na cidade Patos de Minas",
        time: "25/05/2022"
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
                instURL={evento.instURL}
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
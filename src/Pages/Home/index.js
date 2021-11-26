import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import Card from "../../Componentes/Card";

//mport {Routes, Route } from 'react-router-dom';

const estabelecimentos = [
    {
        title: "Esquina Major",
        category: "Bar",
        picURL: "../../../esquinamajor.png",
        description: "Venha conhecer a melhor esquina de BH. O melhores drinks e petiscos para se deliciar!",
        time: "Sex: 18h às 01h / Sáb: 16h às 01h.",
        instURL: "www.instagram.com/esquinamajor/"
    },
    {
        title: "Mercado da Boca - Savassi",
        category: "Restaurante",
        picURL: "../../../mercadoboca.png",
        description: "Restaurante casual com pratos simples e drinques em um ambiente pitoresco de estilo industrial.",
        time: "Dom. a Qua. 11:30h às 23h / Qui. a Sáb. 11:30h às 00h",
        instURL: "www.instagram.com/mercadodaboca/"
    },
    {
        title: "Bar do Orlando",
        category: "Restaurante",
        picURL: "../../../orlando.jpg",
        description: "O tÍpico buteco mineiro, repleto de bons tira-gostos, cerveja gelada e uma boa prosa. Venha conhecer!",
        time: "Qua. a Sex. 16h às 00h / Sáb. 14h às 00h / Dom. 13h às 23h",
        instURL: "www.instagram.com/bardoorlandobh/"
    },
    {
        title: "Ninita",
        category: "Restaurante",
        picURL: "../../../ninita.png",
        description: "A hospitalidade da cozinha mineira, o conforto da gastronomia italiana. Tempero da roça no forno à carvão.",
        time: "Seg. 18h Às 22h / Ter. a Sáb. 12h às 22h / Dom. 12h às 17h",
        instURL: "www.instagram.com/ninitabh/"
    },
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
            instURL={estab.instURL}
        />
    )
})

    return (
        <ContainerPage>
                <div className="title-container estabelecimentos">                          
                    <TitlePage>
                        Adicionados Recentemente
                    </TitlePage>                   
                </div>    
            <div className="card-container">
            {estabRenderizados}
            </div>
        </ContainerPage>
    );
}


export default Page;
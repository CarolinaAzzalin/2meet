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
        title: "Quina BH",
        category: "Bar",
        picURL: "../../../quina.png",
        description: "Um restaurante que só poderia ter nascido em BH. Cozinha de expressão e coquetelaria!",
        time: "Ter. a Sex. 18:30 às 00h / Sáb. 12h às 00h / Dom. 12h às 17h ",
        instURL: "www.instagram.com/quinabh/"
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
        title: "Juramento",
        category: "Bar",
        picURL: "../../../juramento.jpg",
        description: "Chopes artesanal e tábuas de frios em barzinho de esquina com decoração rústica e clima boêmio!",
        time: "Qua. a Sex: 18h às 00h / Sáb: 14h às 01h / Dom: 13h às 20h",
        instURL: "www.instagram.com/juramento202/"
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
        title: "The Butcher Bar",
        category: "Bar",
        picURL: "../../../butcher1.png",
        description: "Ponto gastronômico descontraído e convidativo, porções com carnes nobres na brasa e brejas especiais!",
        time: "Ter. a Sex. 17 às 23h / Sáb. 16h às 23h ",
        instURL: "www.instagram.com/thebutcherbar/"
    },
    {
        title: "Edificio Maletta",
        category: "Bar",
        picURL: "../../../maletta1.png",
        description: "Que tal fazer um passeio nos melhores bares para um happy hour dentro do Edifício Maletta? Venha Conhecer!",
        time: "Qua. a Sex. 12h às 00h / Sáb. 12h às 02h",
        instURL: ""
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
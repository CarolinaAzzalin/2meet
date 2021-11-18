import React from "react";
import {ContainerPage, TitlePage} from "../../Componentes/Main";
import {Routes, Route } from 'react-router-dom';

const Page = () => {

    return (
        <ContainerPage>
            <TitlePage>
                Próximos Eventos!
            </TitlePage>
        </ContainerPage>
    );
}

export default Page;
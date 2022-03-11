import React from "react";
import Header from "./components/header";
import {Helmet} from "react-helmet"
const App=()=>{
    let textHeader="Encuentre Datos principales de paises"
    const titulo="Busca informacion basica de paises"
    const description="Encuentre informacion de paises como su bandera,ciudad,numero de habitante,su lenguajes, clima actual y mucho mas."
    
    return(
        <>  
            {/* Componente para cambiar los valores de la cabezera de html */}
            <Helmet>
                <title>{titulo}</title>
                <meta 
                    name="description"
                    content={description} />
            </Helmet>
            <Header textHeader={textHeader}/>
        </>
    )
}
export default App
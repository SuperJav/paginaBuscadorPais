import React from "react";
import style from "./css/Footer.module.css"

//Returna el componente pie de apgina
const Footer=()=>{
    return (
         <footer className={style.footer} >
            <p>&copy;Todo los derechos reservado 2022</p>
        </footer>
    )
}
export default Footer
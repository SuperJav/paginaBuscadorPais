import React from "react";
import style from "./css/Header.module.css";
import Buscador from "./buscador";

//Component header
const Header=(props)=>{
    const {textHeader}=props
    
    return (
        <div className={style.header}>
            <h1 className={style.titulo}>{textHeader}</h1>
            <Buscador/>
        </div>
    )
}
export default Header
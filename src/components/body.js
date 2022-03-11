import React from "react";
import style from "./css/Body.module.css"
import  ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faEarthAfrica, faEarthAmericas, faFlag, faLanguage, faUser } from '@fortawesome/free-solid-svg-icons'
import MasInforamcion from "./masInformacion";
import Footer from "./footer";
 
const Body=(props)=>{
    //Declaracion de variable y destruturacion de un accesorio
    const {listPais}= props
    //Metodo para convertir un objecto en arrays
    const listLanguagues=(objecto)=>{
        let arrays =Object.entries(objecto)
        return arrays.map(index=><li key={index}>{index[1]}</li>)
    }
    //Metodo para convertir numero de poblacion en numero organizado
    const numeroPoblaction=(numb)=>{
      return  numb.toLocaleString('en-US')
    }
    //Metodo para devolver la informacion completa
    const informacionGeografico=(info)=>{
       ReactDOM.render(<MasInforamcion datoPais={info}/>,document.getElementById("body"))
    }
    return(
        <>
            <div className={style.contenedorcuerpo}>
                <table className={style.tabla}>
                    <thead className={style.header}>
                        <tr className={style.indice}>
                            <th><FontAwesomeIcon icon={faFlag}/> Bandera</th>
                            <th><FontAwesomeIcon icon={faEarthAfrica}/> Pais</th>
                            <th><FontAwesomeIcon icon={faCity}/> Capital</th>
                            <th><FontAwesomeIcon icon={faUser}/> Poblacion</th>
                            <th><FontAwesomeIcon icon={faLanguage}/> Lenguaje</th>
                        </tr>
                    </thead>
                        {
                            listPais.length !== 0?
                                <>
                                    <tbody className={style.cuerpo}>
                                        {listPais.map((index) =>
                                            <tr className={style.filaHeader} key={index.area} onClick={()=>informacionGeografico(index)}>
                                                <th><img className={style.bandera} src={index.flags.png} alt="bandera pais"/></th>
                                                <th>{index.name.common}</th>
                                                <th>{index.capital}</th>
                                                <th>{numeroPoblaction(index.population)}</th>
                                                <th><ul className={style.list}>{listLanguagues(index.languages)}</ul></th>
                                            </tr>
                                        )}
                                    </tbody>
                                </>
                        :<tbody className={style.sinRespuesta}><tr><th colSpan={5}><FontAwesomeIcon icon={faEarthAmericas} className={style.cargar} spin={true}/></th></tr></tbody>
                        }
                </table>
            </div>
            <Footer/>
        </>
    )
}
export default Body
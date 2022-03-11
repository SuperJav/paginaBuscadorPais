import {useState,useEffect} from "react";
import style from "./css/MasInfo.module.css"
import axios from "axios";
//llave de la api del clima
const KEYCLIMA=process.env.REACT_APP_KEY_CLIMA

//Componente CLima
const Clima=({datos})=>{
    const [infoClima,setInfoClima]=useState([])

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${datos.latlng[0]}&lon=${datos.latlng[1]}&lang=es&appid=${KEYCLIMA}&units=metric`)
        .then( Response=>{
            
            setInfoClima(Response.data)
        }).catch((error=>{
            console.log(error);
        }))
    },[datos.latlng])
//Metodo para devolver la temperatura
    const temperatura=(objecto)=>{
            
        let arrays =Object.entries(objecto)
        const resultado=arrays[3]
        if (resultado !== undefined) {
            return resultado[1].temp
        }else
            return null
    }
    //Metodo para devolver logo del clima
    const logoClima=(objecto)=>{

            if (objecto.weather !== undefined) {
                return objecto.weather[0].icon
            }else{
                return null
            }
        
    }
 //Metodo que devuelve la descricion
    const descricion=(objecto)=>{

        if (objecto.weather !== undefined) {
            return objecto.weather[0].description
        }else{
            return null
        }
    }
       //Metodo para devolver la lista de la condicion del aire etc
    const datoClima=(objecto)=>{
        
        let arrays =Object.entries(objecto)
        const resultado=arrays[3]
        if (resultado !== undefined) {
            // resultado[1].temp
            return (
                <>
                <ul className={style.listClima}>
                    <li>Se siente como de: {resultado[1].feels_like}</li>
                    <li>Temperatura Minima: {resultado[1].temp_min}</li>
                    <li>Temperatura Maxima: {resultado[1].temp_max}</li>
                    <li>Presion: {resultado[1].pressure}</li>
                    <li>Humeda: {resultado[1].humidity}%</li>
                    <li>Nivel del Mar: {resultado[1].sea_level}</li>
                    <li>Nivel de Tierra: {resultado[1].grnd_level}</li>
                </ul>
                </>
            )
        }else
            return null
    }
        return (
            <>
                <div className={style.contenedorClima}>
                    <div className={style.tituloClima}>
                        <h3 className={style.indice1}>Clima en la capital de</h3>
                        <h3 className={style.indice2}>{datos.capital}</h3>
                    </div>
                    <div className={style.grado}>
                        <p>{temperatura(infoClima)}</p>
                        <strong className={style.celsius}>°C</strong>
                        <img className={style.logo} src={`http://openweathermap.org/img/wn/${logoClima(infoClima)}@2x.png`} alt={"logoClima"}/>
                        <h4 className={style.descrition}>{descricion(infoClima)}</h4>
                    </div>
                    <div className={style.info}>
                        {datoClima(infoClima)}
                    </div>
                </div>
            </>
        )
}
export default Clima
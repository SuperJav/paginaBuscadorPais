import React,{ useState,useEffect} from "react";
import reactDom from "react-dom"
import axios from "axios";
import Body from "./body";
import style from "./css/Header.module.css"

//Componente Buscador
const Buscador=()=>{
    //Declaracion de variable y estados
    const [ busqueda,setBusqueda ]=useState("")
    const [ datos,setDatos ]=useState([]) 
    let filtre=[]
    const APIDATO=process.env.REACT_APP_API_DATOS//api de datos

    //Devuleve un resultado cada ves que introduce una palabra al buscador
    useEffect(()=>{

        if(busqueda !== ""){
                axios.get(`${APIDATO}${busqueda}`)
                    .then(Response =>{
                        
                        setDatos(Response.data)
                        }).catch((error)=>{
                            console.log(error)
                            //Limpia la entrada casa ves que lanza un error
                            //de pais que no existe
                        })
        }
    },[APIDATO,busqueda])
    //Metodo para ingresar los evento de la entrada
    const buscador=(event)=>{

            setBusqueda(event.target.value)
    }
    //Metodo que filtra la busqueda
    const respuesta=()=>{
        //Condicinal para devolver la informacion 
       if( busqueda !==""){
        // filtra el arrays de estados para buscar un nombre 
        // y a la ves contiene un metodo que no distigue entre minusca y mayuscula
        //filtre= datos.filter(index=> index.name.common.localeCompare(busqueda, undefined, { sensitivity: 'base' }) ===0)
       filtre =datos.filter(index=> index.name.common.search(/busqueda/i))
        filtre.splice(10)
       }
        // Metodo que retorna una lista de los nombre encontrado
        return (<Body listPais={filtre}/>)
    }
    useEffect(()=>
            reactDom.render(respuesta(),document.getElementById("body")))
        return(
                <>
                    <input 
                        className={style.input}
                        type="text"
                        value={busqueda}
                        onChange={buscador}
                        placeholder="Ejemplo: Peru  "/>
                </>
)}
export default Buscador
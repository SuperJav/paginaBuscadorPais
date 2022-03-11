/* eslint-disable no-sequences */
import style from "./css/MasInfo.module.css"
import Mapa from "./Map"
import Footer from "./footer"
import Clima from "./clima"

//Devuelve el componente con mas informacion sobre el pais
const MasInforamcion=(props)=>{

    const {datoPais}=props

    //Metodo que devuleve la bandera
    const Bandera=({datos})=>{

        return(
            <>
                <div className={style.itemBandera}>
                    <div>
                        <img src={datos.flags.png} alt={"bandera"}/>
                        <h2>{datos.name.official}</h2>
                        <hr className={style.linea}/>
                    </div>
                </div>
            </>
            )
    }
    //Metodo que devuelve la primera informacion
    const ListaInfo1=({datos})=>{
        let independent="";
        datos.independent === true? independent="Si": independent="No"
        //Metodo para convertir numero de poblacion en numero organizado
        const numeroPoblaction=(numb)=>{
            return  numb.toLocaleString('en-US')
        }
        //Metodo para convertir un objecto en arrays
        const listLanguagues=(objecto)=>{
            
            let arrays =Object.entries(objecto)
            return arrays.map(index=><li key={index}>{index[1]}</li>)
        }
        return(
            <>
             <div className={style.item1}>
                <ul className={style.lista1}>
                    <li>
                        <strong>Capital:</strong>{datos.capital}
                    </li>
                    <li>
                        <strong>No.Poblacion:</strong>{numeroPoblaction(datos.population)}
                    </li>
                    <li>
                        <strong>Es Independiente:</strong> {independent}
                    </li>
                    <li>
                        <strong>Idioma:</strong>
                    </li>
                    <ul>
                        {listLanguagues(datos.languages)}
                    </ul>
                </ul>
             </div>
            </>
        )
    }
    //Metodo que devuleve la segunda informacion
    const ListaInfo2=({datos})=>{

        const listLanguagues=(datos)=>{
            
            let arrays =Object.entries(datos.nativeName)
            return arrays.map(
                index=>
                <tr key={index}>
                    <th><strong>{index[0]}</strong></th>
                    {Object.entries(index[1])
                    .map(index=><td key={index}>{index[1]}</td>)}
                </tr>)
        }
        return(
            <>
                <div className={style.item2}>
                    <table>
                        <thead>
                            <tr>
                                <th><strong>Nombre nativo</strong></th>
                                <th><strong>Oficial</strong></th>
                                <th><strong>Comun </strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listLanguagues(datos.name)}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
    //Metodo que devuleve la  segunda informacion
    const ListaInfo3=({datos})=>{

        const area=(numb)=>{
            return  numb.toLocaleString('en-US')
        }
        return(
            <>
                <div className={style.item3}>
                <h4><strong>Ubicacion</strong></h4>
                    <ul className={style.lista2}>
                        <li><strong>Region:</strong>{datos.region}</li>
                        <li><strong>Subregion:</strong>{datos.subregion}</li>
                        <li><strong>Area:</strong>{area(datos.area)}</li>
                        <li><strong>Continente:</strong>{datos.continents}</li>
                    </ul>
                </div>
            </>
        )

    }
    //Metodo que devuelve el mapa
    const ListaInfo4=({datos})=>{
        return(
            <>
                <div className={style.mapa}>
                    <Mapa  lat={datos.latlng[0]} ing={datos.latlng[1]}/>
                </div> 
            </>
        )
    }
    
   return(
       <>
        <div>
            <div className={style.container}>
                    <div className={style.biografia}>
                        <Bandera datos={datoPais}/>
                        <ListaInfo1 datos={datoPais}/>
                        <ListaInfo2 datos={datoPais}/>
                        <ListaInfo3 datos={datoPais}/>
                        <ListaInfo4 datos={datoPais}/>
                        <Clima datos={datoPais}/>
                    </div>
            </div>
            <Footer/>
        </div>
       </>
   )
}
export default MasInforamcion
import React from "react";
import {Map,GoogleApiWrapper}from "google-maps-react"
const APIGOOGLE=process.env.REACT_APP_API_GOOGLE
//Componente Map 
export class MapContainer extends React.Component{
    render(){
        return(
            <Map
                google={this.props.google}
                zoom={8}
                
                initialCenter={{
                    lat:this.props.lat,
                    lng:this.props.ing  
                }}
                >
            </Map>
        )
    }
}
export default GoogleApiWrapper(
    (props)=> ({
        //Utilizando api encontrada en una pagina que nos presto :)
    apiKey:(APIGOOGLE),
    language:props.language,
    
    }
))(MapContainer)

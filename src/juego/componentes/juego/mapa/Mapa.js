import React, { Component } from 'react'
import { render } from 'react-dom'
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


export const pointerIcon = new L.Icon({
    iconUrl: require('../iconos/voulvas.jpg'),
    iconAnchor: [12.5, 25],
    popupAnchor: [0, -25],
    iconSize: [25, 25],
})

//pokemonIcon define los iconos que van a ir en los marcadores 
//en mapa apartir del nombre del pokemon
function pokemonIcon(name){
    return new L.Icon({
        iconUrl: require('../iconos/'+name+'.jpg'),
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -25],
        iconSize: [25, 25],
    })
}

function pokeMarkers(){
    return <Marker/>
    
}

class Mapa extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 18,
    }

    render() {
        const usrPosition = [this.props.userLocation.lat, this.props.userLocation.lng]
        const pokeData = this.props.pokeData
        console.log("usrposu",usrPosition)
        if (pokeData[0]) {
            console.log("pokedata defined")
            pokeMarkers = pokeData.map((pokeInfo) =>
            <Marker position={[pokeInfo.position.x,pokeInfo.position.y]} icon={pokemonIcon(pokeInfo.name)}>
                <Popup>
                    {pokeInfo.question}<br />
                    <form className="form-inline mt-2 mt-md-0">
				        <input className="form-control form-control-sm" type="text" placeholder="Respuesta" aria-label="Respuesta"/>
				    </form>
                    <button type="submit" class="btn btn-primary btn-sm">Enviar</button>
                </Popup>
            </Marker>
            );
        }
        return (
            <Map className="map" center={usrPosition} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={usrPosition} icon={pointerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {pokeMarkers}
            </Map>
        )
    }
}
export default Mapa;


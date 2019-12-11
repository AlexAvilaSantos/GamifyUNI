import React, { Component } from 'react'
import { render } from 'react-dom'
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import "bootstrap/dist/css/bootstrap.min.css";

export const pointerIcon = new L.Icon({
    iconUrl: require('../iconos/voulvas.jpg'),
    iconAnchor: [12.5, 25],
    popupAnchor: [0, -25],
    iconSize: [25, 25],
})

const abc = {
    respuestas: [
        "uabsbaskjnasfsa",
        "basfasafsdsaaa",
        "casfasaaaa"
    ],
}

//pokemonIcon define los iconos que van a ir en los marcadores 
//en mapa apartir del nombre del pokemon
function pokemonIcon(name) {
    return new L.Icon({
        iconUrl: require('../iconos/' + name + '.jpg'),
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -25],
        iconSize: [25, 25],
    })
}

function pokeMarkers() {
    return <Marker />

}

function showOptions(options) {
    // return(
    //     <>
    //     <div class="custom-control custom-radio">
    //         <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
    //         <label class="custom-control-label" for="customRadio1">
    //             A
    //         </label>
    //     </div>
         
    //     <div class="custom-control custom-radio">
    //         <input type="radio" id="sddo2" name="customRadio" className="custom-control-input"/>
    //         <label class="custom-control-label" for="sddo2">
    //             A
    //         </label>
    //     </div>

    //     <div class="custom-control custom-radio">
    //         <input type="radio" id="customRsd" name="customRadio" className="custom-control-input"/>
    //         <label class="custom-control-label" for="customRsd">
    //             A
    //         </label>
    //     </div>
    //      </>
    // );
    return options.map((option)=>
        <div class="custom-control custom-radio">
            <input type="radio" id={`default-${option}`} name="customRadio" className="custom-control-input"/>
            <label class="custom-control-label" for={`default-${option}`}>
                {option}
            </label>
        </div>

    //     <div className="form-check">
    //         <input className="form-ckeck-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
    //         <label className="form-check-label" for="exampleRadios1">
    //             {option}
    //         </label>
    //    </div>
    );
        

    

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
        console.log("usrposu", usrPosition)
        if (pokeData[0]) {
            console.log("pokedata defined")
            pokeMarkers = pokeData.map((pokeInfo) =>
                <Marker position={[pokeInfo.position.x, pokeInfo.position.y]} icon={pokemonIcon(pokeInfo.name)}>
                    <Popup>
                        <form>
                        <div className="form-group">
                            <label>{pokeInfo.question}</label>
                        </div>
                        </form>
                        {showOptions(abc.respuestas)}
                        {/* <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1">
                                Toggle this custom radio
                            </label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio2">
                                Or toggle this other custom radio
                            </label>
                        </div> */}
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


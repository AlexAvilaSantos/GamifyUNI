import React, { Component } from "react";
import { render } from "react-dom";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

const linkForAnswer = "http//as.sc";
export const pointerIcon = new L.Icon({
  iconUrl: require("../iconos/voulvas.jpg"),
  iconAnchor: [12.5, 25],
  popupAnchor: [0, -25],
  iconSize: [25, 25]
});

const abc = {
  respuestas: ["uabsbaskjnasfsa", "basfasafsdsaaa", "casfasaaaa"]
};

//pokemonIcon define los iconos que van a ir en los marcadores
//en mapa apartir del nombre del pokemon
function pokemonIcon(name) {
  return new L.Icon({
    iconUrl: require("../iconos/" + name + ".jpg"),
    iconAnchor: [12.5, 25],
    popupAnchor: [0, -25],
    iconSize: [25, 25]
  });
}

function pokeMarkers() {
  return <Marker />;
}

class Mapa extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 18,
    selectedOption: "default"
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.id
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    const respuestaReq = {
      token: "random",
      id: "ideuser",
      respuesta: this.state.selectedOption
    };
    // Axios.post(linkForAnswer, respuestaReq)
    // .then(res =>{
    //     console.log(res);
    //     console.log(res.resultado)
    //     console.log(res.actualUser)
    // })
    console.log("You have submitted:", this.state.selectedOption);
  };

  showOptions(options, selectedOption) {
    return options.map(option => (
      <div className="custom-control custom-radio">
        <input
          type="radio"
          id={`default-${option}`}
          name="customRadio"
          className="custom-control-input"
          value={option}
          checked={selectedOption === `default-${option}`}
          onChange={this.handleOptionChange}
        />
        <label class="custom-control-label" for={`default-${option}`}>
          {option}
        </label>
      </div>
    ));
  }

  render() {
    const usrPosition = [
      this.props.userLocation.lat,
      this.props.userLocation.lng
    ];
    const pokeData = this.props.pokeData;
    console.log("usrposu", usrPosition);
    if (pokeData[0]) {
      console.log("pokedata defined");
      pokeMarkers = pokeData.map(pokeInfo => (
        <Marker
          position={[pokeInfo.position.x, pokeInfo.position.y]}
          icon={pokemonIcon(pokeInfo.name)}
        >
          <Popup>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label>{pokeInfo.question}</label>
              </div>
              {this.showOptions(abc.respuestas, this.state.selectedOption)}
              <div className="form-group">
                <button type="submit" class="btn btn-primary btn-sm">
                  Enviar
                </button>
              </div>
            </form>
          </Popup>
        </Marker>
      ));
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
    );
  }
}
export default Mapa;

import React, { Component } from "react";

import PokemonList from "../pokemon/PokemonList";
import SearchBar from "../search/SearchBar";
import Menu from "../../componentes/menu/Menu";
import "../../../services/background.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <PokemonList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

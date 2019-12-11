import React, { Component } from "react";

import PokemonList from "../pokemon/PokemonList";
import SearchBar from "../search/SearchBar";
import Menu from "../../componentes/menu/Menu";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <PokemonList />
          </div>
        </div>
      </div>
    );
  }
}

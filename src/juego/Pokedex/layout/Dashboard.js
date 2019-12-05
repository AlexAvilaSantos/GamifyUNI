import React, { Component } from "react";

import PokemonList from "../pokemon/PokemonList";
import SearchBar from "../search/SearchBar";
import Menu from "../../componentes/menu/Menu";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="row">
          <div className="col">
            <PokemonList />
          </div>
        </div>
      </div>
    );
  }
}

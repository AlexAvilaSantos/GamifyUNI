import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import spinner from "../layout/spinner.gif";

import axios from "axios";
const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false,
    id: ""
  };

  async componentDidMount() {
    const { name, url } = this.props;
    const res = await axios.get(url);
    // console.log("AHHHHHH");
    // console.log(url);
    // console.log(res);
    // const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonIndex = res.data.id;
    // console.log("hola");
    // console.log(pokemonIndex);
    //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
   // var number = 0;
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img
                src={spinner}
                style={{ width: "5em", height: "5em" }}
                className="card-img-top rounded mx-auto d-block mt-2"
                alt="pokemon"
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              src={this.state.imageUrl}
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequests: false })}
              style={
                this.state.toManyRequests
                  ? { display: "none" }
                  : this.state.imageLoading
                  ? null
                  : { display: "block", width: "5em" }
              }
            />
            {this.state.toManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  To Many Requests
                </span>
              </h6>
            ) : null}
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h6>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
  }
}

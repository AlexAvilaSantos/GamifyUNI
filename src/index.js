import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/css/mi.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "leaflet/dist/leaflet.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "login/FormPage.js";
//import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Perfil from "juego/Perfil";
import Dashboard from "./juego/Pokedex/layout/Dashboard";
import Pokemon from "./juego/Pokedex/pokemon/Pokemon";
import JuegoPage from "./juego/componentes/juego/JuegoPage";

ReactDOM.render(
  <div>
    <BrowserRouter className="jumbotron">
      <Switch>
        <Switch>
          <Route path="/index" render={props => <Index {...props} />} />
          <Route path="/perfil" render={props => <Perfil {...props} />} />
          <Route
            path="/login-page"
            render={props => <LoginPage {...props} />}
          />
          <Route path="/juego" component={JuegoPage} />
          <Route path="/pokedex" component={Dashboard} />
          <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

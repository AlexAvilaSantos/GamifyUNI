import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../services/background.css";
import Menu from "./componentes/menu/Menu";

class Perfil extends React.Component {
  render() {
    return (
      <div className="bg">
        <div className="jumbotron">
          <div className="container" id="container">
            <div className="col-sm-8 col-sm-offset-2" id="hijo-container">
             <Menu></Menu>
             Hola Mundo
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Perfil;

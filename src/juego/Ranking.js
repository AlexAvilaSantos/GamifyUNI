import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

const jugadores = [// Devuelve todos los jugadores de la misma empresa
    {
      urlImage : "url de la imagen que se genero por defecto",
      nombre : "Mamerto Porter",
      puntaje : "2225"
    },
    {
      urlImage : "url de la imagen que se genero por defecto",
      nombre : "Dakota Rice",
      puntaje : "1950"
    },
    {
      urlImage : "url de la imagen que se genero por defecto",
      nombre : "Minerva Hooper",
      puntaje : "920"
    }


];

export default function Ranking() {
  const classes = useStyles();
  return (
    <GridContainer>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Participantes de la Universidad Nacional de Ingeniera
            </h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Puesto", "Nombre", "Puntaje"]}
              tableData={[
                ["1", "Konrad el GIL", "36,738"],
                ["2", "Minerva Hooper", "23,789"],
                ["3", "Sage Rodriguez", "56,142"],
              
              
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

import React from "react";
import { connect } from "react-redux";
import Mapa from "../components/Mapa";

const MapaPage = (props) => {
  /*if (!props.state.socketReducer.socket) {
    return <div style={{ color: "#000" }}>cargandooo....</div>;
  }*/

  return <Mapa />;
};

const initStates = (state) => {
  return { state };
};

export default connect(initStates)(MapaPage);

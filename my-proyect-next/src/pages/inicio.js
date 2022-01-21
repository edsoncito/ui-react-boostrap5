import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Graphic2 from '../components/Graphic2';

const Inicio = (props) => {
  var data = props.state.parqueoReducer.data
  if (!data) {
    if (props.state.parqueoReducer.estado == "cargando") {
      return <div className="spinner"></div>;
    }
    if (props.state.parqueoReducer.estado == "error") {
      return <div>{props.state.parqueoReducer.error}</div>;
    }
    var objSend = {
      component: "parqueo",
      type: "getAll",
      estado: "cargando",
      //cabecera: "registro_administrador",
      data: "",
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    return <div />;
  }

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <View style={{
            width: "100%",
            height: 300,
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 8,
          }}>
            <Text>Parqueos</Text>
            <Graphic2 data={data} history={props.history} reload={() => {
              var objSend = {
                component: "parqueo",
                type: "getAll",
                estado: "cargando",
                data: "",
              };
              props.state.socketReducer.session["parqueosya"].send(objSend, true);
            }} />
          </View>
        </div>
      </div>
    </>
  )
}

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(Inicio);


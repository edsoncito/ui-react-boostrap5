import React from 'react';
import { connect } from 'react-redux'
import logo from "../svg/logo.svg"
import '../styles/login.css';

const Login = (props) => {

  const [objValores, setObjValores] = React.useState({
    usr: {
      value: "",
      error: false
    },
    pass: {
      value: "",
      error: false
    },
  });

  if (props.state.usuarioReducer.estado === "exito"
    && (props.state.usuarioReducer.type === "login"
    )) {
    props.state.usuarioReducer.estado = ""
  }
  if (props.state.usuarioReducer.usuarioLog) {
    var usrLog = props.state.usuarioReducer.usuarioLog;
    if (usrLog.key_cabecera == "ddac134c-bf50-47a0-8e4a-121a5d1ed556") {
      props.history.push("/inicioP");
    } else {
      props.history.push("/inicio");
    }
    return <div />
  }

  const login = () => {
    var objToSend = {};
    var exito = true;

    for (const key in objValores) {
      if (!objValores[key].value || objValores[key].value.lenth <= 0) {
        objValores[key].error = true;
        exito = false;
      } else {
        objValores[key].error = false;
        objToSend[key] = objValores[key].value
      }
    }

    setObjValores({ ...objValores });
    if (exito) {
      var objSend = {
        component: "usuario",
        type: "login",
        data: objToSend,
        estado: "cargando"
      }
      props.state.socketReducer.session["parqueosya"].send(objSend, true)
      return <div />
    }
  }



  return (
    <>
      <div className="login">
        <div className="center">
          <div className="row">
            <div>
              <img style={{
                width: "70%",
                marginBottom: 30,
              }} src={logo} />
            </div>
            <form>
              <input className="inputLogin" type="text" placeholder="Usuario"
                value={objValores.usr.value}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.usr.value = texto;
                  setObjValores({ ...objValores });
                }} />
              <input className="inputLogin" type="password" placeholder="Contraseña"
                value={objValores.pass.value}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.pass.value = texto;
                  setObjValores({ ...objValores });
                }} />
              <button style={{
                width: "100%"
              }} type="button" className="btn btn-primary btn-large" onClick={() => {
                login()
              }}>INGRESAR</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(Login);


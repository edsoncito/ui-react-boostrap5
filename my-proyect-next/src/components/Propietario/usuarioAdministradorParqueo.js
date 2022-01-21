import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from "../components/Table";
import '../styles/table.css';

const RegistroAdministradorParqueo = (props) => {

  const [Text, setText] = React.useState("");

  if (!props.state.usuarioReducer.data) {
    if (props.state.usuarioReducer.estado == "cargando") {
      return <div className="spinner"></div>
    }
    if (props.state.usuarioReducer.estado == "error") {
      return <div>{props.state.usuarioReducer.error}</div>
    }
    var objSend = {
      component: "usuario",
      type: "getAll",
      estado: "cargando",
      cabecera: "registro_administrador_parqueo",
      data: ""
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true)
    return <div />
  }

  const buscar = (data) => {
    if (typeof data != "object") {
      return Object.keys(data);
    }
    var lista_keys = Object.keys(data);
    var val = Text.trim() || "";
    // var arrPalabras = val.replaceAll(" ", "|");
    var arrPalabras = val.split(" ");
    var arr2 = [];
    lista_keys.map((key) => {
      var obj = data[key];
      var str = JSON.stringify(obj);
      var isValid = false;
      for (let i = 0; i < arrPalabras.length; i++) {
        const txtTest = arrPalabras[i];
        var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
        var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|})", "i");
        if (expreg.test(str) || expreg2.test(str)) {
          isValid = true;
        }
      }
      if (isValid) {
        arr2.push(key);
      }
    })
    return arr2;
  }

  const getLista = () => {
    var data = props.state.usuarioReducer.data;
    var usuario = props.state.usuarioReducer.usuarios;
    return (
      buscar(data).map((key) => {
        var usr = usuario[key]
        var obj = data[key];
        var options = {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: 'numeric', minute: 'numeric', second: 'numeric',
        };
        var date = new Date(obj["Correo"].fecha_on);
        // console.log(obj)
        if (usr.key_cabecera != "ddac134c-bf50-47a0-8e4a-121a5d1ed556") {
          return
        }
        return (
          <tbody>
            <tr key={key}>
              <td>{key}</td>
              <td>{obj["Nombres"].dato}</td>
              <td>{!obj["Apellidos"] ? "" : obj["Apellidos"].dato}</td>
              <td>{obj["Correo"].dato}</td>
              <td>{obj["Telefono"].dato}</td>
              <td> {new Intl.DateTimeFormat('es', options).format(date)}</td>
              <td>
                <Link to={{
                  // pathname: `/RegistroAdministrador/` + key,
                  // state: { detail: datos }
                  pathname: `/RegistroAdministrador/${key}`,
                }}
                  title="Editar"
                  className="btn btn-warning btn-sm mx-2">
                  <span className="glyphicon glyphicon-edit" aria-hidden="true"><i style={{ color: "#fff" }} className="fas fa-edit"></i></span>
                </Link>
                {/* <button

                  onClick={() => { 
                       //this.handleOpenModal
                     var opcion = window.confirm("Clicka en Aceptar o Cancelar");
                    if (opcion == true) {
                      //alert(key)
                      var objSend = {
                        component: "usuario",
                        type: "eliminar",
                        estado: "cargando",
                        cabecera: "registro_administrador_parqueo",
                        key_usuario: key,
                      };
                      //props.state.socketReducer.session["parqueosya"].send(objSend, true)
                      return <div />
                    }
                   }}
                  
                  
                  title="delate"
                  className="btn btn-danger btn-sm">
                  <span className="glyphicon glyphicon-edit" aria-hidden="true"><i className="fas fa-trash-alt"></i></span>
                  </button>*/}
              </td>
            </tr>
          </tbody>
        )
      })
    )
  }

  return (
    <>
      <h1 className="text-center">Usuario Administrador Parqueo</h1>
      <Link className='btn btn-primary mb-2' to='./registroAdministradorParqueo'>Agregar</Link>
      <Table text={Text} setText={(texto) => {
        setText(texto)
      }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">fecha_on</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        {getLista()}

      </Table>
    </>
  );
};


const initStates = (state) => {
  return { state }
};

export default connect(initStates)(RegistroAdministradorParqueo);

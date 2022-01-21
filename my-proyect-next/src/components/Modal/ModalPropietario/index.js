import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
// import './modal.css';

//const ModalPadrePropietario = ({titulo, handleClose, show, children, tamano,history }, props) => {
const ModalPadrePropietario = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  var tamano = ""

  if (props.tamano == "large") {
    tamano = "modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable";
  } else {
    tamano = "modal-dialog modal-dialog-centered modal-dialog-scrollable";
  }

  const [Text, setText] = React.useState("");


  if (!props.state.usuarioReducer.data) {
    if (props.state.usuarioReducer.estado == "cargando") {
      return <div className="spinner"></div>;
    }
    if (props.state.usuarioReducer.estado == "error") {
      return <div>{props.state.usuarioReducer.error}</div>;
    }
    var objSend = {
      component: "usuario",
      type: "getAll",
      estado: "cargando",
      cabecera: "registro_administrador_parqueo",
      data: "",
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    return <div />;
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
    });
    return arr2;
  };

  const getLista = () => {
    var data = props.state.usuarioReducer.data;
    var usuario = props.state.usuarioReducer.usuarios;
    return buscar(data).map((key) => {
      if (props.datoPropietario[key]) {
        return <div />
      }
      var usr = usuario[key];
      var obj = data[key];
      var options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      var date = new Date(obj["Correo"].fecha_on);
      // console.log(obj)
      if (usr.key_cabecera != "ddac134c-bf50-47a0-8e4a-121a5d1ed556") {
        return;
      }
      return (
        <tbody>
          <tr key={key} onClick={() => {
            //alert(key)
            props.setKeyPropietario(key);
            //props.show(false)

            return;
          }}>
            <td>{key}</td>
            <td>{obj["Nombres"].dato}</td>
            <td>{!obj["Apellidos"] ? "" : obj["Apellidos"].dato}</td>
            <td>{obj["Correo"].dato}</td>
            <td>{obj["Telefono"].dato}</td>
            <td> {new Intl.DateTimeFormat("es", options).format(date)}</td>

          </tr>
        </tbody>
      );
    });
  };

  return (
    <div className={showHideClassName}>
      {/* <section className="modal-main"> */}
      <div className={tamano}>
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title text-secondary">{props.titulo}</p>
            <button
              type="button"
              className="btn-close"
              onClick={props.handleClose}
            ></button>
          </div>
          <div className="modal-body">
            {props.children}
            <Table
              text={Text}
              setText={(texto) => {
                setText(texto);
              }}
            >
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">fecha_on</th>

                </tr>
              </thead>

              {getLista()}
            </Table>
          </div>
          {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};
const initStates = (state) => {
  return { state };
};

export default connect(initStates)(ModalPadrePropietario);

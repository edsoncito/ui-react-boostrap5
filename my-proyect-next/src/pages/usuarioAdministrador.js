import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Table from "../components/Table";
import '../styles/table.css';
import ModalPadre from "../components/Modal/ModalPadre";
import logoexclamacion from "../svg/exclamacion.png";

const RegistroAdministrador = (props) => {

  const [Modal, setModal] = React.useState(false);
  const [KeyDelete, setKeyDelete] = React.useState("");
  const [Text, setText] = React.useState("");
  const [PagFinal, setPagFinal] = React.useState(6);
  const [ValorActual, setValorActual] = React.useState(0);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const keyEliminar = (key) => {
    setKeyDelete(key);
  };

  const eliminar = (keyDel) => {
    var objSend = {
      component: "usuario",
      type: "eliminar",
      estado: "cargando",
      cabecera: "registro_administrador",
      key_usuario: keyDel,
    }
    //var gg =keyDel;
    // props.state.socketReducer.session["parqueosya"].send(objSend, true);
  }

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
      cabecera: "registro_administrador",
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

  var nroBtn = [];
  const pagination = (dataList) => {
    var tamanho = dataList.length;
    var nroBotones = Math.ceil(tamanho / 6);
    for (let index = 1; index <= nroBotones; index++) {
      nroBtn.push(index);
    }
    return dataList.slice(ValorActual, PagFinal);
  };

  const onClick = (valor) => {
    console.log(valor);
    var nro;
    if (valor > 1) {
      valor = valor - 1;
      nro = valor * 6;
    } else nro = 0;
    setValorActual(nro);
    setPagFinal(nro + 6);
  };

  const getLista = () => {
    var data = props.state.usuarioReducer.data;
    var usuario = props.state.usuarioReducer.usuarios;
    return (buscar(data).map((key) => {
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
      console.log(usr.key_cabecera)
      if (usr.key_cabecera != "9fc703bd-c199-4c94-be8d-e2d1a43c1237") {
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
                // state: { detail: datos }
              }}
                title="Editar"
                className="btn btn-warning btn-sm mx-2">
                <span className="glyphicon glyphicon-edit" aria-hidden="true"><i style={{ color: "#fff" }} className="fas fa-edit"></i></span>
              </Link>
              {/* <button
                  // onClick={this.handleOpenModal}
                  title="delate"
                  className="btn btn-danger btn-sm">
                  <span className="glyphicon glyphicon-edit" aria-hidden="true"><i className="fas fa-trash-alt"></i></span>
                </button> */}
              {/*<button
                  onClick={() => {
                    keyEliminar(key)
                     showModal()
                    }
                    }
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
      <h1 className="text-center">Usuario Administrador</h1>
      <Link className='btn btn-primary mb-2' to='./registroAdministrador'>Agregar</Link>
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


      <ModalPadre
        titulo="ELIMINAR USUARIO ADMINISTRADOR"
        show={Modal}
        handleClose={hideModal}
      >
        <div className="text-center">
          <img
            style={{
              width: 100,
              height: 100,
            }}
            src={logoexclamacion}
            className="img-thumbnail rounded-circle"
          />
          <br />
          <p>¿Está seguro que desea eliminar el registro?</p>
          <button
            type="button"
            class="btn btn-success"
            style={{ width: 50 }}
            onClick={() => eliminar(KeyDelete)}
          >
            SÍ
          </button>
          <button
            type="button"
            class="btn btn-danger"
            style={{ width: 50, marginLeft: 10 }}
            onClick={hideModal}
          >
            NO
          </button>
        </div>
      </ModalPadre>
    </>
  );
};


const initStates = (state) => {
  return { state }
};

export default connect(initStates)(RegistroAdministrador);

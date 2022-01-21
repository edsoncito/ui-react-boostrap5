import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalPadre from "../components/Modal/ModalPadre";
import NavigationTable from "../components/NavigationTable";
import Table2 from "../components/Table2";
import "../styles/table.css";
import logosuccess from "../svg/success.png";
import logoexclamacion from "../svg/exclamacion.png";

const ListaParqueo = (props) => {
  const [Modal, setModal] = React.useState(false);
  const [KeyDelete, setKeyDelete] = React.useState("");

  if (!props.state.parqueoReducer.data) {
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
    var data = props.state.parqueoReducer.data[KeyDelete];
    var objSend = {
      component: "parqueo",
      type: "editar",
      estado: "cargando",
      data: {
        ...data,
        estado: 0,
      },
    }
    //var gg =keyDel;
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    setModal(false);
  }

  const getLista = () => {
    var resp = {};
    Object.keys(props.state.parqueoReducer.data).map((key) => {
      var obj = props.state.parqueoReducer.data[key];
      if (obj.estado == 0) {
        return <div/>
      }
      resp[key] = obj;
    })
    return resp;
  }
  return (

    <>
      <h3 className="text-center">Lista Parqueos</h3>

      <div className="d-flex justify-content-between">
        <Link className="btn btn-primary mb-3" to="./registroParqueo">
          Agregar
        </Link>
      </div>

      <Table2 data={getLista()}
        headers={[
          {
            label: "key",
            dbName: "key",
          },
          {
            label: "Fecha_on",
            dbName: "fecha_on",
          },
          {
            label: "Nombre",
            dbName: "nombre",
          },
          {
            label: "Descripcion",
            dbName: "descripcion",
          },
          {
            label: "Direccion",
            dbName: "direccion",
          },
          {
            label: "Estado",
            dbName: "estado",
          },
          {
            label: "Accion",
            dbName: "accion",
            onDelete: (key) => {
              setModal(true);
              setKeyDelete(key);
            }
          },
        ]}>
        {/* <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">fecha_on</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Direccion</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead> */}

      </Table2>

      <ModalPadre
        titulo="ELIMINAR PARQUEO"
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
          <p>¿Está seguro que desea eliminar el parqueo?</p>
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
  return { state };
};

export default connect(initStates)(ListaParqueo);

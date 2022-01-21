import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../components/Table2";
import "../styles/table.css";
import FotoPicker from "../components/FotoPicker";
import AppParams from "../Params/index";
import ModalPadre from "../components/Modal/ModalPadre";
import logoexclamacion from "../svg/exclamacion.png";

const PublicidadParqueo = (props) => {
  const [Modal, setModal] = React.useState(false);
  const [KeyDelete, setKeyDelete] = React.useState("");

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
      component: "publicidad",
      type: "eliminar",
      estado: "cargando",
      //key_usuario: props.state.usuarioReducer.usuarioLog.key,
      key: keyDel,
    };
    //var gg =keyDel;
    //alert(keyDel)
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    hideModal()
  }

  if (!props.state.publicidadReducer.data) {
    if (props.state.publicidadReducer.estado == "cargando") {
      return <div className="spinner"></div>;
    }
    if (props.state.publicidadReducer.estado == "error") {
      return <div>{props.state.publicidadReducer.error}</div>;
    }
    var objSend = {
      component: "publicidad",
      type: "getAll",
      estado: "cargando",
      //cabecera: "registro_administrador_parqueo",
      data: "",
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    return <div />;
  }

  var keyPublicidad = 0;
  /* var parqueo = props.state.parqueoReducer.data[valorID];
  
  if (parqueo) {
    keyParqueo = parqueo.key
  }*/

  const getLista = () => {
    var list = [];
    var data = props.state.publicidadReducer.data;

    return Object.keys(data).map((key) => {
      var obj = data[key];
      console.log(obj);
      list.push({
        key,
        Key: key,
        publicidad:
          AppParams.images.urlImage +
          "publicidad.png" +
          "?type=publicidad&key=" +
          key,
        fecha_on: new Date(obj.fecha_on).getTime(),
      });
      var url = "";
      var urlSmall = "";
      url =
        AppParams.images.urlImage +
        "publicidad.png" +
        "?type=publicidad&key=" +
        obj.key;
      urlSmall =
        AppParams.images.urlImage +
        "publicidad_small.png" +
        "?type=publicidad&key=" +
        obj.key;

      return (
        <div
          className=""
          style={{
            width: (1024 / 2),
            height: (300 / 2),
            border: "1px solid rgb(192, 192, 192)",
            borderRadius: "8px",
            marginBottom: 5,
            verticalAlign: "top",
            overflow: "hidden",
            position: "relative",
            alignItems: "center",
          }}
        >

          <img
            src={AppParams.images.url + "publicidad/" + obj.key}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill"
              // resizeMode: "stretch",
            }}
          />
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            style={{
              width: 15,
              height: 15,
              left: 8,
              top: 8,
              border: "1px solid #000",
              position: "absolute",
              fontSize: "25px",
              backgroundColor: "#600",
              borderRadius: 20,
              cursor: "pointer",
              opacity: 1,
            }}
            onClick={() => {
              keyEliminar(key)
              showModal()
            }
            }></button>

          <div style={{
            display: "flex",
            width: "100%",
            height: 30,
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.6,
          }}>
            <input type={"phone"} placeholder={"+591"} defaultValue={obj.codigo} id={key + "_codigo"} style={{
              width: "15%",
              height: 30,
              borderRadius: 4,
              border: "1px solid #666",
            }} />
            <input type={"number"} placeholder={"#######"} defaultValue={obj.telefono} id={key + "_telefono"} style={{
              width: "60%",
              height: 30,
              borderRadius: 4,
              border: "1px solid #666",
            }} />
            <button
              type="button"
              className={"btn btn-primary"}
              style={{
                height: 30,
              }}
              onClick={() => {
                var codigo = document.getElementById(key + "_codigo").value;
                if(!codigo){
                  codigo = "+591";
                }
                var telefono = document.getElementById(key + "_telefono").value;
                var objSend = {
                  component: "publicidad",
                  type: "editar",
                  estado: "cargando",
                  data: {
                    ...obj,
                    codigo: codigo,
                    telefono: telefono,
                  },
                };
                //var gg =keyDel;
                //alert(keyDel)
                props.state.socketReducer.session["parqueosya"].send(objSend, true);
              }}
            >
              SEND
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h1 className="text-center">Publicidad Parqueo</h1>
      <FotoPicker
        data={{
          component: "publicidad",
          type: "subirFoto",
          // key: keyPublicidad
          // key: "dsdds"
        }}
      />
      <p>Subir imagen de tamaño 1024 x 300 pixeles</p>
      <br />

      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}>
        {getLista()}

      </div>

      <ModalPadre
        titulo="ELIMINAR PUBLICIDAD"
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
  return { state };
};

export default connect(initStates)(PublicidadParqueo);

import React from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import MarkerParqueo from "../components/MarkerParqueo";
import ModalPropietario from "../components/Modal/ModalPropietario";
import { ActivityIndicator } from "react-native";

const PerfilParqueo = (props) => {

  const [ModalPropetario, setModalPropetario] = React.useState(false);
  const [keyPropietario, setKeyPropietario] = React.useState(0);

  const [objValores, setObjValores] = React.useState({
    propetario: {
      key: "",
      value: "",
      error: false,
    },
  });

  let datoPropietario = {}
  var key_parqueo = props.match.params.key;

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

  var datos = props.state.parqueoReducer.data[key_parqueo];
  var estadoParqueo = false;

  if (datos.estado_disponible == 1) {
    estadoParqueo = true;
  }

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

  const getHorariosAtencion = () => {
    var list = [];
    var data = props.state.parqueoReducer.data[key_parqueo].horario_atencion;

    return Object.keys(data).map((key) => {
      var obj = data[key];
      // console.log(obj);

      return (
        <>
          <div class="row">
            <div class="col">{obj.dia}</div>
            <div class="col text-end">{obj.hora_inicio}</div>
            <div class="col text-center">-</div>
            <div class="col">{obj.hora_fin}</div>
          </div>
        </>
      );
    });
  };

  const enviar = (key) => {
    var objSend = {
      component: "propietario",
      type: "registrar",
      estado: "cargando",
      data: {
        key_parqueo: datos.key,
        key_usuario: key,
      },
      key_usuario: props.state.usuarioReducer.usuarioLog.key,
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    return <div />;
  }


  const getAllPropietario = () => {

    if (!props.state.parqueoPropietarioReducer.data[datos.key]) {
      if (props.state.parqueoPropietarioReducer.estado == "cargando") {
        return <div className="spinner"></div>;
      }
      if (props.state.parqueoPropietarioReducer.estado == "error") {
        return <div>{props.state.parqueoPropietarioReducer.error}</div>;
      }
      var objSend = {
        component: "propietario",
        type: "getAll",
        estado: "cargando",
        key_parqueo: datos.key
      };
      props.state.socketReducer.session["parqueosya"].send(objSend, true);
      return <div />;
    }

    datoPropietario = props.state.parqueoPropietarioReducer.data[datos.key]

    if (!datoPropietario) {
      return <div />
    }

    return Object.keys(datoPropietario).map((key) => {
      // console.log("edson " + key)
      let userData = props.state.usuarioReducer.data[key]
      if (!userData) {
        return <div />
      }
      // console.log(userData.Nombres.dato)
      return (
        <div className="row">
          <div className="col-md-6 mb-0">
            <p className="form-control"
            >{userData.Nombres.dato} {userData.Apellidos.dato}</p>
          </div>
          <div className="col-md-6 mb-0">
            <button type="button" className="btn btn-danger" onClick={(e) => {
              e.preventDefault()
              var objSend = {
                component: "propietario",
                type: "eliminar",
                estado: "cargando",
                key_parqueo: datos.key,
                key_usuario: key,
              };
              props.state.socketReducer.session["parqueosya"].send(objSend, true);
            }} >
              Eliminar
            </button>
          </div>
        </div >
      )
    })
  }


  let nombreUser = "";
  if (keyPropietario) {
    if (props.state.usuarioReducer.data[keyPropietario]) {
      let userData = props.state.usuarioReducer.data[keyPropietario];
      nombreUser = userData.Nombres.dato + " " + userData.Apellidos.dato;
    }
  }

  return (
    <>
      <button
        className="btn btn-sm"
        style={{ background: "#6c4675", color: "#fff" }}
        onClick={() => window.history.back()}
      >
        Volver
      </button>

      <h1 className="text-center">Perfil Parqueo</h1>
      <div className="card mb-3">
        <div className="card-body">
          <div class="row">
            <div class="col-6">
              <h2>{datos.nombre}</h2>
            </div>
            <div class="col-12">
              <h5>Descripcion:</h5>
              <div>{datos.descripcion}</div>
            </div>
            <div class="col-12">
              <h5>Telefono:</h5>
              <div>{datos.telefono}</div>
            </div>
            <div class="col-6">
              <h5>Dirección:</h5>
              <div >{datos.direccion.direccion}</div>
            </div>

          </div>
          <br />
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <h5>Horarios de Atención:</h5>
              {getHorariosAtencion()}
            </div>

            <div class="col-xs-12 col-md-6">
              <h5>El parqueo se encuentra disponible?:</h5>
              <input
                className="input-check"
                type="checkbox"
                checked={estadoParqueo}
                onChange={() => {
                  //alert("sds");
                  var objSend = {
                    component: "parqueo",
                    type: "cambiarEstado",
                    estado: "cargando",
                    //cabecera: "registro_administrador",
                    data: datos,
                  };
                  props.state.socketReducer.session["parqueosya"].send(objSend, true);
                  return <div />;
                }}
              />
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-md-12 mb-3">
              <label class="form-label">Propietario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Propietario"
                readOnly
                // defaultValue={objValores.propetario.value}
                onClick={(e) => {
                  e.stopPropagation();
                  setModalPropetario(true);
                }}
              // value={nombreUser}
              // id="inputPropietario"
              />
            </div>
          </div>

          <p>
            Propietario
          </p>

          {getAllPropietario()}

          <br />
          <div className="row">
            <div class="col-12">
              <h5>En mapa:</h5>
              <div style={{ height: 350, width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAt-U-cFcg5QNfPAvQW5YWT1d1SbEJFNuM",
                  }}
                  defaultCenter={{
                    lat: -17.7799998333333332,
                    lng: -63.180598333333336,
                  }}
                  defaultZoom={13}
                >
                  <MarkerParqueo
                    lat={datos.direccion.latitude}
                    lng={datos.direccion.longitude}
                    style={{ cursor: "pointer" }}
                  />
                  {/*getSVGMapa()*/}
                </GoogleMapReact>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <ModalPropietario
        titulo={"Propietario"}
        tamano="large"
        show={ModalPropetario}
        datoPropietario={datoPropietario}
        handleClose={() => {
          setModalPropetario(false);
        }}
        setKeyPropietario={(key) => {
          setKeyPropietario(key);
          setModalPropetario(false);
          enviar(key)
        }}>
      </ModalPropietario>
    </>
  );
};

const initStates = (state) => {
  return { state };
};

export default connect(initStates)(PerfilParqueo);

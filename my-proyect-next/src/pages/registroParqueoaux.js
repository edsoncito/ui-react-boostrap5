import React from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import HoraPicker from "../components/HoraPicker";
import AppParams from "../Params/index";
import MiMarker from "../components/MiMarker";
import FotoPicker from "../components/FotoPicker";
import ModalPadre from "../components/Modal/ModalPadre";
import ModalPropie from "../components/Modal/ModalPropietario";
import logosuccess from "../svg/success.png";
import Table from "../components/Table2";
import { Link } from "react-router-dom";
import { ActivityIndicator } from "react-native";

let tituloModal = "";
var refs_pickers = {};
const RegistroParqueo = (props) => {
  const [Modal, setModal] = React.useState(false);
  const [ModalPropetario, setModalPropetario] = React.useState(false);
  const [horario, setHorario] = React.useState({});
  const [Accion, setAccion] = React.useState(false);
  const [keyPropietario, setKeyPropietario] = React.useState(0);
  const [objValores, setObjValores] = React.useState({
    nombre: {
      value: "",
      error: false,
    },
    descripcion: {
      value: "",
      error: false,
    },
    propetario: {
      key: "",
      value: "",
      error: false,
    },
    telefono: {
      value: "",
      error: false,
    },
    direccion: {
      value: "",
      error: false,
    },
    horario_atencion: {
      value: "",
      error: false,
    },
  });

  const valorID = props.match.params.key;
  var lati = -17.7799998333333332;
  var longi = -63.180598333333336;
  var parqueo = props.state.parqueoReducer.data[valorID];
  var keyParqueo = 0;
  if (parqueo) {
    keyParqueo = parqueo.key;
  }
  if (!Accion) {
    if (valorID) {
      console.log(valorID);
      parqueo = props.state.parqueoReducer.data[valorID];
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

      Object.keys(objValores).map((key) => {
        console.log("hola " + parqueo[key]);
        objValores[key].value = !parqueo[key] ? "" : parqueo[key];
      });

      if (objValores.horario_atencion.value) {
        var horariosBD = objValores.horario_atencion.value;
        console.log(horariosBD);
        Object.keys(horariosBD).map((key) => {
          var datoo = horariosBD[key];
          horario[datoo.dia] = {
            dia: datoo.dia,
            hora_inicio: datoo.hora_inicio,
            hora_fin: datoo.hora_fin,
          };
        });
        setHorario({ ...horario });
      }
      setObjValores({ ...objValores });
      setAccion("Editar");
      return <div />;
    } else if (!valorID) {
      setAccion("Crear");
    }
  }

  // console.log("edson  " + JSON.stringify(horario))

  const showModal = () => {
    if (Accion == "Editar") {
      tituloModal = "SE EDITO CORRECTAMENTE";
    } else {
      tituloModal = "SE GUARDO CORRECTAMENTE";
    }
    setModal(true);
    props.state.parqueoReducer.estado = "";
  };

  const hideModal = () => {
    setModal(false);
  };

  const hideModalPropetario = () => {
    setModalPropetario(false);
  };

  const horarioAtencion = (dia) => {
    return (
      <div
        style={{
          alignItems: "center",
        }}
        className="row mb-2"
      >
        <div className="col-md-2 col-6">
          <div>{dia}</div>
        </div>
        <div className="col-md-2 col-6">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked={!!horario[dia]}
              onChange={() => {
                if (horario[dia]) {
                  delete horario[dia];
                } else {
                  horario[dia] = {
                    dia: dia,
                    hora_inicio: refs_pickers[dia + "inicio"].value(),
                    hora_fin: refs_pickers[dia + "fin"].value(),
                  };
                }
                setHorario({ ...horario });
              }}
            />
            {/* <label className="form-check-label" for="flexSwitchCheckChecked">Lunes</label> */}
          </div>
        </div>
        <div
          className="col-md-2 col-6"
          style={{
            display: !horario[dia] ? "none" : "flex",
          }}
        >
          <HoraPicker
            ref={(ref) => {
              refs_pickers[dia + "inicio"] = ref;
            }}
            defaultValue={!horario[dia] ? "09:00" : horario[dia].hora_inicio}
            onChange={(value) => {
              if (horario[dia]) {
                horario[dia]["hora_inicio"] = value;
              }
            }}
          />
        </div>
        <div
          className="col-md-2 col-6"
          style={{
            display: !horario[dia] ? "none" : "flex",
          }}
        >
          <HoraPicker
            ref={(ref) => {
              refs_pickers[dia + "fin"] = ref;
            }}
            defaultValue={!horario[dia] ? "19:00" : horario[dia].hora_fin}
            onChange={(value) => {
              if (horario[dia]) {
                horario[dia]["hora_fin"] = value;
              }
            }}
          />
        </div>
      </div>
    );
  };

  const ButtonCrear = () => {
    // console.log(props.state.parqueoReducer.estado)
    if (
      props.state.parqueoReducer.estado === "exito" &&
      props.state.parqueoReducer.type === "registro"
    ) {
      //alert("1")
      showModal();
    }

    if (
      props.state.parqueoReducer.estado == "exito" &&
      props.state.parqueoReducer.type == "editar"
    ) {
      //alert("2")
      showModal();
      props.state.parqueoReducer.estado = "";
    }

    var nombre = document.getElementById("inputNombre").value;
    var telefono = document.getElementById("inputTelefono").value;
    var descripcion = document.getElementById("inputDescripcion").value;
    var propietario = document.getElementById("inputPropietario").value;
    var key_usuario_administrador = keyPropietario

    var exito = true;
    if (!nombre) {
      document.getElementById("inputNombre").style.border = "1px solid #f00";
      exito = false;
    } else {
      document.getElementById("inputNombre").style.border = "1px solid #dedede";
    }
    if (!telefono) {
      document.getElementById("inputTelefono").style.border = "1px solid #f00";
      exito = false;
    } else {
      document.getElementById("inputTelefono").style.border =
        "1px solid #dedede";
    }
    if (!descripcion) {
      document.getElementById("inputDescripcion").style.border =
        "1px solid #f00";
      exito = false;
    } 
    if (!propietario) {
      document.getElementById("inputPropietario").style.border =
        "1px solid #f00";
      exito = false;
    } else {
      document.getElementById("inputDescripcion").style.border =
        "1px solid #dedede";
    }
    if (horario) {
      if (Object.keys(horario).length <= 0) {
        exito = false;
      }
    }
    if (!exito) {
      document.getElementById("idFaltanDatos").style.display = "flex";
      document.getElementById("content").scrollTop = "flex";
    } else {
      console.log("enviooo");
      var horariosArray = Object.keys(horario).map((key) => {
        return horario[key];
      });
      var data = {
        nombre,
        telefono,
        descripcion,
        key_usuario_administrador,
        key_creador: "",
        direccion: props.state.locationGoogleMapReducer.markerUbicacion,
        horario_atencion: horariosArray,
      };
      {
        Accion == "Editar"
          ? props.state.socketReducer.session[AppParams.socket.name].send(
              {
                component: "parqueo",
                type: "editar",
                data: { ...parqueo, ...data },
                estado: "cargando",
              },
              true
            )
          : props.state.socketReducer.session[AppParams.socket.name].send(
              {
                component: "parqueo",
                type: "registro",
                data: data,
                estado: "cargando",
              },
              true
            );
      }
    }
  };

  if (objValores.direccion.value) {
    lati = objValores.direccion.value.latitude;
    longi = objValores.direccion.value.longitude;
  }

  const getLista = () => {
    var data = props.state.usuarioReducer.data;
    if (!data) {
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
        cabecera: "registro_administrador",
        data: "",
      };
      props.state.socketReducer.session["parqueosya"].send(objSend, true);
      return <ActivityIndicator color={"#000"} />;
    }
    var usuario = props.state.usuarioReducer.usuarios;
    if (!usuario) {
      return <ActivityIndicator color={"#000"} />;
    }
    return Object.keys(data).map((key) => {
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
        <tbody
          onClick={() => {
            objValores.propetario.key = key;
            objValores.propetario.value = obj["Nombres"].dato;
            setObjValores({ ...objValores });
            setModalPropetario(false);
          }}
        >
          <tr key={key}>
            <td style={{ fontSize: 9 }}>{key}</td>
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
  var nombreUser = "";
  if (keyPropietario) {
    //alert(keyPropietario)
    /*var objSend = {
      component: "usuario",
      type: "getById",
      estado: "cargando",
      cabecera: "registro_administrador",
      key_usuario: keyPropietario,
      data: "",
    };
    props.state.socketReducer.session["parqueosya"].send(objSend, true);
    return (<div></div>)*/
    if (props.state.usuarioReducer.data[keyPropietario]) {
      var userData = props.state.usuarioReducer.data[keyPropietario];
      nombreUser = userData.Nombres.dato + " " + userData.Apellidos.dato;
    }
    
    
  }
  

  return (
    <>
      <h1 className="text-center">Registro Parqueo</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form>
            {valorID ? (
              <div className="mb-3 text-center ">
                {/* <img style={{
                width: 150,
                height: 150
              }} src={logo} className="img-thumbnail rounded-circle" /> */}
                <FotoPicker
                  data={{
                    component: "parqueo",
                    type: "subirFoto",
                    key: keyParqueo,
                    // key: "dsdds"
                  }}
                />
              </div>
            ) : (
              <div />
            )}

            <div className="row">
              <div className="col-md-6 mb-3">
                <label class="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNombre"
                  placeholder="Nombre"
                  defaultValue={objValores.nombre.value}
                  onChange={(elm) => {
                    var texto = elm.currentTarget.value;
                    objValores.nombre.value = texto;
                    setObjValores({ ...objValores });
                  }}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label class="form-label">Teléfono</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputTelefono"
                  placeholder="Teléfono"
                  defaultValue={objValores.telefono.value}
                  onChange={(elm) => {
                    var texto = elm.currentTarget.value;
                    objValores.telefono.value = texto;
                    setObjValores({ ...objValores });
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label class="form-label">Descripción</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputDescripcion"
                  placeholder="Descripción"
                  defaultValue={objValores.descripcion.value}
                  onChange={(elm) => {
                    var texto = elm.currentTarget.value;
                    objValores.descripcion.value = texto;
                    setObjValores({ ...objValores });
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <h3>Horarios de Atención</h3>
              <p
                id="idFaltanDatos"
                style={{
                  display: "none",
                  color: "#f00",
                }}
              >
                Faltan Datos
              </p>

              {horarioAtencion("Lunes")}
              {horarioAtencion("Martes")}
              {horarioAtencion("Miércoles")}
              {horarioAtencion("Jueves")}
              {horarioAtencion("Viernes")}
              {horarioAtencion("Sabado")}
              {horarioAtencion("Domingo")}
            </div>
            <div className="mb-3">
              <h3>Dirección Fisica</h3>
              <div
                style={{
                  height: 450,
                  width: "100%",
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAt-U-cFcg5QNfPAvQW5YWT1d1SbEJFNuM",
                  }}
                  options={{
                    gestureHandling: "cooperative",
                  }}
                  defaultCenter={{
                    lat: lati,
                    lng: longi,
                  }}
                  onGoogleApiLoaded={(map) => {
                    //alert(objValores.direccion.value.latitude)
                    var region = {
                      latitude: lati,
                      longitude: longi,
                    };
                    props.state.socketReducer.session[
                      AppParams.socket.name
                    ].send(
                      {
                        component: "locationGoogle",
                        type: "geocode",
                        data: region,
                        estado: "cargando",
                      },
                      true
                    );
                  }}
                  onDragEnd={(map) => {
                    var latitude = map.center.lat();
                    var longitude = map.center.lng();
                    var region = {
                      latitude,
                      longitude,
                    };
                    props.state.socketReducer.session[
                      AppParams.socket.name
                    ].send(
                      {
                        component: "locationGoogle",
                        type: "geocode",
                        data: region,
                        estado: "cargando",
                      },
                      true
                    );
                  }}
                  defaultZoom={14}
                ></GoogleMapReact>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    width: 30,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 20,
                  }}
                >
                  <MiMarker />
                </div>
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    width: "70%",
                    height: 50,
                    top: 4,
                    borderRadius: 8,
                    backgroundColor: "#fcfcfc",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <span>
                    {
                      props.state.locationGoogleMapReducer.markerUbicacion
                        .direccion
                    }
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-3">
                <label class="form-label">Propietario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Propietario"
                  readOnly
                  defaultValue={objValores.propetario.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalPropetario(true);
                    // alert("sdsd")
                  }}
                  onChange={(elm) => {
                    var texto = elm.currentTarget.value;
                    objValores.descripcion.value = texto;
                    setObjValores({ ...objValores });
                  }}
                  value={nombreUser}
                  id="inputPropietario"
                />
              </div>
            </div>

            <div className="text-center">
              {Accion == "Editar" ? (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    ButtonCrear();
                  }}
                >
                  EDITAR
                </button>
              ) : props.state.parqueoReducer.estado == "cargando" ? (
                <button type="button" className="btn btn-primary">
                  Cargando..
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    ButtonCrear();
                  }}
                >
                  REGISTRAR
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <ModalPadre
        titulo={tituloModal}
        show={Modal}
        handleClose={hideModal}
        
      >
        <div className="text-center">
          <img
            style={{
              width: 100,
              height: 100,
            }}
            src={logosuccess}
            className="img-thumbnail rounded-circle"
          />
        </div>
      </ModalPadre>

      <ModalPropie
        titulo={"Propietario"}
        tamano="large"
        show={ModalPropetario}
        handleClose={() => {
          setModalPropetario(false);
        }}
        setKeyPropietario={(key) => {
          //alert(key);
          setKeyPropietario(key);
          setModalPropetario(false);
        }}
      >
        {/* <Link className='btn btn-primary mb-2' to='./registroAdministradorParqueo'>Agregar</Link> */}
        {/*<Table headers = {}>
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

    </Table>*/}
      </ModalPropie>
    </>
  );
};

const initStates = (state) => {
  return { state };
};
export default connect(initStates)(RegistroParqueo);

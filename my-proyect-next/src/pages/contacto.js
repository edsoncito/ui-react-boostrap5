import React from "react";
import { connect } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import logo from "../svg/profile.jpg"
import HoraPicker from "../components/HoraPicker";
import AppParams from "../Params";
import MiMarker from "../components/MiMarker";

var refs_pickers = {};
const RegistroParqueo = (props) => {
  const [horario, setHorario] = React.useState({});
  const [Accion, setAccion] = React.useState(false);
  const [objValores, setObjValores] = React.useState({
    nombre: {
      value: "",
      error: false,
      nameDb: "Nombre"
    },
    descripcion: {
      value: "",
      error: false,
      nameDb: "Descripcion"
    },
    telefono: {
      value: "",
      error: false,
      nameDb: "Telefono"
    },
    
  });
  const valorID = props.match.params.key

  
  if (!Accion) {
    if (valorID) {
      var parqueo = "";
      if (props.state.parqueoReducer.data[valorID]) {
        parqueo = props.state.parqueoReducer.data[valorID];
      }
      Object.keys(objValores).map((key) => {
        console.log(parqueo[objValores[key].nameDb])
        objValores[key].value = !parqueo[objValores[key].nameDb] ? "" : parqueo[objValores[key].nameDb].dato;

      })
      setObjValores({ ...objValores });
      setAccion("Editar")
      return <div />
    } else if (!valorID) {
      setAccion("Crear")
    }
  }

  const horarioAtencion = (dia) => {
    return (
      <div style={{
        alignItems: "center"
      }} className="row mb-2">
        <div className="col-md-2 col-6">
          <div>{dia}</div>
        </div>
        <div className="col-md-2 col-6">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={horario[dia]} onChange={() => {
              if (horario[dia]) {
                delete horario[dia];
                setHorario({ ...horario });
              } else {
                horario[dia] = {
                  dia: dia,
                  hora_inicio: refs_pickers[dia + "inicio"].value(),
                  hora_fin: refs_pickers[dia + "fin"].value()
                }
                setHorario({ ...horario });
              }
            }} />
            {/* <label className="form-check-label" for="flexSwitchCheckChecked">Lunes</label> */}
          </div>
        </div>
        <div className="col-md-2 col-6" style={{
          display: !horario[dia] ? "none" : "flex"
        }}>
          <HoraPicker ref={(ref) => { refs_pickers[dia + "inicio"] = ref }} defaultValue={"09:00"} onChange={(value) => {
            if (horario[dia]) {
              horario[dia]["hora_inicio"] = value;
            }
          }} />
        </div>
        <div className="col-md-2 col-6" style={{
          display: !horario[dia] ? "none" : "flex"
        }}>
          <HoraPicker ref={(ref) => { refs_pickers[dia + "fin"] = ref }} defaultValue={"19:00"} onChange={(value) => {
            if (horario[dia]) {
              horario[dia]["hora_fin"] = value;
            }
          }} />
        </div>
      </div >
    )
  }

  const ButtonCrear = (propBtn) => {
    var isCargando = props.state.parqueoReducer.estado == "cargando";
    if (props.state.parqueoReducer.estado == "exito" && props.state.parqueoReducer.type == "registro") {
      alert("REGISTRO EXITOSO");
      props.state.parqueoReducer.estado = "";
    }
    return <div style={{
      width: "100%",
      display: "flex",
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <p id="idFaltanDatos"
        style={{
          display: "none",
          color: "#f00",
        }}>Faltan Datos</p>
      <div style={{
        width: 200,
        height: 50,
        backgroundColor: "#dfdfdf",
        borderRadius: 10,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} onClick={() => {
        // if(isCargando) return;
        var nombre = document.getElementById("inputNombre").value;
        var telefono = document.getElementById("inputTelefono").value;
        var descripcion = document.getElementById("inputDescripcion").value;

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
          document.getElementById("inputTelefono").style.border = "1px solid #dedede";
        }
        if (!descripcion) {
          document.getElementById("inputDescripcion").style.border = "1px solid #f00";
          exito = false;
        } else {
          document.getElementById("inputDescripcion").style.border = "1px solid #dedede";
        }

        if (!exito) {
          document.getElementById("idFaltanDatos").style.display = "flex";
          document.getElementById("content").scrollTop = "flex";
        } else {
          var horariosArray = Object.keys(horario).map((key) => {
            return horario[key];
          })
          var data = {
            nombre,
            telefono,
            descripcion,
            key_creador: "",
            direccion: props.state.locationGoogleMapReducer.markerUbicacion,
            horario_atencion: horariosArray
          }
          props.state.socketReducer.session[AppParams.socket.name].send({
            component: "parqueo",
            type: "registro",
            data: data,
            estado: "cargando"
          }, true);
        }
      }}>
        <span style={{
          fontWeight: "bold",
          fontSize: 18,
        }}>{!isCargando ? "CREAR" : "cargando..."}</span>
      </div>
    </div>
  }
  return (
    <>
      <h1 className="text-center">Inscribe tu parqueo</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label class="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" />
              </div>
              <div className="col-md-6 mb-3">
                <label class="form-label">Teléfono</label>
                <input type="number" className="form-control" id="inputTelefono" placeholder="Teléfono" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label class="form-label">Descripción</label>
                <textarea type="text" className="form-control" id="inputDescripcion" placeholder="Descripción" />
              </div>
            </div>


            <div className="mb-3">
              <h3>Horarios de Atención</h3>

              {horarioAtencion("Lunes")}
              {horarioAtencion("Martes")}
              {horarioAtencion("Miércoles")}
              {horarioAtencion("Jueves")}
              {horarioAtencion("Viernes")}
              {horarioAtencion("Sabado")}
              {horarioAtencion("Domingo")}

            </div>
            <div className="mb-3">
              <h3 >Dirección Fisica</h3>
              <div style={{
                height: 350,
                width: '100%',
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyAt-U-cFcg5QNfPAvQW5YWT1d1SbEJFNuM" }}
                  scrollwheel={false}
                  defaultCenter={{
                    lat: -17.7799998333333332,
                    lng: -63.180598333333336
                  }}
                  onGoogleApiLoaded={(map) => {
                    var region = {
                      latitude: -17.7799998333333332,
                      longitude: -63.180598333333336
                    }
                    props.state.socketReducer.session[AppParams.socket.name].send({
                      component: "locationGoogle",
                      type: "geocode",
                      data: region,
                      estado: "cargando"
                    }, true);
                  }}
                  onDragEnd={(map) => {
                    var latitude = map.center.lat();
                    var longitude = map.center.lng();
                    var region = {
                      latitude,
                      longitude
                    }
                    props.state.socketReducer.session[AppParams.socket.name].send({
                      component: "locationGoogle",
                      type: "geocode",
                      data: region,
                      estado: "cargando"
                    }, true);

                  }}
                  defaultZoom={14}>

                </GoogleMapReact>
                <div style={{
                  position: "absolute",
                  display: "flex",
                  width: 30,
                  height: 45,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 15,
                }}>
                  <MiMarker />
                </div>
                <div style={{
                  position: "absolute",
                  display: "flex",
                  width: "70%",
                  height: 50,
                  top: 4,
                  borderRadius: 8,
                  backgroundColor: "#fcfcfc",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center"
                }}>
                  <span>{props.state.locationGoogleMapReducer.markerUbicacion.direccion}</span>
                </div>
              </div>
            </div>
            <ButtonCrear />
          </form>
        </div>
      </div>
    </>
  );
};

const initStates = (state) => {
  return { state }
};
export default connect(initStates)(RegistroParqueo);

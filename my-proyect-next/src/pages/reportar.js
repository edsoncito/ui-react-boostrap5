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
        }}>{!isCargando ? "ENVIAR" : "cargando..."}</span>
      </div>
    </div>
  }
  return (
    <>
      <h1 className="text-center">Reportar un problema</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form>

            <div className="row">
              <div className="col-md-12">
                <label class="form-label"> Reportar su problema:</label><br/><br/>        
                <label class="form-label">Problema</label>
                <textarea type="text" className="form-control" id="inputDescripcion" placeholder="Descripción" style={{height:300}}/>
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

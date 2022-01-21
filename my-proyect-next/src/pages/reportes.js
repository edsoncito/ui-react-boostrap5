import React from 'react';
import { connect } from 'react-redux';
import ModalPadre from '../components/Modal/ModalPadre';
import report from '../svg/report.svg'
import moment from 'moment';

const Reportes = (props) => {

  let nombre = ""
  const [data, setData] = React.useState(false);
  const [ModalFecha, setModalFecha] = React.useState(false);

  const getLista = () => {
    var cantidadNotificacion = {
      parqueos: {
        key: "parqueo",
        nombre: "Parqueos",
        // url: "AnalisisListaPage"
      },
      // usuario: {
      //   key: "usuarios",
      //   nombre: "Usuarios",
      //   // url: "FarmaciaListaPage"
      // },
    };
    return Object.keys(cantidadNotificacion).map((key) => {
      // var IconShow = false;
      // var url = "";
      // switch (key) {
      //   case "parqueos":
      //     // IconShow = <img src={iconWebImagenologia} style={{ width: 50 }} />;
      //     // nombre = "Parqueos";
      //     // url = "AnalisisListaPage";
      //     break;
      //   case "usuarios":
      //     // IconShow = <img src={iconWebFarmacia} style={{ width: 50 }} />;
      //     // nombre = "Farmacia";
      //     // url = "FarmaciaListaPage";
      //     break;
      // }

      return (
        <div className="card text-dark m-2"
          onClick={() => {
            setData(cantidadNotificacion[key])
            // setModalFecha(data)
          }}
          style={{
            height: 180,
            width: 180
          }}>
          <div className="card-body d-flex align-items-center justify-content-center flex-column" >
            <img style={{
              width: 50,
              height: 50
            }} src={report} className="" />
            <br />
            <h5 className="">{cantidadNotificacion[key].nombre}</h5>
          </div>
        </div>
      )
    })
  }

  const getReporteSolicitado = () => {

    var fecha_inicio = document.getElementById("fecha_inicio").value;
    var fecha_fin = document.getElementById("fecha_fin").value;

    window.open("/VistaReportePage" + "/" + data.key + "/" + fecha_inicio + "/" + fecha_fin + "/");

    return (
      <div />
    )
  }


  return (
    <>
      <h1 className="text-center">Reportes</h1>
      <div className="row">
        {getLista()}
      </div>

      <ModalPadre titulo={"reporte"} show={data} handleClose={() => {
        setData(false)
      }}>
        <p>Seleccione las fechas</p>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label class="form-label">Desde</label>
            <input type="date" className="form-control" placeholder="Propetario"
              defaultValue={"2021-04-01"}
              id="fecha_inicio"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label class="form-label">Hasta</label>
            <input type="date" className="form-control" placeholder="Propetario"
              id="fecha_fin"
              defaultValue={moment(new Date()).format("YYYY-MM-DD")}
            />
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={() => { getReporteSolicitado() }} >
            Aceptar
            </button>
        </div>


      </ModalPadre>
    </>
  )
}

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(Reportes);


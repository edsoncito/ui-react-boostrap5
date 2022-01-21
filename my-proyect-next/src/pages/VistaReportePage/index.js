import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import moment from 'moment'
import 'moment/locale/es'
import ReporteFechas from './ReporteFechas';

const formatFecha = (date) => {
     return moment(new Date(date)).format("LL")
}

const VistaReportePage = (props) => {

     var key = props.match.params.tipo
     var fecha_inicio = props.match.params.fecha_inicio
     var fecha_fin = props.match.params.fecha_fin

     const getTipoReporte = (tipo) => {
          switch (tipo) {
               case "parqueo":
                    return <ReporteFechas
                         tipo={props.match.params.tipo}
                         fecha_inicio={props.match.params.fecha_inicio}
                         fecha_fin={props.match.params.fecha_fin}
                         header={[
                              { label: "Codigo", key: "key", type: "key" },
                              { label: "Nombre", key: "nombre", type: "text" },
                              { label: "Descripcion", key: "descripcion", type: "text" },
                              { label: "Teléfono", key: "telefono", type: "text" },
                              { label: "Estado Disponible", key: "estado_disponible", type: "text" },
                              { label: "Lunes", key: "Lunes", type: "text" },
                              { label: "Martes", key: "Martes", type: "text" },
                              { label: "Miércoles", key: "Miércoles", type: "text" },
                              { label: "Jueves", key: "Jueves", type: "text" },
                              { label: "Viernes", key: "Viernes", type: "text" },
                              { label: "Sabado", key: "Sabado", type: "text" },
                              { label: "Domingo", key: "Domingo", type: "text" },
                              { label: "Vistas", key: "vistas", type: "text" },
                              { label: "Tiempo", key: "tiempo", type: "text" },
                              { label: "Fecha on", key: "fecha_on", type: "fecha" },
                              { label: "Estado", key: "estado", type: "estado" },
                         ]}
                    />
               case "usuarios":
                    return <ReporteFechas
                         tipo={props.match.params.tipo}
                         fecha_inicio={props.match.params.fecha_inicio}
                         fecha_fin={props.match.params.fecha_fin}
                         header={[
                              { label: "Codigo", key: "key", type: "key" },
                              { label: "Fecha", key: "fecha_on", type: "fecha" },
                              { label: "Usuario ", key: "key_usuario", type: "usuario" },
                         ]}
                    />
          }
          return <div>{tipo}</div>
     }
     return (
          <div id={"fondo-cruces"} className="container">
               <h4 style={{
                    textAlign: "center"
               }}>
                    <u>Reporte de {key}</u>
               </h4>
               <h6 style={{
                    textAlign: "center"
               }}>
                    Desde el <b>"{formatFecha(fecha_inicio)}"</b> hasta el <b>"{formatFecha(fecha_fin)}"</b>
               </h6>
               {getTipoReporte(key)}
          </div>
     )
}

const initStates = (state) => {
     return { state }
};

export default connect(initStates)(VistaReportePage);


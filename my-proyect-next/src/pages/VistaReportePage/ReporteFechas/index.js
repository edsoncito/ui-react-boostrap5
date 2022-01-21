import React from 'react';
import { connect } from 'react-redux';
import ExportExel from '../ExportExel';
import refresh from '../../../svg/refresh.svg'
import AppParams from '../../../Params/index'

const ReporteFechas = (props) => {

    const [data, setData] = React.useState({
        data: false,
        estado: false,
    });

    const renderData = () => {
        setData({ ...data });
        return <div></div>
    }

    // if (!data.estado) {
    //     data.estado = "cargando";
    // var body = new FormData();

    if (props.state.reporteReducer.estado == "cargando") {
        // console.log("cargando")
        return <div>Cargando...</div>
    }

    if (props.state.reporteReducer.estado == "exito") {
        // alert("exito")
        props.state.reporteReducer.estado = false
    }

    // console.log(data.estado)
    if (!data.estado) {
        var dataSend = {
            component: "reporte",
            type: "execute",
            estado: "cargando",
            tipo: props.tipo,
            fecha_inicio: props.fecha_inicio,
            fecha_fin: props.fecha_fin,
        };
        props.state.socketReducer.session["parqueosya"].send(dataSend, true);
        data.estado = true
        console.log("sdsddsdsd")
        setData({ ...data })
        return <div />
    }



    // body.append('data', JSON.stringify(dataSend));
    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //         data.data = JSON.parse(this.responseText);
    //         data.estado = "exito";
    //         renderData();
    //         return;
    //     }
    //     data.estado = "error";
    //     renderData();
    // });

    // xhr.open("POST", AppParams.http.url + "manejador/");
    // xhr.send(body);
    // return renderData();
    // }

    // if (data.estado == "cargando") {
    //     return <div>Cargando...</div>
    // }
    // if (!data.data) {
    //     return <div>Cargando...</div>
    // }

    const getDato = (dato, head, isStr) => {
        //ISDATE?
        if (!dato) {
            return { iten: <td></td>, dato: "" }
        }
        switch (head.type) {
            case "key":
                return { iten: <td style={{ fontSize: 8 }}>{dato}</td>, dato: dato }
            case "estado":
                return { iten: <td>{dato}</td>, dato: dato }
            case "usuario":
                var usuario = props.state.usuarioReducer.data[dato];
                if (typeof usuario == "object") {
                    return {
                        iten: <td>{usuario.data["Nombres"].dato + " " + usuario.data["Apellidos"].dato}</td>,
                        dato: usuario.data["Nombres"].dato + " " + usuario.data["Apellidos"].dato
                    }
                }
                return { iten: <td>{"usuario no encontrado."}</td>, dato: "usuario no encontrado." }
            case "fecha":
                var date = new Date(dato);
                if (date instanceof Date && !isNaN(date.valueOf())) {
                    return { iten: <td>{date.toLocaleString()}</td>, dato: date.toLocaleString() }
                }
                break;
            case "estado_consulta":
                if (dato["confirmar_cita"]) {
                    return { iten: <td>{"Confirmada"}</td>, dato: "Confirmada" }
                }
                if (dato["cancelar_cita"]) {
                    return { iten: <td>{"Cancelada"}</td>, dato: "Cancelada" }
                }
                return { iten: <td>{"Pendiente"}</td>, dato: "Pendiente" }
            case "estado_parqueo":
                if (dato["confirmar_cita"]) {
                    return { iten: <td>{"Confirmada"}</td>, dato: "Confirmada" }
                }
                if (dato["cancelar_cita"]) {
                    return { iten: <td>{"Cancelada"}</td>, dato: "Cancelada" }
                }
                return { iten: <td>{"Pendiente"}</td>, dato: "Pendiente" }
            case "movimiento_emergencia":
                if (dato[head.movimiento]) {
                    var date = new Date(dato[head.movimiento].fecha_on);
                    if (date instanceof Date && !isNaN(date.valueOf())) {
                        return { iten: <td style={{ textAlign: "center" }}>{date.toLocaleTimeString()}</td>, dato: date.toLocaleTimeString() }
                    }
                }
                return { iten: <td style={{ textAlign: "center" }}>--------</td>, dato: "------" }

        }
        if (typeof dato == "object") {
            return { iten: <td>{JSON.stringify(dato)}</td>, dato: JSON.stringify(dato) }
        }
        return { iten: <td>{dato}</td>, dato: dato }
    }


    var dataSet = {}
    const getTable = () => {

        data.data = props.state.reporteReducer.data

        // return <div>{JSON.stringify(data.data.data)}</div>
        var arr = data.data;
        // console.log("juan " + JSON.stringify(arr));
        // var datos = props.state.usuarioReducer.data
        // console.log(datos);
        if (!arr) return <div>vacio</div>

        var Data = [];
        var rows = arr.map((obj, i) => {
            // console.log("WWWWWWW " + obj)
            Data[i] = [];
            return (
                <tr >
                    <td>{i}</td>
                    {props.header.map((head, j) => {
                        // console.log("aaaaaa " + JSON.stringify(head.key))
                        // console.log("bbbbbb " + JSON.stringify(obj[head.key]))
                        var data
                        // console.log(head.key)

                        if (head.key === "Lunes" || head.key === "Martes" || head.key === "Miércoles" || head.key === "Jueves" || head.key === "Viernes" || head.key === "Sabado" || head.key === "Domingo") {
                            if (!obj["horario_atencion"]) {
                                data = getDato("", head);
                            } else {
                                var horario = obj["horario_atencion"];
                                if (!horario[head.key]) {
                                    data = getDato("", head);
                                } else {
                                    data = getDato(horario[head.key].hora_inicio + " - " + horario[head.key].hora_fin, head);
                                }
                            }
                        } else if (head.key === "vistas") {
                            if (!obj[head.key]) {
                                data = getDato("", head);
                            } else {
                                // console.log(obj[head.key].vistas)
                                data = getDato(obj[head.key].vistas, head);
                            }
                        } else if (head.key === "tiempo") {
                            if (!obj["vistas"]) {
                                data = getDato("", head);
                            } else {
                                // console.log(obj["vistas"].tiempo)
                                data = getDato(obj["vistas"].tiempo, head);
                            }
                        } else {
                            data = getDato(obj[head.key], head);
                        }
                        // data = getDato(obj[head.key], head);
                        Data[i].push(data.dato)
                        return data.iten
                    })}
                </tr>
            )
        })
        dataSet["columns"] = [];

        var Cabeceras = props.header.map((head, i) => {
            dataSet["columns"].push(head.label);
            return <th>{head.label}</th>
        })
        dataSet["data"] = Data;
        return (
            <div className="text-center">
                <div className="justify-content-center" style={{ margin: 8 }}>
                    <ExportExel dataSet={dataSet} />
                </div>
                <div className="row" style={{
                    maxWidth: "100vw",
                }}>
                    <table className={"tableMi"}>
                        <thead>
                            <th>#</th>
                            {Cabeceras}
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }

    if (!props.state.usuarioReducer.data) {
        if (props.state.usuarioReducer.estado == "cargando") {
            return <div>cargando..</div>
        }
        if (props.state.usuarioReducer.estado == "error") {
            return <div>{props.state.usuarioReducer.error}</div>
        }
        var objSend = {
            component: "usuario",
            type: "getAll",
            estado: "cargando",
            cabecera: "%%",
        };
        props.state.socketReducer.session["parqueosya"].send(objSend, true);
        return <div>cargando..</div>
    }

    return (
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={() => {
                var dataSend = {
                    component: "reporte",
                    type: "execute",
                    estado: "cargando",
                    tipo: props.tipo,
                    fecha_inicio: props.fecha_inicio,
                    fecha_fin: props.fecha_fin,
                    // param : 
                };
                props.state.socketReducer.session["parqueosya"].send(dataSend, true);
            }} >
                <img style={{
                    width: 20,
                    height: 20
                }} src={refresh} className="" />
            </button>
            <div className="row">
                {getTable()}
            </div>
        </div>
    )
}

const initStates = (state) => {
    return { state }
};

export default connect(initStates)(ReporteFechas);


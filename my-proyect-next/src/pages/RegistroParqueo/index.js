import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalPadre from '../../components/Modal/ModalPadre';
import FotoPicker from "../../components/FotoPicker";
import SInput from '../../components/SInput';
import AppParams from '../../Params';
import HorarioPicker from './HorarioPicker';
import MapaPicker from './MapaPicker';
import logosuccess from '../../svg/success.png'


class RegistroParqueo extends Component {
    constructor(props) {
        super(props);

        this.key = props.match.params.key
        this.state = {
            values: {
                nombre: {
                    label: "Nombre",
                    class: "col-md-12 mb-3",
                },
                telefono: {
                    label: "Teléfono",
                    class: "col-md-6 mb-3",
                },
                descripcion: {
                    label: "Descripción",
                    class: "col-md-6 mb-3",
                },
            }
        };
        this.data = {};
        this._inputs = {}
    }

    getValues() {
        return Object.keys(this.state.values).map((key) => {
            var obj = this.state.values[key];

            return <div className={obj.class}>
                <SInput
                    defaultValue={this.data[key]}
                    ref={(ref) => { this._inputs[key] = ref; }}
                    placeholder={obj.label}
                />
            </div>
        })
    }

    enviar() {
        var isValid = true;
        var data = {};
        Object.keys(this.state.values).map((key) => {
            if (!this._inputs[key].verify()) {
                isValid = false;
            }
            var text = this._inputs[key].getValue();
            data[key] = text;
        })
        if (!this._inputs["horario_atencion"].verify()) {
            isValid = false;
        }
        var horario_atencion = this._inputs["horario_atencion"].getValue();
        data["horario_atencion"] = horario_atencion;
        if (!this._inputs["direccion"].verify()) {
            isValid = false;
        }
        var direccion = this._inputs["direccion"].getValue();
        data["direccion"] = direccion;
        if (!isValid) {
            alert("error faltan datos")
            return;
        }
        if (this.data) {
            data = {
                ...this.data,
                ...data
            }
        }
        this.props.state.socketReducer.session[AppParams.socket.name].send({
            component: "parqueo",
            type: !this.key ? "registro" : "editar",
            data: data,
            estado: "cargando"
        }, true)
    }
    getEnviar() {
        if (this.props.state.parqueoReducer.estado == "cargando") {
            return (
                <div className="text-center">
                    <button type="button" className="btn btn-primary">Cargando...</button>
                </div>
            )
        }
        return (
            <div className="text-center"><button type="button" className="btn btn-primary"
                onClick={() => {
                    this.enviar();
                }}>
                {!this.key ? "Registrar" : "Editar"}
            </button>
            </div>
        )
    }
    getFoto() {
        if(!this.key) return <div/>
        return <div className="mb-3 text-center "  >
            <FotoPicker data={{
                component: "parqueo",
                type: "subirFoto",
                key: this.key
                // key: "dsdds"
            }} />
        </div>
    }
    render() {

        if (this.key) {
            var parqueos = this.props.state.parqueoReducer.data;
            if (!parqueos) {
                if (this.props.state.parqueoReducer.estado == "cargando") {
                    return <div className="spinner"></div>
                }
                if (this.props.state.parqueoReducer.estado == "error") {
                    return <div>{this.props.state.parqueoReducer.error}</div>
                }
                var objSend = {
                    component: "parqueo",
                    type: "getAll",
                    estado: "cargando",
                    //cabecera: "registro_administrador",
                    data: ""
                };
                this.props.state.socketReducer.session["parqueosya"].send(objSend, true)
                return <div />
            }
            this.data = parqueos[this.key];
        }
        if (this.props.state.parqueoReducer.estado == "exito" && this.props.state.parqueoReducer.type == "editar") {
            this.setState({ modal: "Editado con exito." })
            this.props.state.parqueoReducer.estado = ""
        }
        if (this.props.state.parqueoReducer.estado == "exito" && this.props.state.parqueoReducer.type == "registro") {
            Object.keys(this.state.values).map((key) => {
                var text = this._inputs[key].clear();
            })
            this._inputs["horario_atencion"].clear()
            this.setState({ modal: "Registro con exito." })
            this.props.state.parqueoReducer.estado = ""
        }
        // console.log(this.data)
        return (
            <>
                <div style={{
                    width: "100%",
                    flex: 1,
                }}>
                    <h1 className="text-center">{this.key?"Edicion ":"Registro"} de parqueo</h1>
                    {this.getFoto()}

                    <div className="row">
                        {this.getValues()}
                    </div>
                    <HorarioPicker ref={(ref) => { this._inputs["horario_atencion"] = ref }} data={this.data["horario_atencion"]} />
                    <MapaPicker ref={(ref) => { this._inputs["direccion"] = ref }} state={this.props.state} data={this.data["direccion"]} />
                    {this.getEnviar()}
                </div>
                <ModalPadre titulo={this.state.modal} show={this.state.modal} handleClose={() => {
                    this.setState({ modal: false })
                }}>
                    <div className="text-center">
                        <img style={{
                            width: 100,
                            height: 100,
                        }} src={logosuccess} className="img-thumbnail rounded-circle" />
                    </div>
                </ModalPadre>
            </>
        )

    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(RegistroParqueo);

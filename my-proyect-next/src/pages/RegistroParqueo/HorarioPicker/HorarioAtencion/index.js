import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HoraPicker from '../../../../components/HoraPicker';

export default class HorarioAtencion extends Component {
    constructor(props) {
        super(props);
        var temp = {};
        if (props.data) {
            temp[props.data.dia] = props.data;
        }
        this.data = temp;
        this.state = {
            horario: this.data,
        };
        this.refs_pickers = {}
    }
    clear() {
        delete this.state.horario[this.props.dia];
    }
    verify() {
        if (this.state.horario[this.props.dia]) {
            return true;
        } else {
            return false;
        }
    }
    getValue() {
        return this.state.horario[this.props.dia];
    }
    render() {
        return (
            <div style={{
                alignItems: "center"
            }} className="row mb-2">
                <div className="col-md-2 col-6">
                    <div>{this.props.dia}</div>
                </div>
                <div className="col-md-2 col-6">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={!(!this.state.horario[this.props.dia])} onChange={() => {
                            if (this.state.horario[this.props.dia]) {
                                delete this.state.horario[this.props.dia];
                            } else {
                                this.state.horario[this.props.dia] = {
                                    dia: this.props.dia,
                                    hora_inicio: this.refs_pickers[this.props.dia + "inicio"].value(),
                                    hora_fin: this.refs_pickers[this.props.dia + "fin"].value()
                                }
                            }
                            this.setState({ horario: this.state.horario });
                        }} />
                        {/* <label className="form-check-label" for="flexSwitchCheckChecked">Lunes</label> */}
                    </div>
                </div>
                <div className="col-md-2 col-6" style={{
                    display: !this.state.horario[this.props.dia] ? "none" : "flex"
                }}>
                    <HoraPicker ref={(ref) => { this.refs_pickers[this.props.dia + "inicio"] = ref }} defaultValue={!this.state.horario[this.props.dia] ? "09:00" : this.state.horario[this.props.dia].hora_inicio} onChange={(value) => {
                        if (this.state.horario[this.props.dia]) {
                            this.state.horario[this.props.dia]["hora_inicio"] = value;
                        }
                    }} />
                </div>
                <div className="col-md-2 col-6" style={{
                    display: !this.state.horario[this.props.dia] ? "none" : "flex"
                }}>
                    <HoraPicker ref={(ref) => { this.refs_pickers[this.props.dia + "fin"] = ref }} defaultValue={!this.state.horario[this.props.dia] ? "19:00" : this.state.horario[this.props.dia].hora_fin} onChange={(value) => {
                        if (this.state.horario[this.props.dia]) {
                            this.state.horario[this.props.dia]["hora_fin"] = value;
                        }
                    }} />
                </div>
            </div >
        );
    }
}

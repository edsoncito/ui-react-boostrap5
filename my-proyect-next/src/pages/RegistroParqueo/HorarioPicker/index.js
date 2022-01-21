import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HorarioAtencion from './HorarioAtencion';

export default class HorarioPicker extends Component {
    constructor(props) {
        super(props);
        this.data = !props.data ? {} : props.data;

        this.state = {
            dias: [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sabado",
                "Domingo",
            ]
        };
        this._ref = {};
    }
    getValue() {
        var arr = [];
        this.state.dias.map((val) => {
            if (this._ref[val].getValue()) {
                arr.push(this._ref[val].getValue());
            };
        })
        return arr;
    }
    clear() {
        this.state.dias.map((val) => {
            this._ref[val].clear();
        })
    }
    verify() {
        var arr = [];
        this.state.dias.map((val) => {
            if (this._ref[val].getValue()) {
                arr.push(this._ref[val].getValue());
            };
        })
        if (arr.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        return (
            <View>
                {this.state.dias.map((val) => {
                    return <HorarioAtencion dia={val} ref={(ref => { this._ref[val] = ref })} data={this.data[val]} />
                })}
            </View>
        );
    }
}

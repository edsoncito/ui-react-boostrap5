import React, { Component } from 'react';
import { View, Text } from 'react-native';

type tprops = {
    placeholder: String,
}

export default class SInput extends Component<tprops> {
    constructor(props) {
        super(props);
        this.value =  props.defaultValue;
        this.state = {
            value: props.defaultValue,
            error: false,
        };
    }
    getValue() {
        return this.value;
    }
    clear() {
        this.value = "";
        this.setState({ value: this.value })
    }
    verify() {
        if (!this.value) {
            this.setState({ error: true })
            return false;
        } else {
            this.setState({ error: false })
            return true;
        }
    }
    render() {
        return (
            <View style={{
                width: "100%",
                height: 40,
            }}>
                <input type="text" className="form-control" placeholder={this.props.placeholder}
                    value={this.state.value}
                    style={{
                        ...(this.state.error ? {
                            border: "1px solid #f00"
                        } : {
                            border: "1px solid #dedede"
                        })
                    }}
                    // defaultValue={}
                    onChange={(elm) => {
                        this.value = elm.currentTarget.value;
                        this.setState({ value: this.value })
                    }}
                />
            </View>
        );
    }
}

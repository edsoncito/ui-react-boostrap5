import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MisParqueos from './MisParqueos';
import Navbar from './Navbar';

export default class InicioP extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Navbar />
                <MisParqueos/>
            </View>
        );
    }
}

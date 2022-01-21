import React, { Component } from 'react';
import { Image } from 'react-native';

export default class SImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Image {...this.props} />
        );
    }
}

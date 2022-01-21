import React, { Component } from 'react';

export default class SImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <img src={!this.props.source.uri ? this.props.source.default : this.props.source.uri} style={{ ...this.props.style }} draggable="false" />
        );
    }
}

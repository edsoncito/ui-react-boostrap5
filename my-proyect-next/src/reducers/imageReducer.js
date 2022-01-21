import React, { Component } from 'react';
import SImage from '../components/SImage';
import AppParams from '../Params';
const delay = ms => new Promise(res => setTimeout(res, ms));

const initialState = {
    estado: "Not Found",
    IMAGES: {},
    getImage: (url, props) => {
        if (!initialState.IMAGES[url]) {
            var Imagen = createImage(url, props);
            initialState.IMAGES[url] = Imagen;
        }
        return initialState.IMAGES[url];
    }
}
const createImage = (url, props) => {
    return <SImage source={{
        uri: url + "?fecha=" + new Date().getTime(),
    }} style={{
        resizeMode: "contain",
        width: "100%",
        height: "100%",
        backgroundColor:"#fff",
        ...props
    }} />
}
export default (state, action) => {
    if (!state) return initialState
    if (action.component == "image") {
        switch (action.type) {
            case "cambio":
                cambio(state, action);
                break;
        }
        state.type = action.type;
        state.lastSend = new Date();
        state = { ...state };
    }
    return state;
}
const cambio = async (state, action) => {
    // fetch(action.url);
    state.IMAGES[AppParams.images.url + action.url] = createImage(AppParams.images.url+ action.url, { position: "absolute", })
    // alert("cambio imagen");
}

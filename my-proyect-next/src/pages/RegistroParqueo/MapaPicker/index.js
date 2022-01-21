import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MiMarker from '../../../components/MiMarker';
import AppParams from '../../../Params';

class MapaPicker extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.state = {
        };
    }
    getValue() {
        return this.props.state.locationGoogleMapReducer.markerUbicacion;
    }
    verify() {
        if (this.props.state.locationGoogleMapReducer.markerUbicacion) {
            return true;
        }
        return false;
    }
    render() {
        var lati = -17.7799998333333332
        var longi = -63.180598333333336

        if (this.props.data) {
            lati = this.data.latitude;
            longi = this.data.longitude;
        }
        return (
            <div className="mb-3">
                <h3 >Dirección Fisica</h3>
                <div style={{
                    height: 450,
                    width: '100%',
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyAt-U-cFcg5QNfPAvQW5YWT1d1SbEJFNuM" }}
                        options={{
                            gestureHandling: "cooperative"
                        }}
                        defaultCenter={{
                            lat: lati,
                            lng: longi
                        }}
                        onGoogleApiLoaded={(map) => {

                            //alert(objValores.direccion.value.latitude)
                            var region = {
                                latitude: lati,
                                longitude: longi
                            }
                            this.props.state.socketReducer.session[AppParams.socket.name].send({
                                component: "locationGoogle",
                                type: "geocode",
                                data: region,
                                estado: "cargando"
                            }, true);
                        }}
                        onDragEnd={(map) => {
                            var latitude = map.center.lat();
                            var longitude = map.center.lng();
                            var region = {
                                latitude,
                                longitude
                            }
                            this.props.state.socketReducer.session[AppParams.socket.name].send({
                                component: "locationGoogle",
                                type: "geocode",
                                data: region,
                                estado: "cargando"
                            }, true);

                        }}
                        defaultZoom={14}>

                    </GoogleMapReact>
                    <div style={{
                        position: "absolute",
                        display: "flex",
                        width: 30,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: 20,
                    }}>
                        <MiMarker />
                    </div>
                    <div style={{
                        position: "absolute",
                        display: "flex",
                        width: "70%",
                        height: 50,
                        top: 4,
                        borderRadius: 8,
                        backgroundColor: "#fcfcfc",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }}>
                        <span>{this.props.state.locationGoogleMapReducer.markerUbicacion.direccion}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapaPicker;

import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SOrdenador from '../SOrdenador';
import refresh from '../../svg/refresh.svg'

export default class Graphic2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                "#006600",
                "#660000"
            ]
        };
    }

    getLine = ({ title, width, color }) => {
        return <View style={{
            alignItems: "center",
            height: "100%",
        }}>

            <View style={{
                flex: 1,
                // height: "100%",
                justifyContent: "flex-end",
            }}>
                <View style={{
                    width: 10,
                    height: width,
                    backgroundColor: color,
                    borderRadius: 100,
                }}>
                </View>
            </View>
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "#000",
                    fontSize: 10,
                }}>{title}</Text>
            </View>
        </View>
    }
    getLista = () => {
        var i = 0;
        var max = 0;
        var maxt = 0;
        return new SOrdenador({ data: this.props.data }).ordernarObject([
            { key: "vistas/tiempo", order: "desc", peso: 1 },
            { key: "vistas/vistas", order: "desc", peso: 1 },

        ]).map((key) => {
            if (i >= 10) {
                return <View />
            }

            var obj = this.props.data[key];
            if (i == 0) {
                if (obj.vistas) {
                    max = obj.vistas.vistas;
                    maxt = obj.vistas.tiempo;
                }
            }
            i++;
            var pocent = 0;
            var tiempo = 0;
            var pocentTime = 0;
            var vistas = 0;
            if (obj.vistas) {
                vistas = obj.vistas.vistas;
                tiempo = obj.vistas.tiempo;
                pocent = (obj.vistas.vistas / max) * 100;
                pocentTime = (obj.vistas.tiempo / maxt) * 100;
            }
            return <View style={{
                width: 80,
                margin: 4,
                height: "100%",
                // backgroundColor: "#000",
            }}>
                <View style={{
                    flex: 1,
                    width: "100%",
                    flexDirection: "row",
                    // height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {this.getLine({ title: "(" + vistas.toFixed(0) + ")", width: pocent + "%", color: this.state.colors[0] })}
                    {this.getLine({ title: "(" + tiempo.toFixed(0) + ")", width: pocentTime + "%", color: this.state.colors[1] })}
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.history.push("/perfilParqueo/" + obj.key)
                }}>
                    <Text style={{
                        // textDecorationLine: "underline",
                        color: "#000033",
                        fontSize: 16,
                    }}>{obj.nombre}</Text>
                </TouchableOpacity>
            </View>

        })
    }
    render() {
        return (
            <View style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                    {/* <Text style={{
                        color: "#fff"
                    }}>Progreso</Text> */}
                    {
                        this.getLista()
                    }
                    <View style={{
                        position: "absolute",
                        top: 0,
                        right: 10,
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: "#000066",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 4,
                            }}
                            onPress={() => {
                                if (this.props.reload) {
                                    this.props.reload();
                                }
                            }} >
                            <img style={{
                                width: 20,
                                height: 20
                            }} src={refresh} className="" />
                        </TouchableOpacity>
                        <View style={{
                            marginLeft: 10,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 4,
                                backgroundColor: this.state.colors[0]
                            }}></View>
                            <Text>VISTAS</Text>
                        </View>
                        <View style={{
                            marginLeft: 10,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 4,
                                backgroundColor: this.state.colors[1]
                            }}></View>
                            <Text>TIEMPO EN PANTALLA (Segundos)</Text>
                        </View>

                    </View>
                    {/* {this.getLine({ width: "70%", color: "#8F775A" })} */}
                    {/* {this.getLine({ width: "33%", color: "#754D3D" })}
                    {this.getLine({ width: "18%", color: "#464940" })}
                    {this.getLine({ width: "70%", color: "#8F775A" })}
                    {this.getLine({ width: "37%", color: "#4E1C2B" })} */}
                </View>
            </View >
        );
    }
}

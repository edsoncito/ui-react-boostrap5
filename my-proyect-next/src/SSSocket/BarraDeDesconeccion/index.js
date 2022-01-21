import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as SSSocketNative from '../../SSSocket';
// import ContenidoBarra from './ContenidoBarra';
const delay = ms => new Promise(res => setTimeout(res, ms));

var lastPing = new Date().getTime();
const BarraDeDesconeccion = (props) => {
    // var _SocketName = "clinica_nj";
    const [curtPing, setCurtPing] = React.useState("");

    var _SocketName = props.socketName;

    var SessionActual = SSSocketNative.getSession(_SocketName);
    if (!SessionActual) {
        return <div />;
    }
    var config = SessionActual.getConfig();
    const getEstado = () => {
        var backColor = "";
        if (SSSocketNative.getSession(_SocketName).isActivo()) {
            backColor = "#6f6"
        } else {
            backColor = "#f66"
        };
        return (
            <div style={{
                width: "2vh",
                height: "2vh",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#CCC",
                backgroundColor: backColor,
                justifyContent: "center",
                alignItems: "center",
            }}>

            </div>
        )
    }
    const HacerPing = async () => {
        var curTime = new Date().getTime();
        if (curTime - lastPing > 5000) {
            lastPing = new Date().getTime();
            SessionActual.ping();
        }
        setCurtPing(lastPing);

        await delay(5000);
        HacerPing();
    };

    const closeBar = () => {
        // Animated.spring(pan, { toValue: { x: 0, y: 0 }, speed: 1, }).start(() => {
        //     pan.flattenOffset();
        // });
    }
    if (!curtPing) {
        HacerPing();
    }
    return <div></div>
    // var heightBar = Dimensions.get("window").height * 0.035;
    // return (
    //     <>
    //         <div style={{
    //             backgroundColor:"#000",
    //             height: heightBar,
    //         }}>
    //         </div>
    //         <Animated.div
    //             style={{
    //                 backgroundColor: pan.y.interpolate({
    //                     inputRange: [0, Dimensions.get("window").height],
    //                     outputRange: [props.color, props.color + "EE"]
    //                 }),
    //                 height: pan.y.interpolate({
    //                     inputRange: [0, Dimensions.get("window").height],
    //                     outputRange: ["3%", "100%"]
    //                 }),
    //                 minHeight: heightBar,
    //                 borderBottomLeftRadius: pan.y.interpolate({
    //                     inputRange: [0, Dimensions.get("window").height],
    //                     outputRange: [0, 16]
    //                 }),
    //                 borderBottomRightRadius: pan.y.interpolate({
    //                     inputRange: [0, Dimensions.get("window").height],
    //                     outputRange: [0, 16]
    //                 }),
    //                 width: "100%",
    //                 position: Platform.OS == "web" ? "fixed" : "absolute",
    //                 // position: "absolute",
    //                 top:0,
    //                 left:0,
    //                 elevation: 99,
    //                 zIndex: 9999,
    //                 overflow: "hidden",
    //                 // transform: [ { translateY: pan.y }]
    //             }}
    //             {...panResponder.panHandlers}
    //         >
    //             <div
    //                 style={{
    //                     position: "absolute",
    //                     bottom: heightBar,
    //                     width: "100%",
    //                     height: (Dimensions.get("window").height * 0.9) - heightBar,
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     elevation: 999,
    //                     zIndex: 999,

    //                 }}>
    //                 <ContenidoBarra closeBar={closeBar} />
    //             </div>

    //             <div style={{
    //                 width: "100%",
    //                 position: "absolute",
    //                 bottom: 0,
    //                 flexDirection: "row",
    //             }}>
    //                 <div style={{
    //                     // flex: 1,
    //                     height: "100%",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     flexDirection: "row",
    //                     marginStart: 5
    //                 }}>
    //                     <Text style={{ color: "#CCC", marginRight: 8, fontSize: Dimensions.get("window").height * 0.02 }}>{props.socketName}</Text>
    //                     {getEstado()}
    //                 </div>
    //                 <div style={{
    //                     height: "100%",
    //                     flex: 1,
    //                     justifyContent: "space-around",
    //                     alignItems: "center",
    //                     flexDirection: "row",
    //                 }}>
    //                     <Text style={{ color: "#CCC", fontSize: Dimensions.get("window").height * 0.0 }}>{(Platform.OS == "web" ? (config.web.ip) : (config.native["ip"] + ":" + config.native["puerto"]))}</Text>
    //                     <Text style={{ color: "#CCC", fontSize: Dimensions.get("window").height * 0.02 }}>Ping: {SessionActual.getLastPing()}</Text>
    //                 </div>
    //             </div>
    //         </Animated.div>
    //     </>
    // )
}
const initStates = (state) => {
    return { state }
};

export default connect(initStates)(BarraDeDesconeccion);

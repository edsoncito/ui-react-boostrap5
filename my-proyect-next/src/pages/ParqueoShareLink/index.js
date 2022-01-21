import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Logo from '../../svg/logo.svg'

export default class ParqueoShareLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone debe ir primero porque su UA tambien contiene "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.servisofts.parqueosya";
            return "Android";
        }

        if (/iPad|iPhone|iPod|OS/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/bo/app/parqueos-ya/id1569827078";
            return "iOS";
        }

        return userAgent;
    }
    render() {
        return (
            <View>

                <div style={{
                    display: "flex",
                    background: "#fafafa",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        margin: 20
                    }}>
                        <img className="img-fluid" src={Logo} width={500} alt={"logo"} />
                        <div style={{
                            justifyContent: "center",
                            display: "flex",
                        }}>
                            <Text> {this.getMobileOperatingSystem()} </Text>
                        </div>
                    </div>

                </div>
            </View>
        );
    }
}

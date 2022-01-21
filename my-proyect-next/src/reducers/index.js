import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import usuarioReducer from './usuarioReducer';
import locationGoogleMapReducer from './locationGoogleMapReducer';
import parqueoReducer from './parqueoReducer';
import cabeceraDatosReducer from './cabeceraDatosReducer';
import publicidadReducer from './publicidadReducer';
import imageReducer from './imageReducer';
import reporteReducer from './reporteReducer';
import callCenterReducer from './callCenterReducer';
import parqueoPropietarioReducer from './parqueoPropietarioReducer';
import parqueoPReducer from './parqueoPReducer';

export default combineReducers({
    cabeceraDatosReducer,
    socketReducer,
    usuarioReducer,
    locationGoogleMapReducer,
    parqueoReducer,
    publicidadReducer,
    imageReducer,
    reporteReducer,
    callCenterReducer,
    parqueoPropietarioReducer,
    parqueoPReducer
});
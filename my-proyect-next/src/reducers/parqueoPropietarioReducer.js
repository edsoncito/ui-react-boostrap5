const initialState = {
    estado: false,
    data: {}
}

export default (state, action) => {
    if (!state) {
        return initialState;
    }

    if (action.component == "propietario") {
        switch (action.type) {
            case "getAll":
                getAll(state, action);
                break;
            case "registrar":
                registrar(state, action);
                break;
            case "eliminar":
                eliminar(state, action);
                break;
        }
        state = { ...state };
    }
    return state;
}

const getAll = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data[action.key_parqueo] = action.data
    }
}

const registrar = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (state.data[action.data.key_parqueo]) {
            state.data[action.data.key_parqueo][action.data.key_usuario] = action.data
        }
    }
}

const eliminar = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (state.data[action.key_parqueo]) {
            delete state.data[action.key_parqueo][action.key_usuario]
        }
    }
}
const initialState = {
    estado: false,
    data: false,
}
export default (state, action) => {
    if (!state) return initialState
    if (action.component == "parqueo") {
        state.type = action.type;
        switch (action.type) {
            case "registro":
                registro(state, action);
                break;
            case "getAll":
                getAll(state, action);
                break;
            case "editar":
                editar(state, action);
                break;
            case "cambiarEstado":
                cambiarEstado(state, action);
                break;
            case "eliminar":
                eliminar(state, action);
                break;
        }
        state = { ...state };
    }
    return state;
}

const registro = (state, action) => {
    console.log(action.estado)
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.lastRegistro = action.data;
        if (state.data) {
            state.data[action.data.key] = action.data
        }
    }
}

const cambiarEstado = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (state.data) {
            state.data[action.data.key] = action.data
        }
    }
}

const getAll = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data = action.data;
    }
}

const editar = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data[action.data.key] = action.data
    }
}

const eliminar = (state, action) => {
    state.estado = action.estado
    if (action.estado === "exito") {
        var key = action.key;
        delete state.data[key];
    }

};
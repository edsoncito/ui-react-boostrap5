const initialState = {
    estado: "",
    data: false,
}
export default (state, action) => {
    if (!state) return initialState
    if (action.component == "problema") {
        state.type = action.type;
        switch (action.type) {
            
            case "getAll":
                getAll(state, action);
                break;
            case "cambiarEstado":
                cambiarEstado(state, action);
                break;
            
        }
        state = { ...state };
    }
    return state;
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
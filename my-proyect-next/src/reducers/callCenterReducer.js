const initialState = {
    estado: false,
    dataSugerencia: false,
    dataProblema: false,
    dataContactate: false,
}

export default (state, action) => {
    if (!state) {
        return initialState;
    }

    if (action.component == "callCenter") {
        switch (action.type) {
            case "getAllSugerencia":
                getAllSugerencia(state, action);
                break;
            case "getAllProblema":
                getAllProblema(state, action);
                break;
            case "getAllContactate":
                getAllContactate(state, action);
                break;
        }
        state = { ...state };
    }
    return state;
}

const getAllSugerencia = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.dataSugerencia = action.data
    }
}

const getAllProblema = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.dataProblema = action.data
    }
}
const getAllContactate = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.dataContactate = action.data
    }
}
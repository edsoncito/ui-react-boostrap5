const initialState = {
    estado: false,
    data: false
}

export default (state, action) => {
    if (!state) {
        return initialState;
    }

    if (action.component == "reporte") {
        switch (action.type) {
            case "execute":
                execute(state, action);
                break;
        }
        state = { ...state };
    }
    return state;
}

const execute = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data = action.data
    }
}
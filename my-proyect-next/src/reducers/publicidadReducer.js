const initialState = {
  estado: "",
  data: false,
};
export default (state, action) => {
  if (!state) return initialState;
  if (action.component == "publicidad") {
    state.type = action.type;
    switch (action.type) {
      case "subirFoto":
        subirFoto(state, action);
        break;
      case "getAll":
        getAll(state, action);
        break;
      case "editar":
        editar(state, action);
        break;
      case "eliminar":
        eliminar(state, action);
        break;
    }
    state = { ...state };
  }
  return state;
};

const subirFoto = (state, action) => {
  state.estado = action.estado;
  if (action.estado === "exito") {
    state.data[action.data.key] = action.data;

  }
};
const editar = (state, action) => {
  state.estado = action.estado;
  if (action.estado === "exito") {
    state.data[action.data.key] = action.data;

  }
};

const getAll = (state, action) => {
  state.estado = action.estado;
  if (action.estado === "exito") {
    state.data = action.data;
  }
};

const eliminar = (state, action) => {
  state.estado = action.estado
  if (action.estado === "exito") {
    var key = action.key;
    delete state.data[key];
  }

};

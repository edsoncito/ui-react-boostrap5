import React from "react";
import { connect } from 'react-redux';

var cabecera = "registro_administrador";
const RegistroAdministrador = (props) => {

  const [objValores, setObjValores] = React.useState({
    nombres: {
      value: "",
      error: false,
      nameDb: "Nombres"
    },
    apellidos: {
      value: "",
      error: false,
      nameDb: "Apellidos"
    },
    correo: {
      value: "",
      error: false,
      nameDb: "Correo"
    },
    telefono: {
      value: "",
      error: false,
      nameDb: "Telefono"
    },
    pass: {
      value: "",
      error: false,
      nameDb: "Password"
    },
  });
  const [Accion, setAccion] = React.useState(false);

  const valorID = props.match.params.key
  // console.log(valorID)

  if (!Accion) {
    if (valorID) {
      var usuario = "";
      if (props.state.usuarioReducer.data[valorID]) {
        usuario = props.state.usuarioReducer.data[valorID];
      }
      Object.keys(objValores).map((key) => {
        console.log(usuario[objValores[key].nameDb])
        objValores[key].value = !usuario[objValores[key].nameDb] ? "" : usuario[objValores[key].nameDb].dato;

      })
      setObjValores({ ...objValores });
      setAccion("Editar")
      return <div />
    } else if (!valorID) {
      setAccion("Crear")
    }
  }

  if (!props.state.cabeceraDatosReducer.data[cabecera]) {
    if (props.state.cabeceraDatosReducer.estado == "cargando") {
      return <div className="spinner"></div>
    }
    var objSend = {
      component: "cabeceraDato",
      type: "getDatoCabecera",
      estado: "cargando",
      cabecera: cabecera
    }
    props.state.socketReducer.session["parqueosya"].send(objSend, true)
  }
  var datosCabecera = props.state.cabeceraDatosReducer.data[cabecera];

  const registro = () => {
    var objToSend = {};
    var exito = true;

    for (const key in objValores) {
      if (!objValores[key].value || objValores[key].value.lenth <= 0) {
        objValores[key].error = true;
        exito = false;
      } else {
        objValores[key].error = false;
        objToSend[key] = objValores[key].value
      }
    }

    setObjValores({ ...objValores });

    const getKeyDato = (keyDescripcion) => {
      var key = "undefined"
      // var cabeceras = cabecera;
      for (let i = 0; i < datosCabecera.length; i++) {
        const obj = datosCabecera[i];
        if (obj.dato.descripcion == keyDescripcion) {
          return obj;
        }
      }
      return {
        key
      }
    }

    var jsonFinal = [];
    Object.keys(objToSend).map((key) => {
      switch (key) {
        case "nombres":
          jsonFinal.push({
            dato: getKeyDato("Nombres"),
            data: objToSend[key]
          })
          break;
        case "apellidos":
          jsonFinal.push({
            dato: getKeyDato("Apellidos"),
            data: objToSend[key]
          })
          break;
        case "correo":
          jsonFinal.push({
            dato: getKeyDato("Correo"),
            data: objToSend[key]
          })
          break;
        case "telefono":
          jsonFinal.push({
            dato: getKeyDato("Telefono"),
            data: objToSend[key]
          })
          break;
        case "pass":
          jsonFinal.push({
            dato: getKeyDato("Password"),
            data: objToSend[key]
          })
          break;
      }
    })

    if (exito) {
      if (Accion == "Crear") {
        var objSend = {
          component: "usuario",
          type: "registro",
          estado: "cargando",
          cabecera: cabecera,
          data: jsonFinal
        }
        props.state.socketReducer.session["parqueosya"].send(objSend, true)
      } else if (Accion == "Editar") {
        var objSend = {
          component: "usuario",
          type: "insertarDato",
          estado: "cargando",
          cabecera: cabecera,
          data: jsonFinal,
          key_usuario: valorID
        }
        props.state.socketReducer.session["parqueosya"].send(objSend, true)
      }
    } else {
      alert("falta datos")
    }
    return (
      <div />
    )
  }

  if (props.state.usuarioReducer.estado === "exito"
    && (props.state.usuarioReducer.type === "insertarDato"
    )) {
    props.state.usuarioReducer.estado = ""
    alert("Registrado Editado")
    return <div />
  }
  if (props.state.usuarioReducer.estado === "exito"
    && (props.state.usuarioReducer.type === "registro"
    )) {
    props.state.usuarioReducer.estado = ""
    alert("Registrado con exito!")
    return <div />
  }

  return (
    <>
      <h1 className="text-center">Registro Administrador</h1>
      <form>
        <div className="card mb-3">
          <div className="card-body">
            <div className="mb-3">
              <label class="form-label">Nombres</label>
              <input
                type="text"
                className="form-control"
                id="inputNombres"
                placeholder="Nombres"
                value={objValores.nombres.value}
                required
                // error={objErrores}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.nombres.value = texto;
                  setObjValores({ ...objValores });
                  // console.log(objValores.nombres.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label class="form-label">Apellidos</label>
              <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos"
                value={objValores.apellidos.value}
                // error={objErrores}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.apellidos.value = texto;
                  setObjValores({ ...objValores });
                  // console.log(objValores.apellidos.value)
                }} />
              <div class="invalid-feedback">
                Please provide a valid city.
    </div>
            </div>
            <div className="mb-3">
              <label class="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="inputCorreoElectrónico" placeholder="Correo electrónico"
                value={objValores.correo.value}
                // error={objErrores}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.correo.value = texto;
                  setObjValores({ ...objValores });
                  // console.log(objValores.correo.value)
                }} />
            </div>
            <div className="mb-3">
              <label class="form-label">Teléfono</label>
              <input type="number" className="form-control" id="inputTelefono" placeholder="Teléfono"
                value={objValores.telefono.value}
                // error={objErrores}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.telefono.value = texto;
                  setObjValores({ ...objValores });
                  // console.log(objValores.telefono.value)
                }} />
            </div>
            <div className="mb-3">
              <label class="form-label">Contraseña</label>
              <input type="text" className="form-control" id="inputContraseña" placeholder="Contraseña"
                value={objValores.pass.value}
                // error={objErrores}
                onChange={(elm) => {
                  var texto = elm.currentTarget.value;
                  objValores.pass.value = texto;
                  setObjValores({ ...objValores });
                  // console.log(objValores.pass.value)
                }} />
            </div>
          </div>
          <div className="card-footer">
            {Accion == "Editar" ?
              <button type="button" className="btn btn-warning" onClick={() => { registro() }} >
                Editar
          </button>
              :
              <button type="button" className="btn btn-primary" onClick={() => { registro() }} >
                Registrar
            </button>
            }
          </div>
        </div>
      </form>
    </>
  );
};

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(RegistroAdministrador);
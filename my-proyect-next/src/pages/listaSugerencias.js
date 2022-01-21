import React from "react";
import { connect } from "react-redux";
import NavigationTable from "../components/NavigationTable";
import Table from "../components/Table";
import "../styles/table.css";

const ListaSugerencias = (props) => {
  const [Text, setText] = React.useState("");
  const [PagFinal, setPagFinal] = React.useState(6);
  const [ValorActual, setValorActual] = React.useState(0);


  const buscar = (data) => {
    if (typeof data != "object") {
      return Object.keys(data);
    }
    var lista_keys = Object.keys(data);
    var val = Text.trim() || "";
    // var arrPalabras = val.replaceAll(" ", "|");
    var arrPalabras = val.split(" ");
    var arr2 = [];
    lista_keys.map((key) => {
      var obj = data[key];
      var str = JSON.stringify(obj);
      var isValid = false;
      for (let i = 0; i < arrPalabras.length; i++) {
        const txtTest = arrPalabras[i];
        var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
        var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|})", "i");
        if (expreg.test(str) || expreg2.test(str)) {
          isValid = true;
        }
      }
      if (isValid) {
        arr2.push(key);
      }
    })
    return arr2;
  }

  var nroBtn = [];
  const pagination = (dataList) => {
    var tamanho = dataList.length;
    var nroBotones = Math.ceil(tamanho / 6);
    for (let index = 1; index <= nroBotones; index++) {
      nroBtn.push(index);
    }
    return dataList.slice(ValorActual, PagFinal);
  };

  const onClick = (valor) => {
    console.log(valor);
    var nro;
    if (valor > 1) {
      valor = valor - 1;
      nro = valor * 6;
    } else nro = 0;
    setValorActual(nro);
    setPagFinal(nro + 6);
  };


  const getLista = () => {

    var reducer = props.state.callCenterReducer;

    if (!reducer.dataSugerencia) {
      if (reducer.estado == "cargando") {
        return <div className="spinner"></div>;
      }
      if (reducer.estado == "error") {
        return <div>{reducer.error}</div>;
      }
      var objSend = {
        component: "callCenter",
        type: "getAllSugerencia",
        estado: "cargando",
        data: "",
      };
      props.state.socketReducer.session["parqueosya"].send(objSend, true);
      return <div />;
    }

    var data = reducer.dataSugerencia;

    return pagination(buscar(data)).map((key) => {
      var obj = data[key];
      var options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      var date = new Date(obj.fecha_on);
      return (
        <>
          <tbody>
            <tr key={key}>
              <td style={{
                fontSize: 8,
                maxWidth: 80,
              }}>
                {key}
              </td>
              <td >{obj.descripcion}</td>
              <td> {new Intl.DateTimeFormat("es", options).format(date)}</td>
              <td> {obj.tipo}</td>
            </tr>
          </tbody>
        </>
      );
    });
  };

  return (
    <>
      <h3 className="text-center">Reporte de sugerencias</h3>

      <Table text={Text} setText={(texto) => {
        setText(texto)
      }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Mensaje</th>
            <th scope="col">Fecha On</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        {getLista()}
      </Table>

      <NavigationTable nroBtn={nroBtn} onClick={onClick} />

    </>
  );
};

const initStates = (state) => {
  return { state };
};

export default connect(initStates)(ListaSugerencias);

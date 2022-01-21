import React from "react";
import { connect } from "react-redux";
import NavigationTable from "../components/NavigationTable";
import Table from "../components/Table";
import "../styles/table.css";
import SOrdenador from "../components/SOrdenador";

const ListaContactate = (props) => {
  const [ValorActual, setValorActual] = React.useState(0);
  const [PagFinal, setPagFinal] = React.useState(7);

  var nroBtn = [];
  const pagination = (dataList) => {
    var tamanho = dataList.length;
    var nroBotones = Math.ceil(tamanho / 30);
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
      nro = valor * 7;
    } else nro = 0;
    setValorActual(nro);
    setPagFinal(nro + 7);
  };



  const getLista = () => {
    var reducer = props.state.callCenterReducer;

    if (!reducer.dataContactate) {
      if (reducer.estado == "cargando") {
        return <div className="spinner"></div>;
      }
      if (reducer.estado == "error") {
        return <div>{reducer.error}</div>;
      }
      var objSend = {
        component: "callCenter",
        type: "getAllContactate",
        estado: "cargando",
        data: "",
      };
      props.state.socketReducer.session["parqueosya"].send(objSend, true);
      return <div />;
    }

    var data = reducer.dataContactate;
    var lista = new SOrdenador({ data: data }).ordernarObject([
      { key: "fecha_on", order: "desc", peso: 1 },
    ]);
    return pagination(lista).map((key) => {
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
              <td >{obj.ci}</td>
              <td> {obj.nombre}</td>
              <td> {obj.correo}</td>
              <td> {obj.telefono}</td>
              <td> {obj.direccion}</td>
              <td> {obj.capacidad}</td>
              <td> {obj.departamento}</td>
              <td> {obj.horario_atencion}</td>
              <td> {new Intl.DateTimeFormat("es", options).format(date)}</td>
            </tr>
          </tbody>
        </>
      );
    });
  };

  return (
    <>
      <h3 className="text-center">Reporte de Contactos</h3>
      <Table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">CI</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Direccion</th>
            <th scope="col">Capacidad</th>
            <th scope="col">Departamento</th>
            <th scope="col">Horario atencion</th>
            <th scope="col">Fecha</th>
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

export default connect(initStates)(ListaContactate);
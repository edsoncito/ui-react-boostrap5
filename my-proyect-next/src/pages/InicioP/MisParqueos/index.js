import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalPadre from "../../../components/Modal/ModalPadre";
import NavigationTable from "../../../components/NavigationTable";
import Table from "../../../components/Table";
import "../../../styles/table.css";
import logosuccess from "../../../svg/success.png";
import logoexclamacion from "../../../svg/exclamacion.png";

const MisParqueos = (props) => {
    const [Modal, setModal] = React.useState(false);
    const [ValorActual, setValorActual] = React.useState(0);
    const [KeyDelete, setKeyDelete] = React.useState("");
    const [PagFinal, setPagFinal] = React.useState(7);

    if (!props.state.parqueoPReducer.data) {
        if (props.state.parqueoPReducer.estado == "cargando") {
            return <div className="spinner"></div>;
        }
        if (props.state.parqueoPReducer.estado == "error") {
            return <div>{props.state.parqueoPReducer.error}</div>;
        }
        var objSend = {
            component: "parqueoP",
            type: "getAll",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: "",
        };
        props.state.socketReducer.session["parqueosya"].send(objSend, true);
        return <div />;
    }

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
    };

    const keyEliminar = (key) => {
        setKeyDelete(key);
    };

    var nroBtn = [];
    const pagination = (dataList) => {
        var tamanho = dataList.length;
        var nroBotones = Math.ceil(tamanho / 7);
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

    const eliminar = (keyDel) => {
        var objSend = {
            component: "parqueo",
            type: "eliminar",
            estado: "cargando",
            key: keyDel,
        }
        //var gg =keyDel;

        //props.state.socketReducer.session["parqueosya"].send(objSend, true);
    }

    const getLista = () => {
        var data = props.state.parqueoPReducer.data;
        return pagination(Object.keys(data)).map((key) => {
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
            // console.log(obj)
            return (
                <>
                    <tbody>
                        <tr
                            key={key}
                            onClick={() => {
                                //props.history.push("/perfilParqueo/" + key)
                            }}
                        >
                            <td
                                style={{
                                    fontSize: 8,
                                    maxWidth: 80,
                                }}
                            >
                                {key}
                            </td>

                            <td> {new Intl.DateTimeFormat("es", options).format(date)}</td>
                            <td>{obj.nombre}</td>
                            <td>{obj.descripcion}</td>
                            <td>{obj.direccion.direccion}</td>
                            <td>
                                <div
                                    style={{
                                        width: 10,
                                        height: 10,
                                        background: !obj.estado_disponible ? "#900" : "#090",
                                        borderRadius: 100,
                                    }}
                                ></div>
                            </td>
                            <td>
                                <div
                                    style={{
                                        width: 115,
                                        textAlign: "center",
                                    }}
                                >
                                    <Link
                                        to={{
                                            pathname: `/registroParqueoP/${key}`,
                                            // state: { detail: datos }
                                        }}
                                        title="Editar"
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        <span
                                            className="glyphicon glyphicon-edit"
                                            aria-hidden="true"
                                        >
                                            <i style={{ color: "#fff" }} className="fas fa-edit"></i>
                                        </span>
                                    </Link>
                                    <Link
                                        to={{
                                            //pathname: `/personas/sds/edit`,
                                            pathname: `/perfilParqueoP/${key}`,
                                            // state: { detail: datos }
                                        }}
                                        title="Perfil"
                                        className="btn btn-warning btn-sm me-2"
                                        style={{ background: "#0B1946", borderColor: "#0B1946" }}
                                    >
                                        <span
                                            className="glyphicon glyphicon-edit"
                                            aria-hidden="true"
                                        >
                                            <i
                                                style={{ color: "#fff" }}
                                                className="fas fa-address-card"
                                            ></i>
                                        </span>
                                    </Link>
                                    {/* <button
                    //onClick={showModal }
                    onClick={() => {
                      keyEliminar(key)
                      showModal()
                    }
                    }
                    title="delete"
                    className="btn btn-danger btn-sm"
                  >
                    <span
                      className="glyphicon glyphicon-edit"
                      aria-hidden="true"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </span>
                  </button> */}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </>
            );
        });
    };

    return (
        <>
            <div className="row">
                <div className={"col-4"}>
                    <Link className="btn btn-primary mb-2" to="./registroParqueo">
                        Agregar
                    </Link>
                </div>
                <div className={"col-4"}>
                    <h3 className="text-center">Lista Parqueos</h3>
                </div>
                <div className={"col-4"}>
                    <NavigationTable nroBtn={nroBtn} onClick={onClick} />
                </div>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">fecha_on</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                {getLista()}
            </Table>

            <ModalPadre
                titulo="ELIMINAR PARQUEO"
                show={Modal}
                handleClose={hideModal}
            >
                <div className="text-center">
                    <img
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        src={logoexclamacion}
                        className="img-thumbnail rounded-circle"
                    />
                    <br />
                    <p>¿Está seguro que desea eliminar el registro?</p>
                    <button
                        type="button"
                        class="btn btn-success"
                        style={{ width: 50 }}
                        onClick={() => eliminar(KeyDelete)}
                    >
                        SÍ
                    </button>
                    <button
                        type="button"
                        class="btn btn-danger"
                        style={{ width: 50, marginLeft: 10 }}
                        onClick={hideModal}
                    >
                        NO
                    </button>
                </div>
            </ModalPadre>

            {/*<ModalPadre titulo="REGISTRO EXITOSO" show={Modal} handleClose={hideModal}>
        <div className="text-center">
          <img style={{
            width: 100,
            height: 100,
          }} src={logosuccess} className="img-thumbnail rounded-circle" />
        </div>

        </ModalPadre>*/}
        </>
    );
};

const initStates = (state) => {
    return { state };
};

export default connect(initStates)(MisParqueos);

import React from 'react';
import { Link } from "react-router-dom";
import NavigationTable from './NavigationTable';

const Table = (props) => {

    const [PagFinal, setPagFinal] = React.useState(6);
    const [ValorActual, setValorActual] = React.useState(0);
    const [Text, setText] = React.useState("");

    let nroBtn = [];
    const pagination = (dataList) => {
        var tamanho = dataList.length;
        var nroBotones = Math.ceil(tamanho / 6);
        for (let index = 1; index <= nroBotones; index++) {
            nroBtn.push(index);
        }
        return dataList.slice(ValorActual, PagFinal);
    };

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

    const cabecera = () => {
        var headers = props.headers;
        return headers.map((ob) => {
            var valor = ob.label
            return (
                <th scope="col">{valor}</th>
            )
        })
    }

    const getLista = () => {
        var data = props.data;
        var headers = props.headers;

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
            // console.log(obj)
            const datos = headers.map((ob) => {
                var dato = obj[ob.dbName];
                if (ob.dbName == "key") {
                    return <td style={{
                        fontSize: 8,
                        maxWidth: 120,
                    }}>
                        {key}
                    </td>
                }
                if (ob.dbName == "direccion") {
                    return <td>
                        {dato.direccion}
                    </td>
                }
                if (ob.dbName == "estado") {
                    return <td>
                        <div
                            style={{
                                width: 10,
                                height: 10,
                                background: !obj.estado_disponible ? "#900" : "#090",
                                borderRadius: 100,
                            }}>
                        </div>
                    </td>
                }
                if (ob.dbName == "fecha_on") {
                    return <td> {new Intl.DateTimeFormat("es", options).format(date)}</td>
                }
                if (ob.dbName == "accion") {
                    return <td>
                        <div
                            style={{
                                width: 115,
                                textAlign: "center",
                            }}>
                            <Link
                                to={{
                                    pathname: `/registroParqueo/${key}`,
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
                                    pathname: `/perfilParqueo/${key}`,
                                    // state: { detail: datos }
                                }}
                                title="Perfil"
                                className="btn btn-warning btn-sm me-2"
                                style={{ background: "#0B1946", borderColor: "#0B1946" }}>

                                <span
                                    className="glyphicon glyphicon-edit"
                                    aria-hidden="true">
                                    <i
                                        style={{ color: "#fff" }}
                                        className="fas fa-address-card"
                                    ></i>
                                </span>
                            </Link>
                            <button
                                //onClick={showModal }
                                onClick={() => {
                                    if(ob.onDelete){
                                        ob.onDelete(key)
                                    }
                                }}
                                title="delete"
                                className="btn btn-danger btn-sm"
                            >
                                <span
                                    className="glyphicon glyphicon-edit"
                                    aria-hidden="true"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </button>
                        </div>
                    </td>
                }
                return <td>
                    {dato}
                </td>
            })
            return (
                <>
                    <tbody>
                        <tr key={key}
                            onClick={() => {
                                // props.history.push("/perfilParqueo/" + key)
                            }}>
                            {datos}

                        </tr>
                    </tbody>
                </>
            );
        });
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

    return (
        <>
            <div className="mb-3">
                {/* <label class="form-label">Contraseña</label> */}
                <input type="text" className="form-control" id="inputContraseña" placeholder="Buscar"
                    value={Text}
                    onChange={(elm) => {
                        var texto = elm.currentTarget.value;
                        setText(texto);
                    }} />
            </div>
            <div className="card mb-3 table-responsive" style={{ borderTop: "3px solid #343d46" }}>
                <table className="table mb-0 table-bordered table-hover table-responsive">
                    {/* {props.children} */}
                    <thead>
                        <tr>
                            {cabecera()}
                        </tr>
                    </thead>

                    {getLista()}

                </table>
            </div>
            <NavigationTable nroBtn={nroBtn}
                onClick={onClick}
            />
        </>

    )
}

export default Table;


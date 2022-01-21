import React from 'react';

const Table = (props) => {

    return (
        <>
            <div className="mb-3">
                {/* <label class="form-label">Contraseña</label> */}
                <input autoComplete="off" type="text" className="form-control" id="inputContraseña" placeholder="Buscar"
                    value={props.text}
                    onChange={(elm) => {
                        var texto = elm.currentTarget.value;
                        props.setText(texto);
                    }} />
            </div>
            <div className="card mb-3 table-responsive" style={{ borderTop: "3px solid #343d46" }}>
                <table className="table mb-0 table-bordered table-hover table-responsive">
                    {props.children}
                </table>
            </div>
        </>

    )
}

export default Table;


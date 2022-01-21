import React from 'react';
import { connect } from 'react-redux';
// import './modal.css';

const ModalPadre = ({ titulo, handleClose, show, children, tamano }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    if (tamano == "large") {
        tamano = "modal-dialog modal-dialog-centered modal-lg"
    } else {
        tamano = "modal-dialog modal-dialog-centered"
    }

    return (
        < div className={showHideClassName} >
            {/* <section className="modal-main"> */}
            < div className={tamano}  >
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title text-secondary">{titulo}</p>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div >
            {/* </section> */}
        </div >
    );
};
const initStates = (state) => {
    return { state }
};

export default connect(initStates)(ModalPadre);


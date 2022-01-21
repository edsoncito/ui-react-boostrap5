import React from 'react'
import { connect } from 'react-redux';
import Logo from '../svg/logo.svg'

const delay = ms => new Promise(res => setTimeout(res, ms));

const CargaPage = (props) => {


  const depuesDeLaCarga = async () => {
    await delay(1500);
    console.log("Waited");
    //aqui se conecta con el socket en index principal
    if (!props.state.usuarioReducer.usuarioLog) {
      props.history.push("/login");
    } else {
      props.history.push("/inicio");
    }
  };
  depuesDeLaCarga()

  return (
    <>
      <div style={{
        display: "flex",
        background: "#fafafa",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          margin: 20
        }}>
          <img className="img-fluid" src={Logo} width={500} alt={"logo"} />
          <div style={{
            justifyContent: "center",
            display: "flex",
          }}>
            <div className="spinner">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(CargaPage);

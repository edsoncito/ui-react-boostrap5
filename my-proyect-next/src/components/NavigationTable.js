import React from 'react';
import { connect } from 'react-redux';

const NavigationTable = (props) => {
  const [select, setSelect] = React.useState(1);
  var valor = props.nroBtn
  // console.log('dsd ' + valor)

  const getitem = () => {
    return valor.map((nro) => {
      console.log(nro)
      var isSelec = false;
      if (nro == select) {
        isSelec = true;
      }
      return (
        <li className="page-item" onClick={() => {
          props.onClick(nro)
          setSelect(nro)
        }}><a style={{
          backgroundColor: (!isSelec ? "transparent" : "#00000033")
        }} className="page-link">{nro}</a></li>
      )
    })
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <a class="page-link" aria-label="Previous" style={{ cursor: "pointer" }} onClick={() => {
            if (select - 1 <= 0) {
              return;
            }
            props.onClick(select - 1)
            setSelect(select - 1)
          }}>
            <span aria-hidden="true">&laquo;</span>
          </a>
          {getitem()}
          <a class="page-link" aria-label="Next" style={{ cursor: "pointer" }} onClick={() => {
            if (select + 1 > valor.length) {
              return;
            }
            props.onClick(select + 1)
            setSelect(select + 1)
          }}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </ul>
      </nav>
    </>
  )
}

const initStates = (state) => {
  return { state }
};

export default connect(initStates)(NavigationTable);


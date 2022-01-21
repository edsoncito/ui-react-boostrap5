import React from "react";
import Navbar from "./Navbar";
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../svg/logo.svg"
import ayuda from "../svg/fi-rr-interrogation.svg"
import { connect } from 'react-redux'

const SideBar = (props) => {
  var auxSider = true;
  function menuSlice() {
    if (auxSider) {
      document.getElementById("sidebar").classList.add("active");
      document.getElementById("content").classList.add("active");
      // alert("cierra")
      auxSider = false;
    } else {
      document.getElementById("sidebar").classList.remove("active");
      document.getElementById("content").classList.remove("active");
      // alert("abre")
      auxSider = true;
    }
  }

  if (!props.state.usuarioReducer.usuarioLog) {
    window.location.href = "/";
    return <div />
  }

  const style = {
    fontSize: 14
  };

  return (
    <div className="wrapper">
      <header>
        <Navbar menuSlice={menuSlice} />
      </header>
      <main>
        <nav id="sidebar" className="">
          <div className="sidebar-header">
            <img src={logo} />
          </div>
          <ul className="list-unstyled components">
            {/* <p>MODULOS</p> */}
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/inicio">
                Inicio
              </NavLink>
            </li>
            {/* <li>
              <a style={style} href="#homeSubmenu" class="dropdown-toggle" data-bs-toggle="collapse" aria-expanded="false" aria-controls="homeSubmenu" data-bs-target="#homeSubmenu">
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li className="nav-item">
                  <NavLink style={style} className="nav-link active" to="/inicio">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={style} className="nav-link active" to="/perfil">
                    perfil
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/registroParqueo">
                Registro Parqueo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaParqueo">
                Lista Parqueo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/mapaParqueo">
                Mapa Parqueo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/registroAdministrador">
                Registro Administrador
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/usuarioAdministrador">
                Usuarios Administrador
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/registroAdministradorParqueo">
                Registro Administrador Parqueo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/usuarioAdministradorParqueo">
                Usuarios Administrador Parqueo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/publicidadParqueo">
                Publicidad
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/reportes">
                Reportes
              </NavLink>
            </li>
            { /*<li className="nav-item">
              <NavLink className="nav-link active" to="/perfilUsuario">
                Perfil Usuario
              </NavLink>
  </li>*/}
            <hr />
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaSugerencias">
                <span className="glyphicon glyphicon-edit" aria-hidden="true">
                  <i className="fas fa-envelope-open"></i>
                </span> Buzón sugerencias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaProblemas">
                <span className="glyphicon glyphicon-edit" aria-hidden="true"><i className="fas fa-exclamation-circle"></i></span> Reporte de problemas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={style} className="nav-link " to="/listaContactate">
                <span className="glyphicon glyphicon-edit" aria-hidden="true"><i className="fas fa-exclamation-circle"></i></span> Reporte de contactate
              </NavLink>
            </li>
          </ul>
        </nav>
        <div id="content" className="">
          {/* <h1>aqui va el childrend</h1> */}
          {props.childrenHijo}
        </div>
      </main>
    </div>
  );
};



const initStates = (state) => {
  return { state }
};

export default connect(initStates)(SideBar);

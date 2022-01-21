import React from 'react'
import { NavLink, } from 'react-router-dom';
import AppParams from '../../Params';
import logo from "../../svg/profile.jpg"

const Navbar = (props) => {

    const cerrarSession = () => {
        localStorage.removeItem(AppParams.storage.urlLog);
        window.location.href = "/";
        // props.history.push("/");
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg px-3 navbar-dark" style={{
                backgroundColor: "#050230"
            }}>
                <div className="container-fluid" style={{ justifyContent: "none" }}>
                    ƒ                    <a className="nav-link text-light" href="#">ParqueosYa.com</a>
                    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                    <ul className="my-auto ms-auto">
                        <div className="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                                style={{ width: 35, height: 35 }}>
                                <img style={{
                                    width: 35,
                                    height: 35
                                }} className="rounded-circle" src={logo} />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                {/* <li><a className="dropdown-item" >admin@gmail.com</a></li>
                                <div style={{
                                    height: 1,
                                    width: "100%",
                                    background: "#ccc"
                                }}></div> */}
                                <li><a className="dropdown-item" onClick={() => cerrarSession()}>Cerrar sesion</a></li>
                            </ul>
                        </div>
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
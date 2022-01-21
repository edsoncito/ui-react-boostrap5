import React, { Component } from 'react';
import './assets/css/animate.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/offcanvas.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
import './assets/css/swiper.min.css'
import "./assets/favicon/site.webmanifest"
{/* <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#000083">// import './assets/js/jquery.mim.js' */ }
{/* <script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/swiper.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/jquery.waypoints.min.js"></script>
<script src="assets/js/easy-waypoint-animate.js"></script>
<script src="assets/js/scripts.js"></script>
<script src="assets/js/carousel-features1.js"></script>
<script src="assets/js/carousel-appscreen1.js"></script>
<script src="assets/js/carousel-testimonial1.js"></script> */}


export default class RootPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<div style={{ width: "100%", height: "100vh", padding: 0, margin: 0, position: "fixed", top: 0, overflow: 'auto', }} >
            <div id="section-preloader">
                <div className="boxes">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p>CARGANDO . . .</p>
            </div>
            <nav className="navbar-1 navbar navbar-expand-lg">
                <div className="container navbar-container">
                    <a className="navbar-brand" href="index.html"> <img src={"/imagestp/logo.png"} alt="ParqueosYa" /></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#section-features1" className="nav-link scroll-down">Características</a>
                            </li>
                            <li className="nav-item">
                                <a href="#section-download1" className="nav-link scroll-down">Descarga</a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://parqueosya.com/login" className="btn-1 shadow1 style3 bgscheme">INGRESO PARQUEOS</a>
                    <button type="button" id="sidebarCollapse" className="navbar-toggler active" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"
                        aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div id="section-slider1">
                <div className="swiper-container">
                    <div className="swiper-wrapper d-none">
                        <div className="swiper-slide">
                            <div className="slider-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="left col-12 col-sm-12 col-md-7">
                                            <h1 className="className" data-animation="fadeInLeft">Todos los parqueos en la palma de
                                                tu mano.</h1>
                                            <p className="className" data-animation="fadeInLeft">Dejá de dar vueltas y encontrá tu
                                                parqueo con nuestra app GRATUITA.</p>
                                            <ul>
                                                <li><a href="https://apps.apple.com/bo/app/parqueos-ya/id1569827078"><img
                                                    className="img-fluid className" src="/imagestp/img-appstore.png"
                                                    alt="" data-animation="fadeInUp" /></a></li>
                                                <li><a
                                                    href="https://play.google.com/store/apps/details?id=com.servisofts.parqueosya"><img
                                                        className="img-fluid className" src="/imagestp/img-googleplay.png"
                                                        alt="" data-animation="fadeInUp" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="right className col-12 col-sm-12 col-md-5" data-animation="fadeInRight">
                                            <img className="img-fluid" src={"/imagestp/img-1.png"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section-features1">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <h6 className="clscheme">Te facilitamos la vida</h6>
                            <h2>Parqueos en la palma de tu mano</h2>
                        </div>
                        <div className="col-xs-12 col-md-8">
                            <div className="swiper-container features1">
                                <div className="swiper-wrapper row">
                                    <div className="col-xs-12 col-md-6">
                                        <div className="item">
                                            <img src="/imagestp/img-icon1.png" alt=""/>
                                            <h3>Todos los parqueos</h3>
                                            <p>Encuentra todos los parqueos en nuestra app.No pierdas tiempo buscando donde
                                            estacionar, los tendrás todos al alcance de tu mano.</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <div className="item">
                                            <img src="/imagestp/img-icon2.png" alt=""/>
                                            <h3>Información Detallada</h3>
                                            <p>No te pierdas ni un detalle y elige el mejor.Conoce la ubicación, horarios y
                                            capacidad de los parqueos cercanos a ti en nuestra lista disponible.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-wrap">
                <div id="section-features2">
                    <div className="container">
                        <div className="row">
                            <div className="left col-sm-12 col-md-6">
                                <div className="img-container">
                                    <img className="circleicon1 className" src={"/imagestp/img-circleicon1.png"}
                                        data-animation="fadeInUp" />
                                    <img className="img-fluid className" src={"/imagestp/img-2.png"} data-animation="fadeInLeft" />
                                </div>
                            </div>
                            <div className="right my-auto col-sm-12 col-md-6">
                                <h6 className="clscheme">Encuentra tu parqueo</h6>
                                <h2>Abre la App y listo</h2>
                                <p>En un vistazo todos los parqueos ante tus ojos elige el más conveniente y dirígete
                                    directamente hacía allá.
                                </p>
                                <a href="#section-download1" className="btn-2 shadow1 style3 bgscheme">DESCARGARLA AHORA</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-features2">
                    <div className="container">
                        <div className="row">
                            <div className="right my-auto col-sm-12 col-md-6">
                                <h6 className="clscheme">Explora nuestra lista</h6>
                                <h2>Todos los parqueos en un sólo lugar</h2>
                                <p>Si deseas puedes ver los parqueos disponibles en lista, explora los datos de cada uno y
                                    encuentra el que más te convenga.
                                </p>
                                <a href="#section-download1" className="btn-2 shadow1 style3 bgscheme">DESCARGARLA AHORA</a>
                            </div>
                            <div className="left col-sm-12 col-md-6">
                                <div className="img-container">
                                    <img className="circleicon1" src={"/imagestp/img-circleicon2.png"} alt=""
                                        data-animation="fadeInUp" />
                                    <img className="img-fluid" src={"/imagestp/img-3.png"} alt=""
                                        data-animation="fadeInRight" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section-download1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Descargála Gratis</h1>
                            <p>Dejá de dar vueltas en busca de parqueos</p>
                            <ul style={{
                                width: "100%",
                                height: "100%"
                            }}>
                                <li><a href="https://apps.apple.com/bo/app/parqueos-ya/id1569827078"><img
                                    className="img-fluid " src="/imagestp/img-appstore.png"
                                    alt="" /></a></li>
                                <li><a
                                    href="https://play.google.com/store/apps/details?id=com.servisofts.parqueosya"><img
                                        className="img-fluid " src="/imagestp/img-googleplay.png"
                                        alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section-footer">
                <div className="container">
                    <div className="footer-widget">
                        <div className="row">
                            <div className="left col-md-6">
                                <a href="index.html"><img src={"/imagestp/logo.svg"} style={{
                                    maxWidth: 200
                                }}
                                    alt="ParqueosYa" /></a>
                            </div>
                            <div className="right col-md-6">
                                <div className="social-links">
                                    <a href="https://www.facebook.com/parqueosyabolivia"><i
                                        className="fa fa-facebook fa-lg"></i></a>
                                    <a href="https://www.instagram.com/parqueosya/"><i className="fa fa-instagram fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright container-fluid ">
                    <div className="col-12">
                        <p>© 2021 Copyrights <a href="#">ParqueosYa Bolivia </a>| Desarrollado por <a
                            href="https://dpdesign.agency/">DP
                            Design</a></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

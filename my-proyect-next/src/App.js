import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './layout/Layout'
import inicio from './pages/inicio';
import RegistroParqueo from './pages/RegistroParqueo';
import listaParqueo from './pages/listaParqueo';
import mapaParqueo from './pages/mapaParqueo';
import perfil from './pages/perfil';
import registroAdministrador from './pages/registroAdministrador';
import perfilUsuario from './pages/perfilUsuario';
import usuarioAdministrador from './pages/usuarioAdministrador';
import NotFound from './pages/NotFound'
import login from './pages/login'
import carga from './pages/carga'
import contacto from './pages/contacto'
import buzon from './pages/buzon'
import reportar from './pages/reportar'
import registroAdministradorParqueo from './pages/registroAdministradorParqueo'
import usuarioAdministradorParqueo from './pages/usuarioAdministradorParqueo'
import perfilParqueo from './pages/perfilParqueo'
import publicidadParqueo from './pages/publicidadParqueo'
import listaSugerencias from './pages/listaSugerencias'
import listaProblemas from './pages/listaProblemas'
import reportes from './pages/reportes'
import politicas from './pages/politicas'
import VistaReportePage from './pages/VistaReportePage'
import InicioP from './pages/InicioP'
import RootPage from './pages/RootPage';
import ParqueoShareLink from './pages/ParqueoShareLink';
import ListaContactate from './pages/ListaContactate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route exact path="/inicioP" component={InicioP} />
        <Route exact path="/admin" component={carga} />
        <Route exact path="/login" component={login} />
        <Route exact path="/politicas" component={politicas} />
        <Route exact path="/parqueo/:key" component={ParqueoShareLink} />
        <Route exact path="/registroParqueoP/:key" component={RegistroParqueo} />
        <Route exact path="/perfilParqueoP/:key" component={perfilParqueo} />

        {/* <Route exact path="/VistaReportePage" component={VistaReportePage} /> */}
        <Route exact path='/VistaReportePage/:tipo/:fecha_inicio/:fecha_fin' component={VistaReportePage} />
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/inicio" component={inicio} />
              <Route exact path="/perfil" component={perfil} />
              <Route exact path="/registroParqueo" component={RegistroParqueo} />
              <Route exact path="/registroParqueo/:key" component={RegistroParqueo} />
              <Route exact path="/listaParqueo" component={listaParqueo} />
              <Route exact path="/mapaParqueo" component={mapaParqueo} />
              <Route exact path="/registroAdministrador" component={registroAdministrador} />
              <Route exact path="/registroAdministrador/:key" component={registroAdministrador} />
              <Route exact path="/registroAdministradorParqueo" component={registroAdministradorParqueo} />
              <Route exact path="/registroAdministradorParqueo/:key" component={registroAdministradorParqueo} />
              <Route exact path="/perfilUsuario" component={perfilUsuario} />
              <Route exact path="/usuarioAdministrador" component={usuarioAdministrador} />
              <Route exact path="/usuarioAdministradorParqueo" component={usuarioAdministradorParqueo} />
              <Route exact path="/contacto" component={contacto} />
              <Route exact path="/buzon" component={buzon} />
              <Route exact path="/reportar" component={reportar} />
              <Route exact path="/perfilParqueo/:key" component={perfilParqueo} />
              <Route exact path="/publicidadParqueo" component={publicidadParqueo} />
              <Route exact path="/listaSugerencias" component={listaSugerencias} />
              <Route exact path="/listaProblemas" component={listaProblemas} />
              <Route exact path="/listaContactate" component={ListaContactate} />
              <Route exact path="/reportes" component={reportes} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

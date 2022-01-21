import React from "react";

const perfilUsuario = () => {
  return (
    <>
      <div className="text-center">
        <h1>Perfil Usuario</h1>
        <div className="card mb-3">
          <div className="card-body">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="well well-sm">
                <div class="row">
                  <div class="col-sm-6 col-md-4">
                    <img
                      src="http://placehold.it/380x500"
                      alt=""
                      class="img-thumbnail"
                    />
                  </div>
                  <div class="col-sm-6 col-md-8">
                    <h4>Nombre Cliente</h4>
                    <small>
                      <cite title="San Francisco, USA">
                        Santa Cruz, BOLIVIA{" "}
                        <i class="glyphicon glyphicon-map-marker"></i>
                      </cite>
                    </small>
                    <p>
                      <i class="glyphicon glyphicon-envelope"></i>
                      email@ejemplo.com
                      <br />
                      <i class="glyphicon glyphicon-globe"></i>
                      <a href="http://www.ejemplo.com">
                        www.ejemplo.com
                      </a>
                      <br />
                      <i class="glyphicon glyphicon-gift"></i>Junio 02, 1988
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default perfilUsuario;

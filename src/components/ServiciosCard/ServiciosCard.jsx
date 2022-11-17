import "./ServiciosCard.css";

export const ServiciosCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 card__servicios">
          <div className="card card__cuerpo">
            <div className="card-body card__equipo">
              <div className="card__equipo--div">
                <p className="text-center card__equipo--texto">
                  Conoce al equipo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 card__servicios">
          <div className="card card__cuerpo">
            <div className="card-body card__aprende">
              <div className="card__aprende--div">
                <p className="text-center card__aprende--texto">
                  Aprende con nosotros
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 card__servicios">
          <div className="card card__cuerpo">
            <div className="card-body card__3d">
              <div className="card__3d--div">
                <p className="text-center card__3d--texto">Tráenos tu STL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./ServiciosCard.css";

export const ServiciosCard = () => {
  return (
    <div className="container">
      <div className="row">
        <Link
          className="col-sm-6 col-md-4 card__servicios"
          to={"/articulo/quienes-somos"}
        >
          <div className="card card__cuerpo">
            <div className="card-body card__equipo">
              <div className="card__equipo--div">
                <p className="text-center card__equipo--texto">
                  Conoce al equipo
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6 col-md-4 card__servicios"
          to={"/servicio/aprende-aqui"}
        >
          <div className="card card__cuerpo">
            <div className="card-body card__aprende">
              <div className="card__aprende--div">
                <p className="text-center card__aprende--texto">
                  Aprende con nosotros
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link
          className="col-sm-6 col-md-4 card__servicios"
          to={"/servicio/impresion-stl"}
        >
          <div className="card card__cuerpo">
            <div className="card-body card__3d">
              <div className="card__3d--div">
                <p className="text-center card__3d--texto">Tráenos tu STL</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand navbar__logo" to={"/home"}>
          <img src="/static/tenderizer.png" className="navbar__icon" />
          <p className="navbar__logo--nombre">
            Mini<span className="navbar__logo--nombre--span">Shop</span>
          </p>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/coleccion/modelos"}
            >
              <p className="nav-link__nombre">Modelos</p>
            </Link>

            <Link
              className="nav-link active"
              aria-current="page"
              to={"/coleccion/pinturas"}
            >
              <p className="nav-link__nombre">Pinturas</p>
            </Link>

            <Link
              className="nav-link active"
              aria-label="page"
              to={"/coleccion/tabletop"}
            >
              <p className="nav-link__nombre">Tabletop</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

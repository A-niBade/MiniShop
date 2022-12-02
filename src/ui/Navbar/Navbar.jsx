import { Link } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
import "./Navbar.css";

export const Navbar = () => {
  const scrollPosition = useScroll();

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        scrollPosition > 0 ? `scrolled` : `scrolltop`
      }`}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand navbar__logo ${
            scrollPosition > 0 ? `logo-scrolled` : `logo-top`
          }`}
          to={"/home"}
        >
          <img src="/static/miniatura.png" className="navbar__icon" />
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
          <div
            className={`navbar-nav ${
              scrollPosition > 0 ? `link-scrolled` : ``
            }`}
          >
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
              <p className="nav-link__nombre">Juegos de mesa</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=""></div>
    </nav>
  );
};

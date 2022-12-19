import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer--css">
      <div className="titulo--tienda container">
        <img src="static/miniatura.png" className="img--footer"></img>
        <h1>MiniShop</h1>
        <h5>2022</h5>
        <div className="iconos--redes">
          <img src="static/img/facebook.png"></img>
          <img src="static/img/instagram.png"></img>
          <img src="static/img/twitter.png"></img>
        </div>

        <div>
          <p>HOLA</p>
          <p>CHAO</p>
          <p>BUENAS TARDES</p>
        </div>
      </div>
    </div>
  );
};

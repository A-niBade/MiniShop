import React from "react";
import { Footer } from "../../ui/Footer/Footer";
import { Navbar } from "../../ui/Navbar/Navbar";
import "./TeamPage.css";

export const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="container info-container">
          <div className="row">
            <aside className="col">
              <img src="https://dojiw2m9tvv09.cloudfront.net/16153/6/M_280308917_1399453737219307_9015314576942161072_n10588684.jpeg?27" />
            </aside>
            <div className="col">
              <h1 className="titulo text-center">CONOCE LA TIENDA</h1>
              <p>
                Somos un grupo de personas que nos une la pasión por las
                miniaturas, juegos de rol, juegos de mesa y de cartas entre
                otros.
                <br /> <br />
                Disfrutamos de estos hobbies, tanto como ustedes y eso se ve
                reflejado en la atención que les brindamos. Pintamos, armamos y
                jugamos al igual que ustedes por lo que sabemos y entendemos lo
                buscas y pides de nosotros.
                <br /> Te invitamos a que vengas a conocernos, te podemos
                aconsejar, ayudar y más de alguna vez podremos hasta jugar
                juntos.
                <br /> <br /> Contamos con zona de juegos con escenografía tanto
                dentro de la tienda, como en el patio de la tienda (con parrilla
                para eventos), para juegos de miniaturas (Warhammer 40.000, Kill
                Team, Age of sigmar, Lord of the Ring, Necromunda, Kings of war,
                Starwars Legion, o cualquiera similar), contamos además con
                espacio para 36 jugadores de magic que participan constantemente
                de nuestra liga de commander.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

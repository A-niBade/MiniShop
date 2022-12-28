import React from "react";
import { Footer } from "../../ui/Footer/Footer";
import { Navbar } from "../../ui/Navbar/Navbar";
import "./StlPage.css";

export const StlPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container info-container">
        <div className="row">
          <aside className="col">
            <img
              src="https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg"
              className="col--img"
            />
          </aside>
          <div className="col">
            <p>
              Somos un grupo de personas que nos une la pasión por las
              miniaturas, juegos de rol, juegos de mesa y de cartas entre otros.
              <br /> <br />
              Disfrutamos de estos hobbies, tanto como ustedes y eso se ve
              reflejado en la atención que les brindamos. Pintamos, armamos y
              jugamos al igual que ustedes por lo que sabemos y entendemos lo
              buscas y pides de nosotros.
              <br /> Te invitamos a que vengas a conocernos, te podemos
              aconsejar, ayudar y más de alguna vez podremos hasta jugar juntos.
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
  );
};

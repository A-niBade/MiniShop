import { getProductoByDestacado } from "@/services";
import "./ProductosHome.css";

export const ProductosHome = () => {
  const destacados = getProductoByDestacado(1);
  return (
    <div className="container">
      <p className="text-center mt-4 titulo__llegados">DESTACADOS</p>
      <div className="row">
        {destacados.map((destacado) => (
          <div className="col-sm-4 mb-3">
            <div className="col card">
              <img src={destacado.img.caja} className="card-img-top p-4" />
              <div className="card-body">
                <h5 className="card-title text-center">{destacado.nombre}</h5>
                <p className="card-text text-center">
                  $ {destacado.precio.toFixed(3)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

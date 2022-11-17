import { ProductoAside } from "../ProductoAside";
import { getModeloByLinea } from "@/services";
import "./Pinturas.css";

export const Pinturas = () => {
  const modelos = getModeloByLinea("Pinturas");
  return (
    <div className="container">
      <div className="row row__modelos">
        <ProductoAside linea="Pinturas" />
        {modelos.map((modelo, i) => (
          <div className="col-sm-3">
            <div className="col card">
              <img className="card-img-top p-2" src={modelo.img.caja} />
              <div className="card-body text-center">
                <p className="card-title">{modelo.nombre}</p>
                <p className="">$ {modelo.precio.toFixed(3)}</p>
                <p className="text-center">Despacho a todo Chile</p>
                <button className="btn btn-primary">Agregar al carro</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

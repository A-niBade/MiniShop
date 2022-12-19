import { ProductoAside } from "../ProductoAside";
import { getProduct } from "../../services";
import "./Pinturas.css";
import { useState, useEffect } from "react";

export const Pinturas = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const products = await getProduct("pinturas");
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row row__modelos">
        <ProductoAside linea="Pinturas" />
        {products ? (
          products.map((modelo, i) => (
            <div className="col-sm-3">
              <div className="col card">
                <img className="card-img-top p-2" src={modelo.img} />
                <div className="card-body text-center">
                  <p className="card-title">{modelo.nombre}</p>
                  <p className="">$ {modelo.precio}</p>
                  <p className="text-center">Despacho a todo Chile</p>
                  <button className="btn btn-primary">Agregar al carro</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
};

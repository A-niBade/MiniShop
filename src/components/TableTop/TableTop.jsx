import "./TableTop.css";
import { ProductoAside } from "../ProductoAside";
import { getProduct } from "../../services";
import { useEffect, useState } from "react";

export const TableTop = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const products = await getProduct("juegos-de-mesa");
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row row__modelos">
        <ProductoAside linea="Tabletop" />
        {products ? (
          products.map((product) => (
            <div className="col-sm-3">
              <div className="col card">
                <img className="card-img-top p-2" src={product.img} />
                <div className="card-body text-center">
                  <p className="card-title">{product.nombre}</p>
                  <p className="">$ {product.precio.toFixed(3)}</p>
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

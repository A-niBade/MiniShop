import { inventario } from "../data/inventario";

export const getModeloByLinea = (linea) => {
  return inventario.filter((modelo) => modelo.linea === linea);
};

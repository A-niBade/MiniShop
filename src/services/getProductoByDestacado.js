import { inventario } from "@/data";

export const getProductoByDestacado = (destacado) => {
  return inventario.filter((producto) => producto.destacado === destacado);
};

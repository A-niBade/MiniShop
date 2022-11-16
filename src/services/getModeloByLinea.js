import { inventario } from "@/data";

export const getModeloByLinea = (linea) => {
  return inventario.filter((modelo) => modelo.linea === linea);
};

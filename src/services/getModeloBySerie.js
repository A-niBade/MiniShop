import { inventario } from "@/data";

export const getModeloBySerie = (linea) => {
  return inventario.find((modelo) => modelo.linea === linea);
};

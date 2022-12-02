import { inventario } from "../data/inventario";

export const getModeloBySku = (sku) => {
  return inventario.find((modelo) => modelo.sku === sku);
};

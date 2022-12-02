import { getModeloBySku } from "../../src/services/getModeloBySku";

describe("Pruebas a los datos del inventario", () => {
  test("getModeloByLinea debe de retornar debe de retornar un producto por su sku ", () => {
    const sku = 2801;
    const producto = getModeloBySku(sku);

    expect(producto).toStrictEqual({
      sku: 2801,
      linea: "Pinturas",
      contenido: "24 ml",
      nombre: "Blue Clear Air",
      marca: "Citadel",
      uso: "Aerografo",
      precio: 6.0,
      destacado: 1,
      img: {
        caja: "https://res.cloudinary.com/dzhtmtpav/image/upload/v1668623404/air-citadel_uoxzsn.png",
      },
    });
  });
});

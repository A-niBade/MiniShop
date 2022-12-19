import axios from "axios";

export const getProduct = async (category) => {
  try {
    const products = await axios.get(
      `http://localhost:3000/inventario/${category}`
    );
    const data = products.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

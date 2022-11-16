import "./Modelos.css";
import { getModeloByLinea } from "@/services";

export const Modelos = () => {
  const modelos = getModeloByLinea("Warhammer 40K");
  console.log(modelos);
  return (
    <>
      <div className="container container__modelos"></div>
    </>
  );
};

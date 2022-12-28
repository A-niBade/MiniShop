import React from "react";
import { getModeloBySerie } from "@/services";

export const ProductCategory = ({ linea }) => {
  const lineas = getModeloBySerie(linea);
  return (
    <aside className="col-sm-3">
      <p>{lineas.linea}</p>
    </aside>
  );
};

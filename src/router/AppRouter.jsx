import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  ImpresionPage,
  ModelosPage,
  PinturaPage,
  TableTopPage,
} from "../pages/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="coleccion/modelos" element={<ModelosPage />} />
        <Route path="coleccion/impresiones" element={<ImpresionPage />} />
        <Route path="coleccion/pinturas" element={<PinturaPage />} />
        <Route path="coleccion/tabletop" element={<TableTopPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

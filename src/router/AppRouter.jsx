import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "../functions/ScrollToTop";
import {
  HomePage,
  ImpresionPage,
  ModelosPage,
  PinturaPage,
  TableTopPage,
  ConocePage,
  AprendePage,
} from "../pages/";
import { StlPage } from "../pages/StlPage/StlPage";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="coleccion/modelos" element={<ModelosPage />} />
        <Route path="coleccion/impresiones" element={<ImpresionPage />} />
        <Route path="coleccion/pinturas" element={<PinturaPage />} />
        <Route path="coleccion/tabletop" element={<TableTopPage />} />
        <Route path="articulo/quienes-somos" element={<ConocePage />} />
        <Route path="servicio/aprende-aqui" element={<AprendePage />} />
        <Route path="servicio/impresion-stl" element={<StlPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

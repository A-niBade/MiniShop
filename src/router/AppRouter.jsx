import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  HowToPlay,
  PaintsPage,
  SetsPage,
  StlPage,
  TableTopPage,
  TeamPage,
} from "../pages/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="inventario/sets" element={<SetsPage />} />
        <Route path="inventario/pinturas" element={<PaintsPage />} />
        <Route path="inventario/juegos-de-mesa" element={<TableTopPage />} />
        <Route path="articulo/quienes-somos" element={<TeamPage />} />
        <Route path="articulo/aprende-aqui" element={<HowToPlay />} />
        <Route path="articulo/impresion-stl" element={<StlPage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

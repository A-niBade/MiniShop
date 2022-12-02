import { Modelos } from "@/components";
import { Footer, Navbar } from "@/ui";

import "./ModelosPage.css";

export const ModelosPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Modelos />
      <Footer />
    </div>
  );
};

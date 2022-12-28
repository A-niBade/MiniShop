import { Sets } from "../../components/Sets/Sets";
import { Navbar, Footer } from "../../ui/";

import "./SetsPage.css";

export const SetsPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="modelos">
        <Sets />
      </div>
      <Footer />
    </div>
  );
};

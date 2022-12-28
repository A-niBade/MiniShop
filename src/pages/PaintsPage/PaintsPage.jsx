import { Footer, Navbar } from "../../ui";
import { Paints } from "../../components";
import "./PaintsPage.css";

export const PaintsPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="pinturas">
        <Paints />
      </div>
      <Footer />
    </div>
  );
};

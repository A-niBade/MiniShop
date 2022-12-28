import { TableTop } from "@/components";
import { Navbar, Footer } from "@/ui/";

import "./TableTopPage.css";

export const TableTopPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="tabletop">
        <TableTop />
      </div>
      <Footer />
    </div>
  );
};

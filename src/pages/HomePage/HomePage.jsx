import { Carousel, Footer, Navbar } from "../../ui";
import { ServicesCards, TopProducts } from "../../components/";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <TopProducts />
      <div className="container container--card">
        <h2 className="text-center p-5 h2__home">
          ¿No sabes por dónde empezar?
        </h2>
        <ServicesCards />
      </div>
      <Footer />
    </>
  );
};

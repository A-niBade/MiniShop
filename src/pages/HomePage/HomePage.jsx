import { Carousel, Footer, Navbar } from "@/ui/";
import { ProductosHome, ServiciosCard } from "@/components/";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductosHome />
      <div className="container">
        <h2 className="text-center p-5 h2__home">
          ¿No sabes por dónde empezar?
        </h2>
      </div>
      <ServiciosCard />
      <Footer />
    </>
  );
};


import Footer from "./components/Footer";
import RedeSociales from "./components/RedesSociales/RedesSociales";
import NavBar1 from "./components/NavBar1";
import ListProducts from "./components/Products/ListProducts";

function App() {
  return (
    <>
      <NavBar1 title="Drone.Co" />
      <ListProducts />
      <RedeSociales />
      <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
    </>
  );
}

export default App;

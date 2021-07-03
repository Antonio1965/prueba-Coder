import Footer from "./components/Footer";
import RedeSociales from "./components/RedesSociales/RedesSociales";
import NavBar1 from "./components/NavBar1";
import ListProducts from "./components/Products/ListProducts";
import CheckoutCard from "./components/Checkout/CheckoutCart";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import Products from "./components/Products/Products";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar1 title="Drone.Co" />
      <Switch>
        <Route path="/checkout-page">
          <CheckoutPage />
        </Route>
        <Route path="/">
          <ListProducts />
        </Route>
      </Switch>
      {/* <CheckoutCard/> */}
      {/* <Products /> */}
      <RedeSociales />
      <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
      </Router>
    </>
  );
}

export default App;

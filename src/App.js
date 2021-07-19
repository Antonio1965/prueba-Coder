import { useEffect } from "react";
import Footer from "./components/Footer";
import RedeSociales from "./components/RedesSociales/RedesSociales";
import NavBar1 from "./components/NavBar1";
import ListProducts from "./components/Products/ListProducts";
import CheckoutCard from "./components/Checkout/CheckoutCart";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import Products from "./components/Products/Products";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { SignIn } from './SignIn';
import { SignUp } from "./SingUp";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Checkout } from "./CheckoutForm/Checkout";



export const App = () => {
  const [{ user }, dispatch] = useStateValue();

useEffect(() => {
auth.onAuthStateChanged((authUser)=>{
  console.log(authUser)
  if(authUser){
    dispatch({
      type: actionTypes.SET_USER,
      user: authUser,

    })
  }
})
}, [])


  return (
    <>
    <Router>
      <NavBar1 title="Drone.Co" />
      <Switch>
        <Route path='/sign-in'>
          <SignIn/>
        </Route>
        <Route  path='/sign-up'>
          <SignUp/>
        </Route>
        <Route path="/checkout-page">
          <CheckoutPage />
        </Route>
        <Route path='/checkout'>
          <Checkout/>
        </Route>
        <Route  path="/">
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

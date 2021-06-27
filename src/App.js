
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer';
import RedeSociales from './components/RedesSociales/RedesSociales';

function App() {
  return (
    <>
    <div className="App">
     <NavBar title='Drone.Co'/>
     <ItemListContainer greeting='Bienvenidos a la sala de productos!!'/>
     <RedeSociales/>
     <Footer autor='Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021.'/>
    </div>
    </>
  );
}

export default App;

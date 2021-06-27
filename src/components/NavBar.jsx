import './NavBar.css';
import Card from './Card/Card';


const NavBar = (props)=>{
    return(
<nav className="nav">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <ul>
          <li className="list-item">
            <a href="/">Home</a>
          </li>
          <li className="list-item">
            <a href="#">Productos</a>
          </li>
          <li className="list-item">
            <a href="#">Servicios</a>
          </li>
          <li className="list-item">
            <a href="">Contactos</a>
          </li>
          <span>
              <Card/>
          </span>
        </ul>
      </div>
    </nav>
    )
}

export default NavBar;
import './NavBar.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../src/img/antonio1.svg";
import {Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow:{
      flexGrow:1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className="imagen-logo" src={logo} alt="logo" />
          <h1 className="nav-title">{title}</h1>
          <div className={classes.grow}/>
          <ul className="list-group">
            <li className="list-item">
              <a href="/">Aficionados</a>
            </li>
            <li className="list-item">
              <a href="#">Profesional</a>
            </li>
            <li className="list-item">
              <a href="#">Servicios</a>
            </li>
            <li className="list-item">
              <a href="#">Contactos</a>
            </li>
            <IconButton aria-label="show cart items" color="inherent">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart
                  fontSize="large"
                  className="color-carro"
                  color="#fff"
                />
              </Badge>
            </IconButton>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

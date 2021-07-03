import "./NavBar.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../src/img/antonio1.svg";
import { Link } from "react-router-dom";
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
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
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton>
              <img
                className={classes.image}
                src={logo}
                height="45px"
                alt="logo"
              />
          <h1 className="nav-title">{title}</h1>
            </IconButton>
          </Link>
          <div className={classes.grow} />
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
            <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherent">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart
                    fontSize="large"
                    className="color-carro"
                    color="#fff"
                  />
                </Badge>
              </IconButton>
            </Link>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

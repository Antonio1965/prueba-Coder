import "./NavBar.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../src/img/antonio1.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'7rem'
  },
  strong:{
    boxShadow:'none',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    backgroundColor:'azure',
    marginLeft: theme.spacing(4),
  }
  
}));

const NavBar = ({ title }) => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
          <Typography variant="h5" color="azure" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button color='azure'variant= 'outlined'>
            <strong>Sing In</strong>
            </Button>
          </div>
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

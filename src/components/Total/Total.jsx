import { makeStyles, Button } from "@material-ui/core";
import accounting from "accounting";
import React from "react";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "2rem",
  },
}));

export const Total = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items:{basket?.length}</h5>
      <h5> {accounting.formatMoney(getBasketTotal(basket), )}</h5>
      <Link to="/checkout">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          COMPRAR
        </Button>
      </Link>
    </div>
  );
};

import { Container } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CardCarrito from "../cardCarrito";
import { useStyles } from "./style";

const ShowProducts = () => {
  const { carShop } = useSelector((state) => state.carShop);
  const classes = useStyles();
  return (
    <div className={classes.contained}>
      {carShop &&
        carShop.map((item) => {
          return (
            <Container className={classes.container}>
              <CardCarrito item={item} />
            </Container>
          );
        })}
    </div>
  );
};

export default ShowProducts;

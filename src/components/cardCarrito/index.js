import { Button, Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CardCarrito = ({ item }) => {
  const classes = useStyles();
  const [price, setPrice] = useState(parseFloat(item.target_fg));
  const [cantidad, setCantidad] = useState(1);
  const addProduct = () => {
    const newQuantity = cantidad + 1;
    setCantidad(newQuantity);
    handlePrice(newQuantity);
  };

  const removeProduct = () => {
    if (cantidad < 1) return;
    const newQuantity = cantidad - 1;
    setCantidad(newQuantity);
    console.log("hola mundo", newQuantity);
    handlePrice(newQuantity);
  };
  /* useEffect(() => {
    setPrice(price * parseInt(cantidad));
    debugger;
    console.log(cantidad);
    console.log(price);
  }, [cantidad]); */
  const handlePrice = (cantidad) => {
    const newPrice = price * cantidad;
    console.log(newPrice);
    setPrice(newPrice);
  };
  return (
    <div>
      <div className={classes.contained}>
        <Container className={classes.container}>
          <Grid container spacing={4} justify="start" alignItems="center">
            <Grid item>
              <img src={item.image_url} className={classes.img} />
            </Grid>
            <Grid item>
              <Typography className={classes.subtitle}>
                {item.tagline}
              </Typography>
              <Typography className={classes.title}>{item.name}</Typography>
              <Typography className={classes.price}>
                ${item.target_fg}
              </Typography>
              <Typography className={classes.ph}>{item.ph}</Typography>
            </Grid>
            <Grid item>
              <div className={classes.divPrice}>
                <Button onClick={removeProduct}>
                  <RemoveCircleOutlineIcon className={classes.colorButton} />
                </Button>
                <h1>{cantidad}</h1>
                <Button onClick={addProduct}>
                  <AddCircleOutlineIcon className={classes.colorButton} />
                </Button>
              </div>
            </Grid>
            <Grid item>
              <h1>${price}</h1>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default CardCarrito;

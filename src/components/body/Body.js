import { Grid } from "@material-ui/core";
import React from "react";
import Cards from "../../ui/cards/Cards";
import { Filters } from "../../ui/filters/Filters";
import { useStyles } from "./style";

export const Body = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={4} justify="center" align=" center">
        <Grid item>
          <Filters />
        </Grid>
        <Grid item>
          <Cards />
        </Grid>
      </Grid>
    </div>
  );
};

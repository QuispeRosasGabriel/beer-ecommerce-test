import { Container, Typography } from "@material-ui/core";
import React from "react";
import { data } from "./data";
import { useStyles } from "./style";

export const Filters = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {data.map((data) => (
        <div className={classes.divContainer}>
          <Typography className={classes.title}>{data.title}</Typography>
          <ul>
            <div className={classes.divAling}>
              <input type="checkbox" />
              <Typography className={classes.subtitle}>
                {data.subtitle1}
              </Typography>
            </div>
            <div className={classes.divAling}>
              <input type="checkbox" />
              <Typography className={classes.subtitle}>
                {data.subtitle2}
              </Typography>
            </div>
            <div className={classes.divAling}>
              <input type="checkbox" />
              <Typography className={classes.subtitle}>
                {data.subtitle3}
              </Typography>
            </div>
            <div className={classes.divAling}>
              <input type="checkbox" />
              <Typography className={classes.subtitle}>
                {data.subtitle4}
              </Typography>
            </div>
          </ul>
        </div>
      ))}
    </Container>
  );
};

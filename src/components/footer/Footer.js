import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import { data, dataExperience } from "./data";
import { Hidden } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.conatined}>
      <Container>
        <div>
          <Hidden smDown>
            <div className={classes.divContenedor}>
              <div className={classes.divSubContenedor}>
                <Typography className={classes.logo}>Venta</Typography>
                {data.map((data) => (
                  <div className={classes.divText}>
                    <img
                      src={data.image.default}
                      alt="logo"
                      style={{ marginRight: "10px" }}
                    />
                    <Typography style={{ color: "#FFFFFF" }}>
                      {data.text}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className={classes.divSubContenedor}>
                {dataExperience.map((dataExperience) => (
                  <div className={classes.divSubtitle}>
                    <Typography className={classes.title}>
                      {dataExperience.title}
                    </Typography>
                    <ul>
                      <li className={classes.subtitle}>
                        {dataExperience.subtitle1}
                      </li>
                      <li className={classes.subtitle}>
                        {dataExperience.subtitle2}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.divContenedor}>
              <div className={classes.divSubContenedor}>
                <Typography className={classes.logo}>Venta</Typography>
              </div>
            </div>
          </Hidden>
        </div>
      </Container>
    </div>
  );
};

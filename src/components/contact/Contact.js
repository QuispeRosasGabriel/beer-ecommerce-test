import { Container } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { data } from "./data";
import { useStyles } from "./style";
export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={4} className={classes.contained}>
        <Grid item md={4}>
          <Container>
            {data.map((data) => (
              <div key={data.id} className={classes.contact}>
                <img src={data.image.default} className={classes.img} />
                <Typography>{data.text}</Typography>
              </div>
            ))}
          </Container>
        </Grid>
        <Grid item md={8}>
          <Container className={classes.containerIframe}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1951.366063400521!2d-77.01847244181516!3d-11.993028174210334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-11.9929787!2d-77.01741539999999!4m5!1s0x9105cf8236e3b201%3A0x727b41c89ab5b6b1!2sRubidio%2C%20Cercado%20de%20Lima%2015408%2C%20Per%C3%BA!3m2!1d-11.993121499999999!2d-77.0173398!5e0!3m2!1ses!2ses!4v1630199874556!5m2!1ses!2ses"
              width="900"
              height="350"
              allowfullscreen=""
              loading="lazy"
              className={classes.inframe}
            ></iframe>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "./style";
import off from "../../assets/off.png";
import { Hidden } from "@material-ui/core";

export const CardDetail = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [gets, setGets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getDeatilBeer = async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const postsData = await response.json();
      setPosts(postsData);
    };
    getDeatilBeer();
  }, []);

  useEffect(() => {
    const getRandomBeer = async () => {
      const response = await fetch("https://api.punkapi.com/v2/beers/random");
      const getsData = await response.json();
      setGets(getsData);
    };
    getRandomBeer();
  }, []);

  const usePosts = posts.map((post) => {
    return (
      <div className={classes.contained}>
        <Grid
          container
          spacing={4}
          justify="center"
          align="center"
          className={classes.gridContainer}
        >
          <Grid item md={6} sm={6}>
            <Grid container justify="center" align="center">
              <Hidden smDown>
                <Grid item md={6} className={classes.divShadow}>
                  <Typography className={classes.title}>Nombre</Typography>
                  <Typography className={classes.subtitle}>Tipo</Typography>
                  <Typography className={classes.subtitle}>Ph</Typography>
                  <Typography className={classes.subtitle}>Fecha</Typography>
                  <Typography className={classes.subtitle}>Volumen</Typography>
                  <Typography className={classes.subtitle}>Abv</Typography>
                </Grid>
              </Hidden>
              <Grid item md={6} className={classes.divShadow}>
                <Typography className={classes.title}>{post.name}</Typography>
                <Typography className={classes.subtitle}>
                  {post.tagline}
                </Typography>
                <Typography className={classes.subtitle}>{post.ph}</Typography>
                <Typography className={classes.subtitle}>
                  {post.first_brewed}
                </Typography>
                <Typography className={classes.subtitle}>
                  {post.volume.value} Litros
                </Typography>
                <Typography className={classes.subtitle}>{post.abv}</Typography>
              </Grid>
            </Grid>
            <Typography className={classes.price}>${post.target_fg}</Typography>
          </Grid>
          <Grid item md={6} sm={6}>
            <div className={classes.divImage}>
              <img src={post.image_url} className={classes.img} />
            </div>
          </Grid>
        </Grid>
        <div className={classes.divDescription}>
          <Typography className={classes.titleDescription}>
            Descripcion detallada
          </Typography>
          <Typography className={classes.subtitleDescription}>
            {post.description}
          </Typography>
          <Typography className={classes.titleDescription}>
            Fecha de lanzamiento
          </Typography>
          <Typography className={classes.subtitleDescription}>
            {post.first_brewed}
          </Typography>
          <Typography className={classes.titleDescription}>
            Ph del acohol
          </Typography>
          <Typography className={classes.subtitleDescription}>
            {post.ph}
          </Typography>
          <Typography className={classes.titleDescription}>
            Nivel de atenuación
          </Typography>
          <Typography className={classes.subtitleDescription}>
            {post.attenuation_level}
          </Typography>
        </div>
      </div>
    );
  });

  const useGets = gets.map((get) => {
    return (
      <Grid item md={4}>
        <div className={classes.containedRandom}>
          <img src={off} className={classes.saleOff} />
          <Typography className={classes.subtitleColor}>
            {get.tagline}
          </Typography>
          <Typography className={classes.titleRandom}>{get.name}</Typography>
          <img src={get.image_url} className={classes.imgRandom} />
          <Typography className={classes.subtitleRandom}>
            ${get.target_og}
          </Typography>
          <Typography className={classes.subtitleRandom1}>
            ${get.target_fg}
          </Typography>
          <Typography className={classes.subtitle1Random}>{get.ph}</Typography>
        </div>
      </Grid>
    );
  });

  return (
    <Container className={classes.container}>
      <Grid container spacing={4} justify="center" align="center">
        {posts && usePosts}
      </Grid>
      <Typography
        className={classes.titleDescription}
        className={classes.titleDescription2}
      >
        Producto recomendado
      </Typography>
      <Grid container spacing={4} justify="start" align="center">
        {gets && useGets}
      </Grid>
    </Container>
  );
};

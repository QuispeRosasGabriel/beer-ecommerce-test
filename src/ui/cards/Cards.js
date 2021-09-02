import React, { useState, useEffect } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import { useDispatch } from "react-redux";
import { CarAdd } from "../../action/carrito";

export default function Cards() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        " https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"
      );
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  const classes = useStyles();
  const usePosts = posts.map((post) => {
    const handleAdd = () => {
      dispatch(CarAdd(post));
    };
    return (
      <Grid item md={4}>
        <div className={classes.contained}>
          <img src={icon} />
          <Typography className={classes.subtitleColor}>
            {post.tagline}
          </Typography>
          <Typography className={classes.title}>{post.name}</Typography>
          <img src={post.image_url} className={classes.img} />
          <Typography className={classes.subtitle}>
            ${post.target_fg}
          </Typography>
          <Typography className={classes.subtitle1}>{post.ph}</Typography>
          <Button className={classes.btn}>
            <Link to={`/card-detail/${post.id}`} className={classes.link}>
              Ver mas
            </Link>
          </Button>
          <Button className={classes.btn1} onClick={handleAdd}>
            Agregar
          </Button>
          {/* <Button>
            <StorefrontIcon style={{ color: "white" }} />
          </Button> */}
        </div>
      </Grid>
    );
  });

  return (
    <Container>
      <Grid container spacing={4} justify="center" align="center">
        {posts && usePosts}
      </Grid>
    </Container>
  );
}

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import { Button, Container, Hidden } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { data } from "./data";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import TemporaryDrawer from "../../ui/drawer/Drawer";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Container>
          <Hidden xsDown>
            <div className={classes.divContainer}>
              <div className={classes.divSocials}>
                <InstagramIcon className={classes.instagram} />
                <YouTubeIcon className={classes.youtube} />
                <FacebookIcon className={classes.facebook} />
              </div>
              <img src={logo} className={classes.logo} />
              <div className={classes.divLogger}>
                <Button className={classes.btn}>Ingresar</Button>
                <Link to="/carrito">
                  <AddShoppingCartIcon className={classes.icons} />
                </Link>
              </div>
            </div>

            <div className={classes.divTitles}>
              {data.map((data) => (
                <Typography>
                  <Link to={data.route} key={data.id} className={classes.title}>
                    {data.title}
                  </Link>
                </Typography>
              ))}
            </div>
          </Hidden>
          <Hidden smUp>
            <div className={classes.divContainer}>
              <img src={logo} className={classes.logo} />
              <TemporaryDrawer />
            </div>
          </Hidden>
        </Container>
      </AppBar>
    </div>
  );
}

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ReorderIcon from "@material-ui/icons/Reorder";
import { data } from "./data";
import { Link, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    color: "#656665",
    textDecoration: "none",
    "&:hover": {
      color: "#C74634",
    },
  },
  typography: {
    marginTop: "40px",
    textAlign: "center",
  },
  btnClose: {
    color: "red",
    marginLeft: "180px",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Button
          onClick={toggleDrawer(anchor, false)}
          className={classes.btnClose}
        >
          <Typography>X</Typography>
        </Button>
        {data.map((data) => (
          <Typography className={classes.typography}>
            <Link to={data.route} key={data.id} className={classes.title}>
              {data.title}
            </Link>
          </Typography>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ReorderIcon fontSize="large" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

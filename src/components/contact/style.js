import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "300px",
    [theme.breakpoints.down(599)]: {
      marginTop: "200px",
    },
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  },
  contained: {
    maxWidth: "100%",
  },
  img: {
    marginRight: "20px",
  },
  contact: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "flex-start",
  },
  inframe: {
    border: "0px",
    maxWidth: "100%",
  },
  containerIframe: {
    maxWidth: "100%",
  },
}));

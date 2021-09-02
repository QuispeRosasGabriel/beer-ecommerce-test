import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contained: {
    transparent: "50%",
    height: "560px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px gray",
    "&:hover": {
      boxShadow: "0px 0px 20px 1px gray",
    },
  },
  btn: {
    backgroundColor: "#AC3051",
    color: "#FFFFFF",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#AC3051",
    },
  },
  title: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  subtitle: {
    color: "#00000",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitleColor: {
    color: "#D26A8A",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  img: {
    height: "200px",
    margin: "20px 0px",
  },
  subtitle1: {
    color: "gray",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  btn1: {
    marginTop: "10px",
    backgroundColor: "#AC3051",
    color: "#FFFFFF",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#AC3051",
    },
  },
}));

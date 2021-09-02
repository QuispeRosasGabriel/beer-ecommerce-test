import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "280px",
    [theme.breakpoints.down(599)]: {
      marginTop: "150px",
    },
  },
  contained: {
    width: "100%",
  },
  gridContainer: {
    marginBottom: "100px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "25px",
    marginBottom: "20px",
    textAlign: "start",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "20px",
    textAlign: "start",
  },
  price: {
    fontWeight: "bold",
    fontSize: "25px",
    marginBottom: "20px",
    boxShadow: "0px 0px 10px 0px gray",
    width: "200px",
    height: "45px",
    marginTop: "-80px",
    paddingTop: "10px",
  },
  img: {
    height: "550px",
  },
  containerShadow: {
    display: "flex",
    justifyContent: "space-around",
  },
  divShadow: {
    height: "440px",
    width: "250px",
  },
  titleDescription: {
    color: "#D26A8A",
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "start",
    [theme.breakpoints.down(599)]: {
      textAlign: "center",
    },
  },
  subtitleDescription: {
    textAlign: "start",
    fontSize: "16px",
    marginBottom: "14px",
    [theme.breakpoints.down(599)]: {
      textAlign: "center",
      padding: "0px 25px",
    },
  },
  containedRandom: {
    transparent: "50%",
    height: "510px",
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
  titleRandom: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
  subtitleRandom: {
    color: "#00000",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
    textDecoration: "line-through",
  },
  subtitleRandom1: {
    color: "#D26A8A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "25px",
    marginBottom: "10px",
  },
  subtitleColor: {
    color: "#D26A8A",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  imgRandom: {
    height: "200px",
    margin: "20px 0px",
  },
  subtitle1Random: {
    color: "gray",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  divImage: {
    boxShadow: "0px 0px 10px 0px gray",
    width: "280px",
    height: "520px",
  },
  divDescription: {
    margin: "50px 0px",
  },
  saleOff: {
    marginTop: "10px",
    marginLeft: "180px",
  },
  titleDescription2: {
    color: "#D26A8A",
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "start",
    [theme.breakpoints.down(599)]: {
      textAlign: "center",
    },
    margin: "20px 0px",
    textAlign: "start",
  },
}));

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
  },
  divAling: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    boxShadow: "0px 0px 10px 0px gray",
    borderRadius: "10px",
    height: "400px",
    paddingTop: "10px",
  },
  divContainer: {
    marginBottom: "50px",
  },
}));

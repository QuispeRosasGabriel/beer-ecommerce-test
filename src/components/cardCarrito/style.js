import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contained: {
    minHeight: "250px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
    border: "1px solid #F9F8F6",
  },
  img: {
    height: "200px",
  },
  title: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: "25px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#00000",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  price: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "10px",
  },
  ph: {
    color: "gray",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  divPrice: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
  },
  colorButton: {
    color: "#D26A8A",
  },
  container: {
    marginTop: "20px",
  },
}));

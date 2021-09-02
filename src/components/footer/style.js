import { makeStyles } from "@material-ui/core";
import backgroundImage from "../../assets/backgroundImage.png";

export const useStyles = makeStyles((theme) => ({
  conatined: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: "300px",
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 1000px rgb(35, 47, 62, 0.850)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
  },
  logo: {
    fontSize: "60px",
    color: "white",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
  },
  divText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divSubtitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divSubContenedor: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: "30px",
  },
  divContenedor: {
    width: "100%",
  },
}));

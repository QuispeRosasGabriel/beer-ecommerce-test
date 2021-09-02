import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/backgroundImage.png";

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    fontSize: "60px",
  },
  icons: {
    color: "#AC3051",
    border: "1px solid #AC3051",
    cursor: "pointer",
  },
  appBar: {
    /* backgroundImage: `url(${backgroundImage})`, */
    backgroundColor: "#F9F8F6",
    width: "100%",
    height: "200px",
    [theme.breakpoints.down(599)]: {
      height: "100px",
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
  divContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divSocials: {
    display: "flex",
    justifyContent: "space-around",
    width: "100px",
    alignItems: "center",
  },
  divLogger: {
    display: "flex",
    justifyContent: "space-around",
    width: "200px",
    alignItems: "center",
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
  instagram: {
    color: "#E44673",
  },
  youtube: {
    color: "#FF0000",
  },
  facebook: {
    color: "#7D91B4",
  },
  divTitles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "50px",
  },
}));

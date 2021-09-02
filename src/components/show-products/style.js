import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  contained: {
    marginTop: "250px",
    [theme.breakpoints.down(599)]: {
      marginTop: "180px",
    },
  },
  container: {
    marginBottom: "20px",
  },
}));

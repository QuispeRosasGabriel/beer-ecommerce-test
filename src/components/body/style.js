import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "300px",
    marginBottom: "100px",
    [theme.breakpoints.down(599)]: {
      marginTop: "140px",
    },
  },
}));

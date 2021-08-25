import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  item: {
    textAlign: "center",
    padding: "10px",
    backgroundImage: "",
    backgroundSize: "cover",
  },
  wrapper: {
    width: "100%",
    overflow: "hidden",
    //boxShadow: "5px 5px 20px 7px rgba(168, 168, 168, 1)",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;

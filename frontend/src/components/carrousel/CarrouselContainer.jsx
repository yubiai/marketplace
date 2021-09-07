import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const PREV = "PREV";

const useStyles = makeStyles({
  carouselcontainer: {
    display: "flex",
    marginLeft: "2rem",
    paddingLeft: "-2rem",
    marginRight:"2rem",
    paddingRight: "2rem",
    transition: (props) => (props.sliding ? "none" : "transform 1s ease"),
    transform: `${(props) => {
      if (!props.sliding) return "translateX(calc(-80% - 20px))";
      if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
      return "translateX(0%)";
    }}`,
  },
});

const CarrouselContainer = ({ children, sliding, dir }) => {
  const props = { sliding: sliding, dir: dir };
  const classes = useStyles(props);
  return (
    <div
      className={classes.carouselcontainer}
      dir={props.dir}
      sliding={props.sliding}
    >
      {children}
    </div>
  );
};

export default CarrouselContainer;

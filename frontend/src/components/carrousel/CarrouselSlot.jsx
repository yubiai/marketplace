import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  carouselslot: {
    flex: "1 0 100%",
    flexBasis: "100%",
    marginRight: "0px",
    order: (props) => props.order,
  },
});

const CarrouselSlot = ({ children, order }) => {
  const props = { order: order };
  const classes = useStyles(props);

  return (
    <div className={classes.carouselslot} order={props.order}>
      {children}
    </div>
  );
};

export default CarrouselSlot;

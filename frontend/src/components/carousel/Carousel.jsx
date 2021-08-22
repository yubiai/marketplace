import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSwipeable } from "react-swipeable";

import Wrapper from "./CarrouselComponents";

const useStyles = makeStyles((props) => ({
  item: {
    textAlign: "center",
    padding: "100px",
    backgroundImage: "",
    backgroundSize: "cover",
  },
  carouselcontainer: {
    display: "flex",
    transition: props.sliding ? "none" : "transform 1s ease",
    transform: `${(props) => {
      if (!props.sliding) return "translateX(calc(-80% - 20px))";
      if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
      return "translateX(0%)";
    }}`,
  },
  carouselslot: {
    flex: "1 0 100%",
    flexBasis: "80%",
    marginRight: "20px",
    order: props.order,
  },

  slidebutton: {
    color: "#ffffff",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "100",
    padding: "10px",
    backgroundColor: "#f66f3e",
    border: "1px solid white",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
    marginTop: "20px",
    textDecoration: "none",
    //float: props.float,

    "&:active": {
      position: "relative",
      top: "1px",
    },
    "&:focus": {
      outline: "0",
    },
  },
}));

const NEXT = "NEXT";
const PREV = "PREV";

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const initialState = { pos: 0, sliding: false, dir: NEXT };

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const Carrousel = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

  const slide = (dir) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Wrapper>
        <div
          className={classes.carouselcontainer}
          dir={state.dir}
          sliding={state.sliding}
        >
          {React.Children.map(props.children, (child, index) => (
            <div
              className={classes.carouselslot}
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </div>
          ))}
        </div>

        <button
          className={classes.slidebutton}
          onClick={() => slide(PREV)}
          float="left"
        >
          Anterior
        </button>
        <button
          className={classes.slidebutton}
          onClick={() => slide(NEXT)}
          float="right"
        >
          Siguiente
        </button>
      </Wrapper>
    </div>
  );
};

export default Carrousel;

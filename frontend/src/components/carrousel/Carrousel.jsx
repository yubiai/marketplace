import React, { useState, useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSwipeable } from "react-swipeable";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import Wrapper from "./Wrapper";
import CarrouselContainer from "./CarrouselContainer";
import CarrouselSlot from "./CarrouselSlot";
import "./Carrousel.css";

const useStyles = makeStyles({
  item: {
    textAlign: "center",
    padding: "100px",
    backgroundImage: "",
    backgroundSize: "cover",
    position: "relative",
  },
  slidebuttonLeft: {
    color: "#00ABD1",
    textDecoration: "none",
    padding: "-10px",
    paddingLeft: "-10px",
    paddingRight: "1px",
    display: "inline-block",
    cursor: "pointer",
    //position: "absolute",
    //top: '50%',
    marginTop: "5px",
    left: "0.7rem",
    boxShadow: "0px 3px 6px #00000029",
    opacity: "1",
    width: "45px",
    height: "45px",
    textDecoration: "none",
    background: "#FFFFFF",
    borderRadius: "40px",
    //transform: "translateY(-50%)",

    "&:focus": {
      outline: "0",
    },
  },
  slidebuttonRight: {
    background: "#FFFFFF",
    color: "#00ABD1",
    textDecoration: "none",
    padding: "-10px",
    paddingRight: "-5px",
    position:"relative",
    left: "-9px",
    //left: "0.7rem",
    display: "inline-block",
    cursor: "pointer",
    //position: "absolute",
    //top: '50%',
    marginTop: "5px",
    boxShadow: "0px 3px 6px #00000029",
    opacity: "1",
    width: "45px",
    height: "45px",
    textDecoration: "none",
    borderRadius: "40px",
    //transform: "translateY(-50%)",

    "&:focus": {
      outline: "0",
    },
  },
  child: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1000,
    padding: "0 1rem",
  },
});

const NEXT = "NEXT";
const PREV = "PREV";
const SCREEN_WIDTH_LG = 1100; // 5 slides
const SCREEN_WIDTH_G = 900; // 4 slides
const SCREEN_WIDTH_M = 767; // 3 slides
const SCREEN_WIDTH_S = 600; // 2 slides
const SCREEN_WIDTH_XS = 400; // 1 slide

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
  const [visibleSlides, setVisibleSlides] = useState(6);
  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

  useEffect(() => {
    function setSlideVisibilityResize() {
      const innerWidth = window.innerWidth;
      switch (true) {
        case innerWidth > SCREEN_WIDTH_G && innerWidth <= SCREEN_WIDTH_LG:
          setVisibleSlides(5);
          break;
        case innerWidth > SCREEN_WIDTH_M && innerWidth <= SCREEN_WIDTH_G:
          setVisibleSlides(4);
          break;
        case innerWidth > SCREEN_WIDTH_S && innerWidth <= SCREEN_WIDTH_M:
          setVisibleSlides(3);
          break;
        case innerWidth > SCREEN_WIDTH_XS && innerWidth <= SCREEN_WIDTH_S:
          setVisibleSlides(2);
          break;
        case innerWidth <= SCREEN_WIDTH_XS:
          setVisibleSlides(1);
          break;
        default:
          setVisibleSlides(props.slideVisibleDefault || 6);
          break;
      }
    }
    setSlideVisibilityResize();
    window.addEventListener("resize", setSlideVisibilityResize);
  }, []);

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
        <CarrouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => {
            let missingSlidesToShow;

            if (state.pos + visibleSlides > props.children.length) {
              missingSlidesToShow =
                state.pos + visibleSlides - props.children.length;
            }
            const indexInRange =
              index >= state.pos && index < state.pos + visibleSlides;
            const slideOutRangeFromZero = missingSlidesToShow
              ? index < state.pos && index <= missingSlidesToShow - 1
              : false;

            if (indexInRange || slideOutRangeFromZero) {
              return (
                <CarrouselSlot
                  key={index}
                  order={getOrder({ index: index, pos: state.pos, numItems })}
                >
                  {child}
                </CarrouselSlot>
              );
            }
          })}
        </CarrouselContainer>

        <span className={classes.child}>
          <KeyboardArrowLeftRoundedIcon
            className={classes.slidebuttonLeft}
            onClick={() => slide(PREV)}
          ></KeyboardArrowLeftRoundedIcon>
          <KeyboardArrowRightRoundedIcon
            className={classes.slidebuttonRight}
            onClick={() => slide(NEXT)}
          ></KeyboardArrowRightRoundedIcon>
        </span>
      </Wrapper>
    </div>
  );
};

export default Carrousel;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
const useStyles = makeStyles((theme) => ({
  moreIconDots: {
    display: "inline-flex",
    alignItems: "inherit",
    justifyContent: "inherit",
    marginLeft: "inherit",
    marginTop: "inherit",
    marginBottom: "inherit",
    color: "black",
    outline: "none !important",
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      outline: "none !important",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      right: "15px",
      top: "15px",
    },
  },
  link: {
    color: "#000",
    outline: "none",
    textDecoration: "none",
    "&:hover, &:focus, &:active": {
      color: "#000",
      outline: "none !important",
      textDecoration: "none",
    },
  },
}));

export default function ShortMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    setOptionsBasedOnScreenWidth();
    window.addEventListener("resize", () => {
      setOptionsBasedOnScreenWidth();
    });
  }, []);

  function setOptionsBasedOnScreenWidth() {
    if (window.innerWidth >= 600) {
      setOptions(["Pause Sell", "Sell a similar item"]);
    } else {
      setOptions(["Pause Sell", "Sell a similar item", "View", "Edit Item"]);
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        width: 50,
        maxBlockSize: "50px",
        display: "inline-block",
        paddingRight: "20px",
      }}
    >
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.moreIconDots}
      >
        <MoreHorizSharpIcon className={classes.moreIconDots} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginLeft: "inherit",
            marginTop: "-20px",
            marginBottom: "-5px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option === "View" ? (
              <Link className={classes.link} to="/preview">
                View
              </Link>
            ) : option === "Edit Item" ? (
              <Link className={classes.link} to="/edititem">
                Edit Item
              </Link>
            ) : (
              option
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  moreIconDots: {
    display: "inherit",
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
      top: 0,
      right: 0,
      width: "auto",
      padding: 0,
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

export default function LongMenu() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("menumailbox");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    setOptionsBasedOnScreenWidth();

    window.addEventListener("resize", setOptionsBasedOnScreenWidth);

    return () =>
      window.removeEventListener("resize", setOptionsBasedOnScreenWidth);
  }, []);

  const setOptionsBasedOnScreenWidth = useCallback(() => {
    if (window.innerWidth >= 600) {
      setOptions([t("Delete Chat"), t("Seller Information")]);
    } else {
      setOptions([
        t("Delete Chat"),
        t("Seller Information"),
        t("Chat"),
      ]);
    }
  }, [window, setOptions, t]);

  

  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
            {option === "Chat" ? (
              <Link className={classes.link} to="/chat">
                {t("Chat")}
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

import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import { useTranslation } from "react-i18next";

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
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "inline-flex",
      position: "absolute",
      right: "15px",
      top: "18px",
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

export default function MenuComplete() {
  const classes = useStyles();
  const { t } = useTranslation("menusalesactive");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  useEffect(() => {
    setOptionsBasedOnScreenWidth();

    window.addEventListener("resize", setOptionsBasedOnScreenWidth);

    return () =>
      window.removeEventListener("resize", setOptionsBasedOnScreenWidth);
  }, []);

  const setOptionsBasedOnScreenWidth = useCallback(() => {
    if (window.innerWidth >= 600) {
      setOptions([t("Details")]);
    } else {
      setOptions([
        t("Details"),
      ]);
    }
  }, [window, setOptions, t]);

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
            width: "23ch",
          },
        }}
      >
      <MenuItem
        className={classes.link}
        component={Link}
        to="/salescompletedetails"
        onClose={handleClose}
      >
        {t("Details")}
      </MenuItem>
        {/* {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option === "Details" ? (
              <a className={classes.link} target="_self" href="/salescompletedetails">
                {t("Details")}
              </a>
            ) : (
              option
            )}
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}

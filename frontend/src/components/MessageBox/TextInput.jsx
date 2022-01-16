import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { InputBase } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  wrapForm: {
    display: "flex",
    justifyContent: "center",
    width: "95%",
    margin: `${theme.spacing(0)} auto`,
    [theme.breakpoints.down(900)]: {
      justifyContent: "space-around",
    },
  },
  wrapText: {
    width: "100%",
    height: "33px",
    border: "1px solid #727272",
    top: "1.5rem",
    borderRadius: "10px",
  },
  button: {
    color: "#00ABD1",
    top: "0.2rem",
    paddingTop: "-0.5rem",
    maxWidth: "32px",
    minWidth: "38px",
    paddingRight: "",
    paddingLeft: "",
    height: "36px",
    marginRight: "-1.5rem",
    marginLeft: "1.5rem",
    marginTop: "0.5rem",
    borderRadius: "30px",
    backgroundColor: "#F5F5F5",
    backgroundSize: "16px",
    outline: "none !important",
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      outline: "none !important",
    },
    [theme.breakpoints.down(768)]: {
      marginRight: 0,
    },
  },
  attachButton: {
    color: "#00ABD1",
    marginTop: "0.75rem",
    marginRight: "3rem",
    marginLeft: "-2rem",
    height: "38px",
    boxShadow: "none",
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    outline: "none !important",
    transform: "rotate(25deg)",
    "&:hover, &:focus, &:active": {
      backgroundColor: "transparent",
      boxShadow: "none",
      outline: "none !important",
    },
    "&:hover": {
      outline: "none !important",
    },
    [theme.breakpoints.down(768)]: {
      marginLeft: 0,
    },
  },
  input: {
    marginTop: "13.5px",
    marginLeft: "-2rem",
    marginRight: "",
    fontSize: "12px",
    color: "#000",
    width: "100%",
    maxWidth: "711px",
    height: "33px",
    border: "1px solid #727272",
    background: "transparent",
    borderRadius: 8,
    paddingLeft: "1rem",
    [theme.breakpoints.down(900)]: {
      maxWidth: "75%",
    },
  },
}));

export const TextInput = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation("chat");
  return (
    <>
      {/* connect to backend endpoint db  */}
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
          />
          <Fab
            className={classes.attachButton}
            component="span"
            aria-label="add"
            variant="extended"
          >
            <AttachFileIcon />
          </Fab>
        </label>
        <InputBase
          disableTypography
          className={classes.input}
          placeholder={t("Chat")}
          inputProps={{ "aria-label": "contact" }}
        ></InputBase>
        <Button variant="contained" className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </>
  );
};

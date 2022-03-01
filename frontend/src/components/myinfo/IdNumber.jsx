import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "flex",
    fontFamily: "Open Sans",
  },
  btnSave: {
    display: "flex",
    alignItems: "center",
    left: "-75px",
    marginLeft: "auto",
    marginTop: "-10px",
    marginBottom: "-5px",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    fontFamily: "Open Sans",
    outline: "none !important",
    color: "#fff",
    fontWeight: "500",
    textTransform: "none",
    width: "100%",
    minWidth: "70px",
    maxWidth: "80px",
    justifyContent: "space-evenly",
    top: "0rem",
    "&:hover": {
      borderBottom: "none",
      outline: "none !important",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
  },
  dialogContent: {
    fontFamily: "Open Sans",
    marginTop: "-1.5rem",
  },
  textField: {
    '& label.Mui-focused': {
        color: '#00ABD1',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#00ABD1',
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#00ABD1',
          },
       },
  },
}));

export default function IdNumber() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation("myinfoeditId");
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <EditIcon
        style={{ color: "gray" }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      ></EditIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          disableTypography
          style={{
            fontFamily: "Open Sans",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          id="form-dialog-title"
        >
          {t("Modify ID Number")}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("ID number")}
            type="numbers"
            fullWidth
            className={classes.textField}
          />
        </DialogContent>
        <DialogContentText
          disableTypography
          style={{
            fontSize: "12.3px",
            fontFamily: "Open Sans",
            fontWeight: "regular",
            marginLeft: "1rem",
            marginRight: "1rem",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
          }}
        >
          {t("Please note that in order to receive shipments you must use a valid ID number.")}
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btnSave}>
            {t("Save")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

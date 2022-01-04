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
    fontFamily: "Open Sans",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    fontWeight: "500",
    textTransform: "none",
    outline: "none !important",
    minWidth: "60px",
    maxWidth: "60px",
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
}));

export default function CellphoneNumber() {
  const [open, setOpen] = React.useState(false);
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
          Modify cellphone number
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Cellphone number"
            type="numbers"
            fullWidth
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
          Remember that you have the option to be contacted via Telegram.
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btnSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
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
    marginTop: "10px",
    marginBottom: "-5px",
    borderRadius: "10px",
    fontFamily: "Open Sans",
    backgroundColor: "#00ABD1",
    color: "#fff",
    fontWeight: "500",
    textTransform: "none",
    outline: "none !important",
    width: "100%",
    minWidth: "70px",
    maxWidth: "80px",
    justifyContent: "space-evenly",
    top: "0rem",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      outline: "none !important",
      backgroundColor: "transparent",
    },
  },
  dialogContent: {
    fontFamily: "Open Sans",
    marginTop: "-1rem",
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

export default function ShipAddress() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation("myinfoeditShipping");
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
          {t("Modify shipping address")}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Street")}
            type="text"
            fullWidth
            className={classes.textField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Number")}
            type="numbers"
            width="204px"
            className={classes.textField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Apartment/House(Optional)")}
            type="text"
            width="204px"
            className={classes.textField}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Zip Code")}
            type="text"
            width="204px"
            className={classes.textField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("City")}
            type="text"
            width="204px"
            className={classes.textField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Province/State")}
            type="province"
            width="204px"
            className={classes.textField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("Country")}
            type="country"
            width="204px"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btnSave}>
           {t("Save")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

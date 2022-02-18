import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  deliveryTitle: {
    fontSize: "18px !important",
    color: "#BABABA !important",

  },
  deliveryAddress: {
    alignItems: "center",
    flexDirection:"row !important",
  },
  editDefaultAddress: {
    fontSize: "14px !important",
    color: "#00ABD1",
    position:"relative",
    top: "-3px",
    textTransform: "none",
  },
  borderDefAddress: {
    border: "1px solid #323232",
    boxSizing: "border-box",
    borderRadius: "5px",
    height: "33px"
  },
  borderNewAddress: {
    border: "1px solid #BABABA",
    boxSizing: "border-box",
    borderRadius: "5px",
    height: "230px",
    marginTop: "10px",
    [theme.breakpoints.down(1600)]: {
      height: "270px",
    },
    [theme.breakpoints.down(1200)]: {
      height: "390px",
    },
    [theme.breakpoints.down('xs')]: {
      height: "390px",

    },
  },
  radioDefaultAddress: {
    marginTop: "-5px !important",
    marginLeft:"8px !important",
  },
  radioNewAddress: {
    marginLeft:"8px !important",
  },
  textStreet: {
    marginTop: "-4px",
    marginLeft: "6px",
    width: "100%",
    maxWidth: "500px",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: "300px",
    },
    
  },
  
  
}));

export default function ShippDetails() {
    const classes = useStyles();
    const { t, i18n } = useTranslation("shippDetails");
    

return (
  <FormControl>
                <FormLabel disableTypography className={classes.deliveryTitle} id="address">Select delivery location</FormLabel>
                <RadioGroup
                  aria-labelledby="deliveryLocations"
                  defaultValue="defaultAddress"
                  name="radio-buttons-group"
                >
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className={classes.borderDefAddress}>
                    <FormControlLabel
                      value="defaultAddress"
                      control={<Radio className={classes.radioDefaultAddress}/>}
                      label="Default address"
                    />

                    <Button className={classes.editDefaultAddress}>Edit address</Button>
                  </Grid> 
                  <div className={classes.borderNewAddress}>
                    <FormControlLabel
                      value="newAddress"
                      control={<Radio className={classes.radioNewAddress}/>}
                      label="New Address"
                    />
                    <LocalShippingIcon />
                    <DialogTitle
                      disableTypography
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "18px",
                        color: "#BABABA",
                        height: "27px",
                        marginTop: "-26px",
                        marginLeft: "6px",
                      }}
                      id="form-dialog-title"
                    >
                      {t("New delivery address")}
                    </DialogTitle>
                    <DialogContent >
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Street")}
                        type="text"
                        fullWidth
                        className={classes.textStreet}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Number")}
                        type="numbers"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Apartment/House(Optional)")}
                        type="text"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Zip Code")}
                        type="text"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("City")}
                        type="text"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Province/State")}
                        type="province"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Country")}
                        type="country"
                        width="204px"
                        style={{marginTop: "-4px", marginLeft: "6px"}}
                      />
                    </DialogContent>
                  </div>
                </RadioGroup>
              </FormControl>
    );
}
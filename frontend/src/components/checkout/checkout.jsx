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
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
    // width: '100%',
    // maxWidth: '801px',
    // backgroundColor: theme.palette.background.paper,
    // padding: '20px',
    fontFamily: "Open Sans",
  },
  gridCheckout: {
    display: 'flex',
    
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'10px',
    // overflowY: 'scroll',
    height: '740px',
    maxWidth: '801px',
    width: '100%',
    // [theme.breakpoints.down(628)]: {
    //   width: '100%',
    //  },
  },
  gridSummary: {
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'10px',
    // overflowY: 'scroll',
    height: '522px',
    maxWidth: '477px',
    width: '100%',
    // [theme.breakpoints.down(628)]: {
    //   width: '100%',
    //  },
  },
  backToShop: {
    flexDirection:"row",
    display:"flex",
    position: "relative",
    alignItems: "center",

  },
  backToShopIcon: {
    width: "17px",
    height: "23px",
    position: "relative",
    top: "-1px"
  },
  backToShopText: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#000000",
    '&:hover': {
      color: "#00ABD1",
      cursor: 'pointer',
      textDecoration: 'none',
    }
  },
  checkoutTitle: {
    fontSize: "20px",
    fontWeight: "700",
  },
  shippingTitle: {
    fontSize: "20px",
    fontWeight: "600",
  },
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
    top: "-3px"

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
  shippingMethod: {
    width: "379px",
    height: "32px",
    marginTop: "10px",
    backgroundColor: "#00ABD1",
    borderRadius: "5px",
    fontSize: "16px",
    lineHeight: "24px",
    color: "white",
    textTransform: "none",
    '&:hover': {
      color: '#00ABD1',
      backgroundColor: 'White',
      },
  },
  timeBox: {
    width: "36px",
    height: "42px",
    border: "1px solid #BABABA",
    boxSizing: "border-box",
    borderRadius: "5px",
  },
  borderEscrow: {
    border: "1px solid #BABABA",
    boxSizing: "border-box",
    borderRadius: "5px",
    height: "126px",
    marginTop: "10px",
    [theme.breakpoints.down(1600)]: {
      height: "200px",
    },
    [theme.breakpoints.down(1200)]: {
      height: "260px",
    },
    [theme.breakpoints.down('xs')]: {
      height: "2600px",

    },
  },
  
}));

export default function Checkout() {
    const classes = useStyles();
    const { t, i18n } = useTranslation("checkout");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="flex-start"
          direction="row"
          justifyContent="center"
          className={classes.root}
            >
          <Grid direction="column" item xs={10} md={5} className={classes.gridCheckout}>
            <div className={classes.backToShop}>
              <Link className={classes.backToShopText}>
              <ArrowBackIosIcon className={classes.backToShopIcon} />
              Back to Shopping
              </Link>
            </div>
            <div style={{marginLeft:"15px", marginTop:"20px"}}> 
              <h3 className={classes.checkoutTitle}>{t("Checkout")}</h3>
              <h4 className={classes.shippingTitle}>Shipping Details</h4>
              <FormControl>
                <FormLabel disableTypography className={classes.deliveryTitle} id="address">Select delivery location</FormLabel>
                <RadioGroup
                  aria-labelledby="deliveryLocations"
                  defaultValue="defaultAddress"
                  name="radio-buttons-group"
                >
                  <div className={classes.borderDefAddress}>
                    <FormControlLabel
                      value="defaultAddress"
                      control={<Radio className={classes.radioDefaultAddress}/>}
                      label="Default address"
                    />
                    <Button className={classes.editDefaultAddress}>Edit</Button>
                  </div> 
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
              <div style={{marginTop:"20px"}}>
                <h4 className={classes.shippingTitle}>Shipping Method</h4>
                <Button className={classes.shippingMethod}>Manage shipment with the seller</Button>
              </div>
              <div className={classes.borderEscrow}>
                
                    <DialogTitle
                      disableTypography
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "18px",
                        color: "#BABABA",
                        height: "27px",
                        
                        
                      }}
                      id="form-dialog-title"
                    >
                      {t("Payment waiting on escrow")}
                    </DialogTitle>
                    <DialogContent >
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Days")}
                        type="numbers"
                        fullWidth
                        className={classes.timeBox}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Hours")}
                        type="numbers"
                        width="204px"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("")}
                        type="text"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Minutes")}
                        type="numbers"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Seconds")}
                        type="text"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                    </DialogContent>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={5} className={classes.gridSummary}>
            <h3>Order Summary</h3>
            <ListItem>
                <ListItemText>Product </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
             <Divider
                    style={{ backgroundColor: "gray", height: "1px" }}
                  />
            <ListItem>
                <ListItemText>Sub total </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Yubiai Fee </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>UBI Burner Fee </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <Divider
                    style={{ backgroundColor: "gray", height: "1px" }}
                  />
            <ListItem>
                <ListItemText>Order Total </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem> 
                      
          </Grid>
           
</Grid>
  );
}
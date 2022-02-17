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
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    // maxWidth: '801px',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
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
    top: "-4px"
  },
  backToShopText: {
    fontSize: "20px",
    fontWeight: "600",
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
          justifyContent="center"  >
          <Grid direction="column" item xs={10} md={5} className={classes.gridCheckout}>
            <div className={classes.backToShop}>
              <ArrowBackIosIcon className={classes.backToShopIcon} />
              <h1 className={classes.backToShopText}>Back to Shopping</h1>
            </div>  
            <h3 className={classes.checkoutTitle}>{t("Checkout")}</h3>
            <h4 className={classes.shippingTitle}>Shipping Details</h4>
            <FormControl>
              <FormLabel disableTypography className={classes.deliveryTitle} id="address">Select delivery location</FormLabel>
              <RadioGroup
                aria-labelledby="deliveryLocations"
                defaultValue="defaultAddress"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="defaultAddress"
                  control={<Radio />}
                  label="Default address"
                />
                <FormControlLabel
                  value="newAddress"
                  control={<Radio />}
                  label="New Address"
                />
              </RadioGroup>
            </FormControl>

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
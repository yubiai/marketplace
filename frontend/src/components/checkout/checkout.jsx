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
import ShippDetails from "./shippDetails";
import EscrowPayment from "./escrowPayChk";
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
    height: '730px',
    maxWidth: '801px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '850px',
     },
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
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      position: 'relative',
      top: '10px',
     },
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
              <ShippDetails />
              <div style={{marginTop:"20px"}}>
                <h4 className={classes.shippingTitle}>Shipping Method</h4>
                <Button className={classes.shippingMethod}>Manage shipment with the seller</Button>
              </div>
                  <EscrowPayment />
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
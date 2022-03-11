import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
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
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import ShippDetails from "./shippDetails";
import EscrowPayment from "./escrowPayChk";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
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
      height: '880px',
     },
  },
  gridSummary: {
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'10px',
    // overflowY: 'scroll',
    height: '315px',
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
    marginBottom: "10px",
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
  orderSumTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#000000",
    paddingTop: "7px",
  },
  dividerSummary: {
    backgroundColor: "gray",
    height: "1px"
  },
  subtotalGrid: {
    flexDirection:"row",
    display: "inline-flex",
    maxWidth: "460px",
    width:"100%",
    marginTop:"5px"
  },
  subtotalTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    color: "#323232",
    marginLeft: "5px",
  },
  subtotalGridTitle: {
    justifyContent:"flex-end",
    flexDirection:"row",
    display: "inline-flex",
    
  },
  subtotalPrice: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    color: "#323232"
  },
  subtotalPriceFiat: {
    color:"#BABABA",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    marginLeft:"5px"
  },
  productTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    color: "#323232",
    marginLeft:"5px"
  },
  productGrid: {
    flexDirection:"row",
    display: "inline-flex",
    maxWidth: "460px",
    width:"100%",
    marginTop:"5px"
  },
  yubFeeGrid: {
    flexDirection:"row",
    display: "inline-flex",
    maxWidth: "460px",
    width:"100%",
    marginTop:"5px"
  },
  YubFeeTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    color: "#323232",
    marginLeft: "5px",
  },
  ubiBurnFeeGrid: {
    flexDirection:"row",
    display: "inline-flex",
    maxWidth: "460px",
    width:"100%",
    marginTop:"5px"
  },
  ubiBurnFeeTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    color: "#323232",
    marginLeft: "5px",
  },
  orderTotalGrid: {
    flexDirection:"row",
    display: "inline-flex",
    maxWidth: "460px",
    width:"100%",
    marginTop:"5px"
  },
  orderTotalTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    color: "#323232",
    marginLeft: "5px",
  },
  payEscButGrid:{
    marginTop:"20px",
    justifyContent:"center",
    display: "flex",
    [theme.breakpoints.down('xs')]: {
      marginTop: '5px',
     },
  },
  payWEscrow: {
    width: "210px",
    height: "32px",
    marginTop: "10px",
    backgroundColor: "#BABABA80 !important",
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
  responOrderSum: {
    marginLeft: "17px",
    marginRight: "10px",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "17px",
      marginRight: "10px",
     },
  },
}));

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    borderRadius:"5px",
    fontSize:"14px",
    color:"black",
    marginLeft: "10px",
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
              <Link to="/#" className={classes.backToShopText}>
              <ArrowBackIosIcon className={classes.backToShopIcon} />
              {t("Back to Shopping")}
              </Link>
            </div>
            <div style={{marginLeft:"15px", marginTop:"20px"}}> 
              <h3 className={classes.checkoutTitle}>{t("Checkout")}</h3>
              <h4 className={classes.shippingTitle}>{t("Shipping Details")}</h4>
              <ShippDetails />
              <div style={{marginTop:"20px"}}>
                <h4 className={classes.shippingTitle}>{t("Shipping Method")}</h4>
                <Button
                   component={Link}
                   to="/mngshipesc"
                   className={classes.shippingMethod}>{t("Manage shipment with the seller")}</Button>
              </div>
                  <EscrowPayment />
            </div>
          </Grid>
        <Grid direction="column" style={{height:"677px"}}>  
          <Grid item xs={10} md={5} className={classes.gridSummary}>
           <div className={classes.responOrderSum}>
            <h3 className={classes.orderSumTitle}>{t("Order Summary")}</h3>
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.productGrid}> 
                <p className={classes.productTitle}>{"Product Name"} </p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>  
            </Grid>
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.productGrid}> 
                <p className={classes.productTitle}>{"Product Name"} </p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>  
            </Grid>    
             <Divider className={classes.dividerSummary}/>
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.subtotalGrid}> 
                <p className={classes.subtotalTitle}>{t("Sub total")}</p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>  
            </Grid>  
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.yubFeeGrid}> 
                <p className={classes.YubFeeTitle}>{t("Yubiai Fee")} </p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>  
            </Grid>  
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.ubiBurnFeeGrid}> 
                <p className={classes.ubiBurnFeeTitle}>{t("UBI Burner Fee")}</p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>  
            </Grid>
            <Divider className={classes.dividerSummary}/>
            <Grid variant="fullWidth"
                  alignItems="flex-start"
                  direction="row"
                  justify="space-between"
                  className={classes.orderTotalGrid}> 
                <p className={classes.orderTotalTitle}>{t("Order Total")} </p>
                <Grid className={classes.subtotalGridTitle}>
                  <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                  <p className={classes.subtotalPriceFiat}>{"(Price DAI)"}</p>
                </Grid>
            </Grid>
            </div> 
             <Grid className={classes.payEscButGrid}>
              <LightTooltip  title={t("Once both parts have agreed on the time of the payment being held on the escrow, the seller will assign it and you will be able to send the payment.")} arrow>
                <Button className={classes.payWEscrow}>{t("Pay with Escrow")}</Button>
              </LightTooltip>
            </Grid>
          </Grid>
        </Grid>  
     </Grid>
  );
}
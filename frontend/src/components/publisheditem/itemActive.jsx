import React from 'react';
import styles from "./itemActiveStyles";
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
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Link from "@material-ui/core/Link";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

export default function ItemActive() {
    const classes = styles();
    const mainImage = require("../../media/airmax1.png");
    const sideMainImage = require("../../media/airmax1.png");
    const sideImageOne = require("../../media/airmax2.png");
    const sideImageTwo = require("../../media/airmax3.png");
    const { t, i18n } = useTranslation("itemActive");
    const [currency, setCurrency] = React.useState('UBI');
    

return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="flex-start"
          direction="colummn"
          justifyContent="center"
          className={classes.gridRoot}
          style={{maxHeight: '80vh', overflowY: 'scroll'}}
            >
            <Grid direction="row">
                 <div style={{flexDirection:"row", display: "flex",border:"1px solid blue", marginTop:"20px"}}>
                    <div style={{flexDirection:"column", display: "flex", width:"100%", maxWidth: "65px", minWidth:"65px",justifyContent:"center", alignItems:"center", border:"1px solid green"}}>
                        <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                        alt="{imgjson}"
                        src={sideMainImage.default}
                        />
                        <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                        alt="{imgjson}"
                        src={sideImageOne.default}
                        />
                        <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                        alt="{imgjson}"
                        src={sideImageTwo.default}
                        />
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <img style={{width:"100%", maxWidth: "500px", minWidth:"500px", height:"%100", maxHeight: "272px", minHeight:"272px"}}
                            alt="{imgjson}"
                            src={mainImage.default}
                        />
                    </div>    
                    <div style={{flexDirection:"column", display: "flex", width:"100%", maxWidth: "367px", minWidth:"367px", maxHeight: "676px", minHeight:"676px", border:"1px solid brown"}}>
                        <span>
                            <a>{"condition"} {"quantity"} sold</a> 
                            <h4 className={classes.productTitle}>{t("Product Title")}</h4>
                        </span>
                        <div style={{flexDirection:"row", display: "flex"}}>
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <a className={classes.opinions}> {"quantity"} opinions</a>
                        </div>
                        <span style={{flexDirection:"row", display: "flex"}}>
                            <a className={classes.Price}>{"Price UBI"}</a>
                            <a className={classes.PriceFiat}>{"(Price ARS/USD)"}</a>
                        </span>
                        <span style={{flexDirection:"column", display: "flex"}}>
                            <a className={classes.Fee}>{t("5% additional for Yubiai Fee")}</a>
                            <a className={classes.Fee}>{t("5% additional UBI Burner")}</a>
                        </span>   
                        <Button className={classes.shippingMethod}>{t("Buy Now")}</Button>
                    </div>
                </div>        
                <div style={{flexDirection:"column", display: "flex", border:"1px solid blue"}}> 
                    <Divider style={{width:"100%", maxWidth: "710px", height: "1px", color: "rgba(186, 186, 186, 1)"}}/>
                    <div style={{flexDirection:"column", display: "flex", border:"1px solid pink"}}>
                        <span style={{flexDirection:"column", display: "flex"}}>
                                <p>Seller posts</p>
                        </span>
                        <div style={{flexDirection:"row", display: "flex"}}>
                            <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px", border:"1px solid red"}}>
                                <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                alt="{imgjson}"
                                src={sideMainImage.default}
                                />
                                <span style={{flexDirection:"row", display: "flex"}} >
                                    <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                    <p className={classes.subtotalPriceFiat}>{"(Price ARS/USD)"}</p>
                                </span>
                                <p>{"Product title"}</p>     
                            </div>
                            <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px", border:"1px solid red"}}>
                                <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                alt="{imgjson}"
                                src={sideMainImage.default}
                                />
                                <span style={{flexDirection:"row", display: "flex"}} >
                                    <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                    <p className={classes.subtotalPriceFiat}>{"(Price ARS/USD)"}</p>
                                </span>
                                <p>{"Product title"}</p>     
                            </div>
                            <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px", border:"1px solid red"}}>
                                <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                alt="{imgjson}"
                                src={sideMainImage.default}
                                />
                                <span style={{flexDirection:"row", display: "flex"}} >
                                    <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                    <p className={classes.subtotalPriceFiat}>{"(Price ARS/USD)"}</p>
                                </span>
                                <p>{"Product title"}</p>     
                            </div>
                            <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px", border:"1px solid red"}}>
                                <img style={{width:"100%", maxWidth: "60px", minWidth:"60px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                alt="{imgjson}"
                                src={sideMainImage.default}
                                />
                                <span style={{flexDirection:"row", display: "flex"}} >
                                    <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                    <p className={classes.subtotalPriceFiat}>{"(Price ARS/USD)"}</p>
                                </span>
                                <p>{"Product title"}</p>     
                            </div>             
                        </div>
                    </div>                
                </div>
                <div style={{marginTop:"20px"}}>
                    <h4 className={classes.shippingTitle}>{t("Shipping Method")}</h4>
                    <Button className={classes.shippingMethod}>{t("Manage shipment with the seller")}</Button>
                </div>    
                <div>
                    <p>Bla</p>
                </div>
            </Grid>
            
     </Grid>
  );
}
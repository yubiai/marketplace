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
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
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
        //   style={{maxHeight: '80vh', overflowY: 'scroll'}}
            >
            <Grid direction="row">
                 <div className={classes.sideImgGrid} >
                    <div className={classes.sideImgDiv}>
                        <img className={classes.sideImage}  src={mainImage}
                        alt="{imgjson}"
                        src={sideMainImage.default}
                        />
                        <img className={classes.sideImage}
                        alt="{imgjson}"
                        src={sideImageOne.default}
                        />
                        <img className={classes.sideImage}
                        alt="{imgjson}"
                        src={sideImageTwo.default}
                        />
                    </div>
                    <div style={{flexDirection:"column", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"75px"}}>
                            <img style={{width:"100%", maxWidth: "500px", minWidth:"500px", height:"%100", maxHeight: "272px", minHeight:"272px"}}
                                alt="{imgjson}"
                                src={mainImage.default}
                            />
                        </div>
                        <div style={{flexDirection:"column", display: "flex"}}>
                            <Divider style={{width:"100%", maxWidth: "710px", height: "1px", color: "rgba(186, 186, 186, 1)"}}/>
                            <span style={{flexDirection:"column", display: "flex"}}>
                                    <p className={classes.sellerPosts}>Seller posts</p>
                            </span>
                            <div style={{flexDirection:"row", display: "flex"}}>
                                <KeyboardArrowLeftRoundedIcon
                                    className={classes.slidebuttonLeft}
                                    // onClick={() => slide(PREV)}
                                ></KeyboardArrowLeftRoundedIcon>
                                <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px"}}>
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
                                <div style={{flexDirection:"column", display: "flex",width:"100%", maxWidth: "180px", minWidth:"180px", height:"%100", maxHeight: "163px", minHeight:"163px"}}>
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
                                <KeyboardArrowRightRoundedIcon
                                    className={classes.slidebuttonRight}
                                    // onClick={() => slide(NEXT)}
                                ></KeyboardArrowRightRoundedIcon>             
                            </div>
                        </div>
                    </div>        
                    <div style={{flexDirection:"column", display: "flex", width:"100%", maxWidth: "367px", minWidth:"367px", maxHeight: "610px", minHeight:"610px",justifyContent:"center", alignItems:"center", border:"1px solid #bababa", borderRadius:"5px"}}>
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
                        <span style={{flexDirection:"row", display: "flex", marginLeft:"-50px"}}>
                            <a className={classes.Price}>{"Price UBI"}</a>
                            <a className={classes.PriceFiat}>{"(Price ARS/USD)"}</a>
                        </span>
                        <span style={{flexDirection:"column", display: "flex"}}>
                            <a className={classes.Fee}>{t("5% additional for Yubiai Fee")}</a>
                            <a className={classes.Fee}>{t("5% additional UBI Burner")}</a>
                            <span style={{flexDirection:"row", display:"flex"}}>
                                <LocationOnIcon /><a className={classes.delivery}>{"Deliver to"}{"Location"}</a>
                            </span>
                            <span style={{flexDirection:"row", display:"flex"}}>
                                <LocalShippingIcon /><a className={classes.manageShipping}>{t("Manage shipment with the seller")}</a>
                            </span>
                            <a className={classes.Fee}>{t("Select your size")}</a>
                            <span style={{flexDirection:"row", display:"flex"}}>
                                <a className={classes.sizeRect}>{"6"}</a>
                                <a className={classes.sizeRect}>{"6,5"}</a>
                                <a className={classes.sizeRect}>{"7"}</a>
                                <a className={classes.sizeRect}>{"9"}</a>
                                <a className={classes.sizeRect}>{"11"}</a>
                                <a className={classes.sizeRect}>{"12"}</a>
                            </span>
                            <a className={classes.color}>{t("Color: ")} {"Pick Color"}</a>
                            <a className={classes.stock}>{t("Only ")}{"n "}{"in stock -order soon"}</a>
                            <span style={{flexDirection:"row", display:"flex"}}>
                                <a className={classes.buy}>{"Buy: "}</a>
                                <TextField
                                    id="filled-number"
                                    label={t("unit")}
                                    style={{width:"45px"}}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                        
                                    }}
                                    variant="standard"
                                    size="small"
                                    />
                                <a className={classes.available}>{"(n "}{t("available)")}</a>
                                
                            </span>   
                        </span>   
                        <Button className={classes.btnBuyNow}>{t("Buy Now")}</Button>
                        <Button  disabled className={classes.btnAddCart}>{t("Add to cart")}</Button>
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
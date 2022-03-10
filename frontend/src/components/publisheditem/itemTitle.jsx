import React from 'react';
import styles from "./itemActiveStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { useTranslation } from "react-i18next";

export default function ItemTitle() {
    const classes = styles();
    const { t, i18n } = useTranslation("itemTitle");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <div className={classes.itemTitleDiv}>
                        <span>
                            <a>{"condition"} {"quantity "}{t("sold")}</a> 
                            <h4 className={classes.productTitle}>{t("Product Title")}</h4>
                        </span>
                        <div style={{flexDirection:"row", display: "flex"}}>
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <StarBorderOutlinedIcon className={classes.starsReputation} />
                            <a className={classes.opinions}> {"quantity"} {t("opinions")}</a>
                        </div>
                        <span style={{flexDirection:"row", display: "flex", marginLeft:"-50px"}}>
                            <a className={classes.Price}>{"Price UBI"}</a>
                            <a className={classes.PriceFiat}>{"(Price DAI)"}</a>
                        </span>
                        <span style={{flexDirection:"column", display: "flex"}}>
                            <a className={classes.Fee}>{t("0.3% additional for Yubiai Fee")}</a>
                            <a className={classes.Fee}>{t("0.3% additional UBI Burner")}</a>
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
                            <a className={classes.stock}>{t("Only ")}{"n "}{t("in stock -order soon")}</a>
                            <span style={{flexDirection:"row", display:"flex", justifyContent:"space-around"}}>
                                <a className={classes.buy}>{t("Buy: ")}</a>
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
        );
}

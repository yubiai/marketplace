import React from 'react';
import styles from "./itemActiveStyles";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import { useTranslation } from "react-i18next";

export default function ImgAndSellerPosts() {
    const classes = styles();
    const mainImage = require("../../media/airmax1.png");
    const sideMainImage = require("../../media/airmax1.png");
    const sideImageOne = require("../../media/airmax2.png");
    const sideImageTwo = require("../../media/airmax3.png");
    const { t, i18n } = useTranslation("ImgNSeller");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <div className={classes.mainImgNdSellDiv}>
                        <div className={classes.mainImgDiv}>
                            <img className={classes.mainImg} 
                                alt="{imgjson}"
                                src={mainImage.default}
                            />
                        </div>
                        <div className={classes.sellerGrid}>
                            <Divider className={classes.divider} />
                            <span className={classes.sellTitleSpan}>
                                    <p className={classes.sellerPosts}>Seller posts</p>
                            </span>
                            <div className={classes.mainSellerPostsDiv}>
                                <KeyboardArrowLeftRoundedIcon
                                    className={classes.slidebuttonLeft}
                                    // onClick={() => slide(PREV)}
                                ></KeyboardArrowLeftRoundedIcon>
                                <div className={classes.firstSellerPostsDiv}>
                                    <img className={classes.firstSellerImg}
                                    alt="{imgjson}"
                                    src={sideMainImage.default}
                                    />
                                    <span className={classes.firstSellerSpanPrice}>
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.secondSellerPostsDiv}>
                                    <img className={classes.secondSellerImg} 
                                    alt="{imgjson}"
                                    src={sideMainImage.default}
                                    />
                                    <span className={classes.secondSellerSpanPrice}>
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.thirdSellerPostsDiv}>
                                    <img style={{width:"100%", maxWidth: "106px", minWidth:"106px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                    alt="{imgjson}"
                                    src={sideMainImage.default}
                                    />
                                    <span style={{flexDirection:"row", display: "flex"}} >
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.fourthSellerPostsDiv}>
                                    <img style={{width:"100%", maxWidth: "106px", minWidth:"106px", height:"%100", maxHeight: "60px", minHeight:"60px", marginBottom: "15px"}}
                                    alt="{imgjson}"
                                    src={sideMainImage.default}
                                    />
                                    <span style={{flexDirection:"row", display: "flex"}} >
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
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
    );
}
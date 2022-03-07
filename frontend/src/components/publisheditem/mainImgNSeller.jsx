import React from 'react';
import styles from "./itemActiveStyles";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import ImageIcon from "@material-ui/icons/Image";
import { useTranslation } from "react-i18next";

export default function ImgAndSellerPosts() {
    const classes = styles();
    const { t, i18n } = useTranslation("ImgNSeller");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <div className={classes.mainImgNdSellDiv}>
                        <div className={classes.mainImgDiv}>
                            <ImageIcon  className={classes.mainImg} />
                        </div>
                        <div className={classes.sellerGrid}>
                            <Divider className={classes.divider} />
                            <span className={classes.sellTitleSpan}>
                                    <p className={classes.sellerPosts}>{t("Seller posts")}</p>
                            </span>
                            <div className={classes.mainSellerPostsDiv}>
                                <KeyboardArrowLeftRoundedIcon
                                    className={classes.slidebuttonLeft}
                                    // onClick={() => slide(PREV)}
                                ></KeyboardArrowLeftRoundedIcon>
                                <div className={classes.firstSellerPostsDiv}>
                                    <ImageIcon className={classes.firstSellerImg} />
                                    <span className={classes.firstSellerSpanPrice}>
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.secondSellerPostsDiv}>
                                    <ImageIcon className={classes.secondSellerImg} />
                                    <span className={classes.secondSellerSpanPrice}>
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.thirdSellerPostsDiv}>
                                    <ImageIcon className={classes.thirdSellerImg} />
                                    <span className={classes.thirdSellerSpanPrice} >
                                        <p className={classes.subtotalPrice}>{"Price UBI"}</p>
                                        <p className={classes.subtotalPriceFiat}>{"(Price Fiat)"}</p>
                                    </span>
                                    <p>{"Product title"}</p>     
                                </div>
                                <div className={classes.fourthSellerPostsDiv}>
                                    <ImageIcon className={classes.fourthSellerImg} />
                                    <span className={classes.thirdSellerSpanPrice} >
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
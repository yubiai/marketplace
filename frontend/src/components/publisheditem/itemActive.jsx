import React from 'react';
import styles from "./itemActiveStyles";
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import SideImg from "./sideImg";
import ImgAndSellerPosts from "./mainImgNSeller";
import ItemTitle from "./itemTitle";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";

export default function ItemActive() {
    const classes = styles();
    const { t, i18n } = useTranslation("itemActive");
    const [currency, setCurrency] = React.useState('UBI');
    

return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="flex-start"
          direction="colummn"
          justifyContent="center"
          className={classes.gridRoot}>
            <Grid direction="row">
                <div>
                    <a href="/" className={classes.backToShopText}>  
                         <ArrowBackIosIcon className={classes.backToShopIcon} />
                    {t("Back to Shopping")}
                    </a>
                </div>
                <div className={classes.sideImgGrid}>
                    <div className={classes.imgGridContainer}>
                        {/* first component */}
                        <SideImg />
                        {/* second component */}
                        <ImgAndSellerPosts />
                    </div>
                    {/* third component */}
                    <ItemTitle />
                </div>  
                <Divider className={classes.dividerFullWidth} />      
                <div style={{marginTop:"20px"}}>
                    <span>
                        <h4 className={classes.descriptionTitle}>{t("Product Description")}</h4>
                        <p>{t("Item description field")}</p>
                    </span>    
                </div>    
                
            </Grid>
            
     </Grid>
  );
}
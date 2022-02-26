import React from 'react';
import styles from "./itemActiveStyles";

export default function SideImg() {
    const classes = styles();
    const sideMainImage = require("../../media/airmax1.png");
    const sideImageOne = require("../../media/airmax2.png");
    const sideImageTwo = require("../../media/airmax3.png");

return (
     <div className={classes.sideImgDiv}>
        <img className={classes.sideImage}  
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
    );
}      
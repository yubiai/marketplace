import React from 'react';
import ImageIcon from "@material-ui/icons/Image";
import styles from "./itemActiveStyles";

export default function SideImg() {
    const classes = styles();
    

return (
     <div className={classes.sideImgDiv}>
        <ImageIcon className={classes.sideImage}/>
        <ImageIcon className={classes.sideImage}/>
        <ImageIcon className={classes.sideImage}/>
      </div>
    );
}      
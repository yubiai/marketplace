import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useTranslation } from "react-i18next";
import GroupedButtons from "./buttonCounter";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    buttonCart: {
        // position: absolute;
        width: "116px",
        height: "21px",
        // left: "246px",
        // top: 370px,
        fontFamily: "Open Sans",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#00ABD1",
        backgroundColor: "transparent",
        boxShadow: "none",
        "&:hover": {
             backgroundColor: "transparent",
             boxShadow: "none",
        },
    },
}));
export default function Cart() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("orders");
  //integrar el hardcodeado del orderImage 
  //const cartImage = require("../../media/Shoes-PNG-File.png");
 
 return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="flex-start"
          direction="row"
          justifyContent="center"  >
        <h1>{"Cart"}{"()"}</h1>
        <Grid
          item
          xs={12}
          md={12}
        >
        <ListItem direction="column" style={{flexDirection:"column", justifyContent:"flex-start", display:"block"}}>
            <ListItemText>{"Product Name 1"} </ListItemText>
            <span>{"Shipping cost"}</span> 
        </ListItem>
        <div style={{flexDirection:"row", display:"flex", alignItems:"center"}}>
         <ListItem direction="row" style={{maxWidth:"531px"}}>             
                  <Button
                    variant="contained"
                    secondary="Remove"
                    className={classes.buttonCart}
                  >
                    {t("Remove")}
                  </Button>
                  <Button  variant="contained" className={classes.buttonCart}>
                    {t("Buy Now")}
                  </Button>
                  <Button c variant="contained" className={classes.buttonCart}>
                    {t("Save for later")}
                  </Button>
        </ListItem>      
         <GroupedButtons />
         <span>{"UBI Price"}</span> 
        </div>    
           
            
        
        </Grid>
        
      
    </Grid>

 );
}


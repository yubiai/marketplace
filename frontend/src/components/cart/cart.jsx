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


const useStyles = makeStyles((theme) => ({

}));
export default function Cart() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("orders");
  //integrar el hardcodeado del orderImage 
  //const cartImage = require("../../media/Shoes-PNG-File.png");
 
 return (
    <List>
        <ListItemText>
            Cart({" "})
        </ListItemText>
    </List>
 );
}


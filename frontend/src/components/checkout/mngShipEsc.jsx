import React from 'react';
import styles from './checkoutStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import EscrowPayment from "./escrowPayChk";
import Chat from "../MessageBox/Chat";
import { useTranslation } from "react-i18next";

export default function MngShipEsc() {
    const classes = styles();
    const { t, i18n } = useTranslation("mngShipEsc");
    
return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="flex-start"
          direction="row"
          justifyContent="center"
          className={classes.root}
            >
                <div>
                    <Chat />
                </div>   
                <div style={{display:"flex", flexDirection:"column"}}>
                    <EscrowPayment />
                    <Button className={classes.button}>
                        Set time and return to checkout
                    </Button>    
                </div> 
    </Grid>            


        );
    }     
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    timeBox: {
            
        width: "36px",
        height: "42px",
        border: "1px solid #BABABA",
        boxSizing: "border-box",
        borderRadius: "5px",
     },
    borderEscrow: {
        border: "1px solid #BABABA",
        boxSizing: "border-box",
        borderRadius: "5px",
        height: "126px",
        marginTop: "10px",
        [theme.breakpoints.down(1600)]: {
        height: "160px",
        },
        [theme.breakpoints.down(1200)]: {
        height: "139px",
        },
        [theme.breakpoints.down('xs')]: {
        height: "139px",

        },
    },
  
}));

export default function EscrowPayment() {
    const classes = useStyles();
    const { t, i18n } = useTranslation("checkout");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <div className={classes.borderEscrow}>
                
                    <DialogTitle
                      disableTypography
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "18px",
                        color: "#BABABA",
                        height: "27px",
                        
                        
                      }}
                      id="form-dialog-title"
                    >
                      {t("Payment waiting on escrow")}
                    </DialogTitle>
                    <DialogContent >
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Days")}
                        type="numbers"
                        fullWidth
                        className={classes.timeBox}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Hours")}
                        type="numbers"
                        width="204px"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Minutes")}
                        type="numbers"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t("Seconds")}
                        type="text"
                        className={classes.timeBox}
                        style={{ marginLeft: "6px"}}
                      />
                    </DialogContent>
              </div>
   );
}              
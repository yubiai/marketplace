import React from 'react'
import TextField from '@material-ui/core/TextField';
import {  makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%",
        height: '38px', 
    },
    button: {
        color: '#FCB877',
        height: '38px',
        margin: theme.spacing(1),
        borderRadius: '40px',
    },
  })
);


export const TextInput = () => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Chat with the seller"
                className={classes.wrapText}
                //margin="normal"
            />
            <Button variant="contained"  className={classes.button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}




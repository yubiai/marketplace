import React from 'react'
import TextField from '@material-ui/core/TextField';
import {  makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';

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
        paddingTop: '-1rem',
        maxWidth: '32px',
        minWidth: '38px',
        paddingRight: '-0.5rem',
        paddingLeft: '-0.5rem',
        marginRight: '-0.5rem',
        marginTop: '1rem',
        borderRadius: '40px',
        backgroundColor: '#F5F5F5',
        backgroundSize: '32px',
        outline: 'none !important',
        '&:hover, &:focus, &:active': {
        outline: 'none !important',
        },
        '&:hover': {
          outline: 'none !important',
        }
    },
    attachButton: {
        color: '#FCB877',
        marginTop: '0.75rem',
        height: '38px',
        boxShadow: 'none',
        margin: theme.spacing(1),
        backgroundColor: 'transparent',
        outline: 'none !important',
        transform: 'rotate(25deg)',
        '&:hover, &:focus, &:active': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            outline: 'none !important',
        },
        '&:hover': {
          outline: 'none !important',
        }
    }
  })
);


export const TextInput = () => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <Button variant="contained" className={classes.attachButton}>
                <AttachFileIcon  />
            </Button>    
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




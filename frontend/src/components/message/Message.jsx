import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: 'Open Sans',
    width: '100%',
    maxWidth: '770px',
    minWidth: '770px',
    height: '100%',
    maxHeight: '740px',
    minHeight: '740px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "36px",
    width: "100%",
    maxWidth: "535px",
    minWidth: "535px",
  },
  spanButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mmBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "379px !important",
    maxWidth: "379px !important",
    minWidth: "379px !important",
    height: "34px",
    backgroundColor: "#00ABD1",
    borderRadius: "4px",
    textDecoration: "none !important",
    color: "#fff",
    textAlign: "center",
    '&:hover, &:focus, &:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      outline: 'none !important',
      color: "#00ABD1",
    },
  },
  textHelp: {
    width:"633px",
    height:"138x",
    fontSize:"18ox",
    textAlign:"center"
  }
}));

const Message = () => {
  const classes = useStyles();

  return (
    <div className="container" >
      <div className={classes.container}>
       <p className={classes.title}>¡Hi! To continue you need to install Metamask plugin.</p>
        <div>
          <span className={classes.spanButton}>
             <a className={classes.mmBtn} href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">
              {"Go to Metamask "} </a>
              
          </span>
        </div>  
        <p className={classes.textHelp}>If you already have it installed, uninstall, re-install it and check if the address is the same that you have registered on proof of humanity</p>  
      </div>
    </div>
  );
};

export default Message;

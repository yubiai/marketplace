import React from "react";
import {  makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.jsx";
import { MessageLeft, MessageRight } from "./MessageLR";
import { Link }  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    
  },
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      marginLeft: '10px',
    },
    link: {
      display: 'flex',
      fontSize: '14px',
      color: '#000000',
      textDecorationColor: 'transparent',
      marginLeft: '0.1rem',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '&:hover': {
          borderBottom: 'none',
          color: '#008968', 
        }
  },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: '10',
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
    imageProfile: {
      display: 'flex',
      alignItems: 'left',
      left: '10px',
      justifyContent: 'left',
      marginLeft: '1px',
      marginBottom: '-10px',
      width: '43px',
      height: '43px',
       
    },
    listItemText: {
      marginTop: '-5px',
      fontWeight: 'bold',
      marginLeft: '5px',
      fontSize: '21px',
  
    },
  })
);

export default function MessagesBox() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
      
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link} to="/orders"  onClick={handleClick}>
          Orders
        </Link>
        <Link className={classes.link} to="/checkorders" onClick={handleClick}>
          Purchase status
        </Link>
        <Link className={classes.link}  >
          Messages of the order
        </Link>
      </Breadcrumbs>
      <ListItem >
            <ListItemAvatar>
                      <img alt="{imgjson}" className={classes.imageProfile} style={{ marginTop: '-10px'}} src={profileImage.default} />
            </ListItemAvatar>
          
            <ListItemText classes={{primary:classes.listItemText}} primary="Vitalik Buterin"/>
      </ListItem>
      <Paper className={classes.paper} zDepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Water striders "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="example2"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Benja"
            avatarDisp={false}
          />
          <MessageRight
            message="message"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Vitalik"
            avatarDisp={true}
          />
          <MessageRight
            message="message"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Vitalik"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </List>
  );
}
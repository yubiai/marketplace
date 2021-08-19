import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  inline: {
    
    display: 'flex',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  btnCheckOrder: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '140px', 
    top: '-4rem', 
  },
  
  btnBuyAgain: {
    display: 'flex',
    right: '1px',
    top: '-4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    borderRadius: '10px',
    minWidth: '140px',
    backgroundColor: '#fef1e4',
    color: '#FCB877',
    '&:hover': {
      textDecoloration: 'none',
   }, 
  },
  image: {
    width: '120px',

  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const shoeImage = require("../../media/Shoes-PNG-File.png");

  return (
    
     
    <List className={classes.root}>
          
    
    <Typography variant="h2"><h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Orders</h3></Typography>
    <Divider variant="fullWidth" component="li" />
   
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={shoeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Shoe Ricky Sarkany 400mm
              </Typography>
              {" 1 item"}
              
                <Button className={classes.btnCheckOrder} variant="contained" >
                Check Order
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={shoeImage.default} />
        </ListItemAvatar>
        <ListItemText
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Shoe Ricky Sarkany 400mm
              </Typography>
              {" 1 item"}
              <Button className={classes.btnCheckOrder} variant="contained" >
                Check Order
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <img alt="{imgjson}" className={classes.image} src={shoeImage.default} />
        </ListItemAvatar>
        <ListItemText
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Shoe Ricky Sarkany 400mm
              </Typography>
              {" 1 item"}
              <Button className={classes.btnCheckOrder} variant="contained" >
                Check Order
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
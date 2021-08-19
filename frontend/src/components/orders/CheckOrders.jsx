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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    
  },
  inline: {
    
    display: 'flex',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  listItem: {
    borderRadius: '10px',
    

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
  },
  
  btnBuyAgain: {
    display: 'flex',
    right: '1px',
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
  imageProfile: {
    width: '120px',
    borderRadius: '10px',

  },
  imageOrder: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginBottom: '5px',
    width: '120px',

  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const shoeImage = require("../../media/Shoes-PNG-File.png");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    
     
    <List className={classes.root}>
          
    
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" to="/orders" onClick={handleClick}>
          Orders
        </Link>
        <Typography color="textPrimary">Purchase status</Typography>
      </Breadcrumbs>
    <Divider variant="fullWidth" component="li" />
    
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
        //en primary va nombre del order item}
          primary="Shoe Ricky Sarkany 400mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {" 1 item"}
              <ListItemAvatar>
                  <img alt="{imgjson}" className={classes.imageOrder} src={shoeImage.default} />
              </ListItemAvatar>
                
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Transaction Details"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {" 1 item"}
              <span> Amount</span>
              <span> Transaction Fee</span>
              <span> Gas price</span>
              <span> Nonce</span> 
              <span> Total</span>  

            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="flex-start">
        
        <ListItemText
          primary="Seller Information"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Vitalik Buterin
              </Typography>
              /*insert json name*/
              {" 1 item"}
              <Button className={classes.btnCheckOrder} variant="contained" >
                Send Message
                </Button>
                
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.imageProfile} src={profileImage.default} />
           
        </ListItemAvatar>
      </ListItem>
    </List>
  );
}
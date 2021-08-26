import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link }  from 'react-router-dom';


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
  
  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',

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
    maxWidth: '140px',
    top: '-4rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent', 
    }  
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
    maxWidth: '140px',
    backgroundColor: '#fef1e4',
    color: '#FCB877',
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent',
   }, 
  },
  image: {
    width: '120px',
    borderRadius: '10px',

  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const orderImage = require("../../media/Shoes-PNG-File.png");

  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
    
    <Typography variant="h2"><h3 style={{ fontWeight: "bold", fontSize: "20px" }}>Orders</h3></Typography>
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
           
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
              
                <Button className={classes.btnCheckOrder} variant="contained" component={Link} to="/checkorders" secondary="CheckOrders" >
                Check Order
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px'}}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
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
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px'}}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
        <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
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
      </Grid>
    </Grid>  
    </List>
  );
}
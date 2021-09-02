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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

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
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginLeft: '0.75rem',
    marginBottom: '0.5rem',
    marginTop: '-0.25rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '&:hover': {
        borderBottom: 'none',
        color: '#008968',
        textDecorationColor: 'transparent', 
      }
},
  btnCheckOrder: {
    display: 'flex',
    alignItems: 'center',
    right: '2rem',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '160px',
    maxWidth: '160px',
    top: '-3.75rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent', 
    }  
  },
  
  btnBuyAgain: {
    display: 'flex',
    right: '2rem',
    top: '-3.5rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    borderRadius: '10px',
    minWidth: '160px',
    maxWidth: '160px',
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
        
      </Breadcrumbs>
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px', marginLeft: '0.75rem' }}>
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
                Order details
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', marginLeft: '0.75rem'}}>
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
              Order details
                </Button>
                <Button className={classes.btnBuyAgain} variant="contained" >
                Buy it again
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginLeft: '0.75rem'}}>
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
                Order details
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
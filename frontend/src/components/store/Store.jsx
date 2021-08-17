import React from "react";
import { ethers } from "ethers";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from "../list-item/ListItem";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



const API_URL = "http://localhost:4000";

const ITEMS = [
  {
    id: 1,
    name: "Item 1",
    price: ethers.utils.parseEther("100") / 1000000000000000000,
  },
  {
    id: 2,
    name: "Item 2",
    price: ethers.utils.parseEther("200") / 1000000000000000000,
  },
];

const Store = ({ paymentProcessor, ubi, signerAddress }) => {
  const buy = async (item) => {
    const response1 = await axios.get(`${API_URL}/api/getPaymentId/${item.id}`);
    
    const tx1 = await ubi.approve(paymentProcessor.address, item.price);
    await tx1.wait();

    const tx2 = await paymentProcessor.pay(
      item.price,
      response1.data.paymentId
    );
    await tx2.wait();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response2 = await axios.get(
      `${API_URL}/api/getItemUrl/${response1.data.paymentId}`
    );
    console.log(response2);
  };

  const newList = ITEMS.map((item) => {
    return (
      <ListItem
        key={item?.id}
        item={item}
        onClick={(e) => {
          e.preventDefault();
          buy(item);
        }}
      />
    );
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    productImage: {
      width: '150px',
      padding: theme.spacing(0),
      
    
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  
   
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  const classes = useStyles();
  const logoImage = require("../../media/Shoes-PNG-File.png");

  return (
    <div>
      {/* <h4>Tu dirección de cuenta es: {signerAddress} </h4> */}
      <h4>Last items posted on the marketplace </h4>
      <Grid container spacing={2}>
        {/* Esta es para el spacing */}
        <Grid item xs={12} sm={1}>
          {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */}
        </Grid>


        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="long-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>
       
      </Grid>

      <h4>Items on your watch list </h4>
      <Grid container spacing={3}>
        
        {/* Relleno */}
      <Grid item xs={12} sm={1}>
          {/* <Paper className={classes.paper}>xs=6 sm=3</Paper> */}
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>


       <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>        
            <CardHeader        
            action={
              <IconButton aria-label="more" onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu">
                <MoreVertIcon />
              </IconButton>
              
            } />
            
            <Menu 
              id='more-menu'
              anchorEl={anchorEl} 
              keepMounted onClose={handleClose} 
              open={Boolean(anchorEl)}> 
            
            <MenuItem onClick={handleClose}>
              <IconButton aria-label="add to cart">
                <AddShoppingCartIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}> 
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            </MenuItem>
          </Menu>
          
          <img className={classes.productImage} src={logoImage.default} alt="Prdct1" />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Cool Shoes - Brown
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              15.000 UBI
            </Typography>
          </CardContent>
           
          </Paper>
        </Grid>
        
      </Grid>


      {/* <ul className="list-group">{newList}</ul> */}
    </div>
  );
};


export default Store;

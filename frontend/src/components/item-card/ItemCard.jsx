import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
// import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListItem from "../list-item/ListItem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardHeader from "@material-ui/core/CardHeader";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "197px",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: 'Open Sans',
  },
  productImage: {
    width: "150px",
    padding: theme.spacing(0),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  carrouselButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "45%",
  },
  saveWatchilist: {
    color: "#FFB978",
    marginTop: "-11rem",
    marginRight: "-1rem",
    
  },
}));

const ItemCard = ({ title, price, image }) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
    <Grid item xs={6} sm={2}>
      <Paper className={classes.paper}>
        <CardHeader
          action={
            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu"
            >
              <MoreVertIcon />
            </IconButton>
          }
          
        />
        {/* <VisibilityIcon className={classes.saveWatchilist}/> */}
          
              
            
          
          
        
        <Menu
          id="more-menu"
          anchorEl={anchorEl}
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
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

        <img
          className={classes.productImage}
          src={logoImage.default}
          alt="Prdct1"
        />
        <CardContent>
          <Typography disableTypography style={{fontFamily: 'Open Sans'}} variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography disableTypography style={{fontFamily: 'Open Sans'}} variant="body2" color="textPrimary" component="p">
            {price} UBI
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default ItemCard;

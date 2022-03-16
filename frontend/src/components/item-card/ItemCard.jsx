import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
// import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListItem from "../list-item/ListItem";
import { ethers } from "ethers";
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
import ImageIcon from "@material-ui/icons/Image";
import Container from "@material-ui/core/Container";
import { currencies } from "./currencyJSON";
import { useGlobal } from "../../providers/globalProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    height: '100%',
    color: theme.palette.text.secondary,
    fontFamily: "Open Sans",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '300px',
    borderRadius: 10
  },
  productImage: {
    width: "150px",
    padding: `${theme.spacing(0)} 12.5px`,
    color: "#bababa",
    marginBottom: 20,
    marginTop: 'auto'
  },
  productDescription: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginTop: 'auto',
    borderTop: '1px solid #727272',
    justifyContent: 'flex-end'
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
  moreVertIcon: {
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  menuIcons: {
    height: "40px",
    width: "45px",
    outline: "none",
    padding: "fit-content",
    margin: "fit-content",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  cardTitle: {
    display: 'block',
    fontFamily: "Open Sans",
    marginBottom: '8px',
    height: '60px',
    overflow: 'hidden'
  },
  iconCart: {
    marginTop: "0.5rem",
    paddingTop: "0rem",
    paddingBottom: "-1rem",
    // marginBottom:'-3rem',
    marginLeft: "-1rem",
    backgroundColor: "transparent",
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
  },
  iconFav: {
    marginTop: "-1.5rem",
    paddingTop: "-1rem",
    // marginBottom:'-2rem',
    paddingBottom: "0rem",
    marginLeft: "-1rem",
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
  },
  iconShare: {
    marginTop: "-3rem",
    marginBottom: "-2.5rem",
    marginLeft: "-1rem",
    paddingBottom: "-2rem",
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
  },
}));

const ItemCard = ({ title, price, image }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const global = useGlobal();
  const [currency, setCurrency] = React.useState('UBI');
  const [conversion, setConversion] = React.useState(0); 
  const conversionActive = (price) => { 
    if (currency === 'UBI' && global.prices.ubi) {
      let result = (price / global.prices.ubi).toFixed(2).replace('00', '');
      if (!conversion) {
        setConversion(result);
      }
      return result;
    }
    return price;
  };
  const formatTitle = (title) => {
    if (title.length > 45) {
      return `${title.substr(0, 42)}...`;
    }
    return title;
  }

  return (
    <Grid
      style={{ width: "100%", maxWidth: "100%", height: "100%" }}
      item
      xs={6}
      sm={2}
    >
      <Paper className={classes.paper}>
        {
          /*
            <CardHeader
          style={{marginLeft: 'auto'}}
          action={
            <IconButton
              aria-label="more"
              onClick={handleClick}
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.moreVertIcon}
            >
              <MoreVertIcon />
            </IconButton>
          }
        />
          */
        }
        {/* <VisibilityIcon className={classes.saveWatchilist}/> */}
        {
          /*
          <Menu
          id="more-menu"
          anchorEl={anchorEl}
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose} className={classes.menuIcons}>
            <IconButton aria-label="add to cart" className={classes.iconCart}>
              <AddShoppingCartIcon />
            </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuIcons}>
            <IconButton
              aria-label="add to favorites"
              className={classes.iconFav}
            >
              <FavoriteIcon />
            </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose} className={classes.menuIcons}>
            <IconButton aria-label="share" className={classes.iconShare}>
              <ShareIcon />
            </IconButton>
          </MenuItem>
          </Menu>*/
        }
        {
          image && <img src={image} alt={image} className={classes.productImage} />
        }
        {
          !image && <ImageIcon className={classes.productImage} />
        }
        <CardContent className={classes.productDescription}>
          <Typography
            disableTypography
            className={classes.cardTitle}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {formatTitle(title)}
          </Typography>
          <Typography
            disableTypography
            style={{ fontFamily: "Open Sans" }}
            variant="body2"
            color="textPrimary"
            component="p"
          >
            <span style={{fontSize: "17px", fontWeight: "bold", color: "#1d1d1d"}}>{ conversionActive(price) }{" "}{currency}{" "}</span>
            <p style={{color:"#bababa",marginBottom: 0}}>{price}{" "}DAI</p> 
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default ItemCard;

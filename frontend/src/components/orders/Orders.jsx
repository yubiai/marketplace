import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link }  from 'react-router-dom';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  inline: {
    fontFamily: 'Open Sans',
    display: 'flex',
  },
  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
  },
  prodTitle: {
    fontSize: '16px',
  },
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    fontFamily: 'Open Sans',
    textDecorationColor: 'transparent',
    marginLeft: '0.75rem',
    marginBottom: '0.5rem',
    marginTop: '-0.25rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '&:hover': {
        borderBottom: 'none',
        color: '#00ABD1',
        textDecorationColor: 'transparent', 
      },
  },
  btnCheckOrder: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    textTransform: 'none',
    right: '2rem',
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#00ABD1',
    color: '#fff',
    minWidth: '160px',
    maxWidth: '160px',
    top: '-3.75rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      backgroundColor: 'transparent', 
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  btnBuyAgain: {
    display: 'flex',
    right: '2rem',
    fontWeight: '500',
    textTransform: 'none',
    top: '-3.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    borderRadius: '10px',
    minWidth: '160px',
    maxWidth: '160px',
    backgroundColor: '#d4ecf1',
    color: '#00ABD1',
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  menuMobileIcon: {
    cursor: 'pointer',
    display: 'none',
    paddingRight: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
  },
  image: {
    width: '120px',
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      height: '80px',
      width: '80px',
    },
  },
  orderItem: {
    backgroundColor: 'white',
    borderRadius: '20px',
    marginBottom: '8px',
    marginLeft: '0.75rem'
  }
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
        <Grid item xs={12} md={12} className={classes.orderItem} style={{ height:'117px' }}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={<b className={classes.prodTitle}> Delivered on 11th of august</b>}
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
              } />
            <IconButton
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu id="more-menu"
                  keepMounted>
              <MenuItem className={classes.menuIcons}>
                Order details
              </MenuItem>
              <MenuItem className={classes.menuIcons}>
                Buy it again
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
        <Grid item xs={12} md={12} className={classes.orderItem}>
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
            </ListItemAvatar>
            <ListItemText primary={<b className={classes.prodTitle}> Delivered on 11th of august</b>}
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
              } />
            <IconButton
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu id="more-menu"
                  keepMounted>
              <MenuItem className={classes.menuIcons}>
                Order details
              </MenuItem>
              <MenuItem className={classes.menuIcons}>
                Buy it again
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
        <Grid item xs={12} md={12} className={classes.orderItem}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={orderImage.default} />
            </ListItemAvatar>
            <ListItemText primary={<b className={classes.prodTitle}> Delivered on 11th of august</b>}
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
              } />
            <IconButton
              aria-label="more"
              aria-haspopup="true"
              aria-controls="more-menu"
              className={classes.menuMobileIcon}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu id="more-menu"
                  keepMounted>
              <MenuItem className={classes.menuIcons}>
                Order details
              </MenuItem>
              <MenuItem className={classes.menuIcons}>
                Buy it again
              </MenuItem>
            </Menu>
          </ListItem>
        </Grid>
      </Grid>
    </List>
  );
}
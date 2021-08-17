import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { BrowserRouter as Router, Link }  from 'react-router-dom';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import AddToQueueOutlinedIcon from '@material-ui/icons/AddToQueueOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    // container: {
    //     display: 'flex',
    //     height: '100px',
    //      // background: 'linear-gradient(90deg, rgba(55,186,121,1) 29%, rgba(253,202,0,1) 100%)',
        
    // },
    root:{
        marginTop: '10px',
   },

    navbar:{
         background: 'linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%)',
         height: '100px',
    },
    logo: {
        width: '120px',
        marginRight: '2.2rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: '14px',
        justifyContent: 'space-evenly',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            '&:hover': {
                borderBottom: 'none',
                color: '#008968', 
              }
        },
    },
    link: {
        display: 'flex',
        fontSize: '14px',
        color: '#fff',
        textDecorationColor: 'transparent',
        marginRight: '1rem',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },
    lang: {
        
        fontSize: '14px',
        color: '#fff',
        textDecorationColor: 'transparent',
        alignItems: 'center',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },

    notificon: {
        marginLeft: theme.spacing(2),
        alignItems: 'center',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },
    accicon: {
        marginLeft: theme.spacing(2),
        alignItems: 'center',
        
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },

    carticon: {
        marginLeft: theme.spacing(2),
        alignItems: 'center',
        
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },

    connect: {
        fontSize: '14px',
        color: '#FCB877',
        background: 'white',
        borderRadius : 20,
        marginLeft: '1rem',
        '&:hover': {
            borderBottom: 'none',
            color: 'white',
            background: '#FCB877', 
          }
    },
    linkmenu: {
        display: 'flex',
        fontSize: '14px',
        color: '#000000',
        textDecorationColor: 'transparent',
        marginLeft: '1rem',

    },
    linkmenuicon: {
        display: 'flex',
        size: '18px',
        color: '#000000',
        textDecorationColor: 'transparent',
        

    },    
    search: {
        position: 'relative',
        color: 'black',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
           backgroundColor: alpha(theme.palette.common.white, 0.75),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const logoImage = require("../../images/logo2.png");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

  
   
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const OpenLanguage = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const OpenCategories = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            
        </Menu>
    );

    const categories = 'categories-menu';
    const renderMenuCategories = (
                                <Menu
                                        id={categories}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        >
                                        <MenuItem onClick={handleClose}>Arts & Crafts</MenuItem>
                                        <MenuItem onClick={handleClose}>Atomotive</MenuItem>
                                        <MenuItem onClick={handleClose}>Appliances</MenuItem>
                                        <MenuItem onClick={handleClose}>VideoGames</MenuItem>
                                </Menu>
                                );

                const language = 'language-menu';
                const renderMenuLanguage = (
                    <Menu
                            id={language}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}>EN</MenuItem>
                            <MenuItem onClick={handleClose}>ES</MenuItem>
                            <MenuItem onClick={handleClose}>PT</MenuItem>
                            <MenuItem onClick={handleClose}>FR</MenuItem>
                    </Menu>
                    );




    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton  color="inherit">
                    <Badge  >
                        <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                    </Badge>
                </IconButton>
                <p>Categories</p>
            </MenuItem>
            <MenuItem>
                <Router>
                <IconButton color="inherit"  >
                    <Link  to="/sell">
                        <Badge  color="secondary">
                            <LoyaltyOutlinedIcon className={classes.linkmenuicon}></LoyaltyOutlinedIcon>
                            <div className={classes.linkmenu}>
                            <p>Sell</p>
                            </div>
                        </Badge>
                    </Link>
                </IconButton>
                </Router>
            </MenuItem>
            <MenuItem>
                <Router>
                <IconButton color="inherit"  >
                    <Link  to="/browsinghistory">
                        <Badge  color="secondary">
                            <HistoryOutlinedIcon className={classes.linkmenuicon}></HistoryOutlinedIcon>
                            <div className={classes.linkmenu}>
                            <p>Browsing history</p>
                            </div>
                        </Badge>
                    </Link>
                </IconButton>
                </Router>
            </MenuItem>
            <MenuItem>
                <Router>
                <IconButton color="inherit"  >
                    <Link  to="/watchlist">
                        <Badge  color="secondary">
                            <AddToQueueOutlinedIcon className={classes.linkmenuicon}></AddToQueueOutlinedIcon>
                            <div className={classes.linkmenu}>
                            <p>Watch list</p>
                            </div>
                        </Badge>
                    </Link>
                </IconButton>
                </Router>
            </MenuItem>
            <MenuItem>
                <Router>
                <IconButton color="inherit"  >
                    <Link  to="/helpdesk">
                        <Badge  color="secondary">
                            <ContactSupportOutlinedIcon className={classes.linkmenuicon}></ContactSupportOutlinedIcon>
                            <div className={classes.linkmenu}>
                            <p>Help desk</p>
                            </div>
                        </Badge>
                    </Link>
                </IconButton>
                </Router>
            </MenuItem>
        </Menu>
    );

    return (
        
            <div className={classes.container}>
                <Router>
                <AppBar className={classes.navbar} position="static">
                    <Toolbar>

     <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item  sm={3} xs={6}>
        <div><img className={classes.logo} src={logoImage.default}></img></div>
        </Grid>
        <Grid item sm={6} xs={6}>
            {/* Caja de Busqueda */}
            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search for goods, services or anything you need..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
            </div>
        </Grid>
        <Grid item sm={3} xs={6}>
        <Link className={classes.lang} aria-controls="language" aria-haspopup="true" onClick={OpenLanguage}>EN  <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>  </Link>
        <Button className={classes.connect} variant="contained" color="primary">Connect</Button>
        </Grid>

        {/* Second row */}
        <Grid item sm={3} xs={6}>
        <LocationOnIcon></LocationOnIcon>Send to Buenos Aires
        </Grid>
        <Grid item sm={6} xs={6}>
             
        <div className={classes.container} />
        <div className={classes.sectionDesktop}>
                            
                            {/*cambiar "apuntar a notif, una vez creado" y badgeContent{''} */}
                           
                                <Typography className={classes.link}  noWrap>  
                                <Link className={classes.link} aria-controls="categories" aria-haspopup="true" onClick={OpenCategories} >Categories 
                                <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon> 
                                </Link>
                                <Link className={classes.link} to="/sell" >Sell  
                                </Link>
                                <Link className={classes.link} to="/browsinghistory" >Browsing history  
                                </Link>
                                <Link className={classes.link} to="/watchlist" >Watch list  
                                </Link>
                                <Link className={classes.link} to="/helpdesk" >Help desk 
                                </Link></Typography>  
                                
                                                             
                        </div>
        </Grid>
        <Grid item sm={3} xs={6}>
        
                <AccountCircle className={classes.accicon} />                                 
                <Badge badgeContent={17} color="secondary" ><NotificationsIcon className={classes.notificon} /></Badge>
                <Badge badgeContent={1} color="primary" ><ShoppingCartOutlinedIcon  className={classes.carticon}/> {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}</Badge>
                               
        </Grid>
        
      </Grid>
    </div>

                        

                     
                        

                        
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                                
                            >
                                
                                <MoreIcon />
                            </IconButton>
                            
                        </div>
                    </Toolbar>
                </AppBar>
                </Router>
                {renderMobileMenu}
                {renderMenu}
                {renderMenuCategories}
                {renderMenuLanguage}
                
            </div>
        
    );
}

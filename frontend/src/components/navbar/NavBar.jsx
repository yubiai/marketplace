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
// import MenuIcon from '@material-ui/icons/Menu';
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
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import { setupEthState } from '../../ethereum';

const API_URL = 'http://localhost:4000';
let name = "Manuel Rodríguez Roldán"; /*fetch from poh address*/
  let ubisAmmount = "720.55 dripped on address >"; /*fetch from poh address*/
const useStyles = makeStyles((theme) => ({
    // container: {
    //     display: 'flex',
    //     height: '100px',
    //      // background: 'linear-gradient(90deg, rgba(55,186,121,1) 29%, rgba(253,202,0,1) 100%)',
 // },
    root:{
        marginTop: '10px',
        margin: '10px',
   },
    navbar:{
         background: 'linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%)',
         height: '105px',
         minHeight:'105px',
         maxHeight:'105px',
         zIndex: 99,
    },
    logo: {
        width: '120px',
    },
    menuButton: {
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
        fontSize: '15px',
        font: 'Open Sans, sans serif, regular !important',
        color: '#fff',
        textDecorationColor: 'transparent',
        marginLeft: '1rem',
        justifyContent: 'space-evenly',
        alignItems: 'top',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968',
            textDecorationColor: 'transparent', 
          }
    },
    listItemTextc: {
        display: 'flex',
        fontSize: '16px',
        color: '#fff',
        font: 'Open Sans, sans serif, regular !important',
        textDecorationColor: 'transparent',
        marginLeft: '1rem',
        paddingTop: '1px',
        marginTop: '-2.5px',
        justifyContent: 'space-evenly',
        alignItems: 'top',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }
    },
    lang: {
        fontSize: '14px',
        color: '#fff',
        marginLeft: '7rem',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        textDecorationColor: 'transparent',
        alignItems: 'right',
        '&:hover': {
            borderBottom: 'none',
            color: '#008968',
            textDecorationColor: 'transparent', 
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
        fontWeight: '500',
        textTransform: 'none',
        justifyContent: "space-evenly",
        background: 'white',
        borderRadius : 20,
        marginLeft: '1rem',
        textAlign: 'center',
        outline: 'none',
        '&:hover': {
            outline: 'none',
            borderBottom: 'none',
            color: 'white',
            background: '#FCB877', 
          },
        '&:hover, &:focus, &:active': {
            outline: 'none',
          },  
    },
    listItemText: {
        color: '#000000',
        fontFamily: 'Open Sans',
        fontSize: '13px',
        textDecorationColor: 'transparent',
        '&:hover': {
                borderBottom: 'none',
                color: '#008968', 
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
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
           backgroundColor: alpha(theme.palette.common.white, 0.75),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        maxWidth: '530px',
        minWidth:'530px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        borderLeft: '1px solid #727272',
        borderRadius: '0px',
        marginTop: '-8.5px',
        height: '20px',
        marginRight: '-15px',
        display: 'flex',
        color:'#727272',
        backgroundColor: 'transparent',
        paddingTop: '-0.65rem',
        paddingLeft: '-2.5rem',
        position: 'absolute',
        right: -5,
        top: '15px',
        maxwidth: '13px',
        minWidth: '13px',
        outline: 'none',
        '&:hover, &:focus, &:active': {
            outline: 'none',
            backgroundColor: 'transparent',
        },
        '&:hover': {
            backgroundColor: 'transparent',
        }
},
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(-1em + ${theme.spacing(4)}px)`,
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
    menuProfile:{
        width:'200px',
        backgroundColor:'red',
    },
    avatar:{
        
        marginLeft:'15px',
        marginTop:'-1.5rem',
        marginBottom: '1rem',
        width: '47px',
        height: '47px',
        top: '1.8rem',
         
    },
    nameMenu:{
        display:'inline-block',
        fontSize:'14px',
        padding: '-15px',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        marginTop: '-2rem',
        marginLeft: '0.5rem',
        marginBottom: '-2rem',
    },
    ubiAmmount:{
        display:'block',
        color: '#939292',
        fontSize:'12px',
        fontFamily: 'Open Sans',
        marginTop: '-0.5rem',
        marginLeft: '-0.2rem',
        marginRight:'10px',
        marginBottom: '1rem'
    },
    ubiIcon:{
        width: '17px',
        marginLeft:'75px', 
        paddingRight:'5px',
    },
}));

function _formatWalletAddress(address) {
    return address.substr(0, 8);
}
export default function NavBar() {
    const classes = useStyles();
    const logoImage = require("../../images/logo2.png");
    const ubiImage = require("../../media/ubi2.svg");
    const profileImage = require("../../media/harishan-kobalasingam.jpg");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [categoriesAnchorEl, setCategoriesAnchorEl] = React.useState(null);
    const [token, setToken] = React.useState('');
    const [profileInfo, setProfileInfo] = React.useState({});
    const [walletAddress, setWalletAddress] = React.useState('');
    const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const categoriesMenuOpen = Boolean(categoriesAnchorEl);
    const languageMenuOpen = Boolean(languageAnchorEl);
    const profileMenuOpen = Boolean(profileAnchorEl);
    const OpenCategories = (event) => {
        setCategoriesAnchorEl(event.currentTarget);
      };
      const OpenLanguage = (event) => {
        setLanguageAnchorEl(event.currentTarget);
      };
    const OpenProfile = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const connect = () => {
        if (!token) {
            setupEthState().then(r => {
                const { signerAddress } = r;
                axios.post(
                    `${API_URL}/api/profiles/login`,
                    {
                        walletAddress: signerAddress
                    }
                ).then(resp => {
                    setWalletAddress(resp.data.eth_address);
                    setToken(resp.data.token);
                    setProfileInfo({...resp.data});
                });
            });
        }
    };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
    setCategoriesAnchorEl(null);
    setLanguageAnchorEl(null);
    setProfileAnchorEl(null);
  };
    const profile = 'profile-menu';
    const renderMenu = (
        <Menu
            id={profile}
            anchorEl={profileAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: "bottom", horizontal: "center", }}            
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "center"}}
            open={Boolean(profileMenuOpen)}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <ListItemIcon>
            <Avatar src={profileInfo.photo || profileImage.default} profileImage className={classes.avatar} />
            </ListItemIcon>
            <Typography   className={classes.nameMenu}>{profileInfo.display_name || name}</Typography>          
            <Typography className={classes.ubiAmmount}>
                <img src={ubiImage.default} className={classes.ubiIcon} ></img>{ubisAmmount}
            </Typography>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText}  component={Link} to='/orders' onClick={handleClose}>Orders</MenuItem>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText} component={Link} to='/salesactive' onClick={handleClose}>Sales</MenuItem>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText} component={Link} to='/mailbox' onClick={handleClose}>Mailbox</MenuItem>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText} component={Link} to='/myinfo' onClick={handleClose}>My info</MenuItem>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText} component="a" href='https://resolve.kleros.io/' target="_blank">Kleros Dispute Resolver</MenuItem>
            <MenuItem style={{fontSize:"13px"}} className={classes.listItemText}  onClick={handleClose}>Disconnect</MenuItem>
        </Menu>
    );
    const categories = 'categories-menu';
    const renderMenuCategories = (
            <Menu
            id={categories}
            anchorEl={categoriesAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: "bottom", horizontal: "center",}}
            transformOrigin={{vertical: "top", horizontal: "center"}}
            keepMounted
            open={Boolean(categoriesMenuOpen)}
            onClose={handleClose}
            
            >
            <MenuItem className={classes.listItemText} onClick={handleClose}>Arts & Crafts</MenuItem>
            <MenuItem className={classes.listItemText} onClick={handleClose}>Automotive</MenuItem>
            <MenuItem className={classes.listItemText} onClick={handleClose}>Appliances</MenuItem>
            <MenuItem className={classes.listItemText} onClick={handleClose}>VideoGames</MenuItem>
                    </Menu>
                                );
        const language = 'language-menu';
        const renderMenuLanguage = (
            <Menu
            id={language}
            anchorEl={languageAnchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            keepMounted
            open={Boolean(languageMenuOpen)}
            onClose={handleClose}
            >
            <MenuItem style={{fontFamily: 'Open Sans'}} onClick={handleClose}>English</MenuItem>
            <MenuItem style={{fontFamily: 'Open Sans'}} onClick={handleClose}>Español</MenuItem>
            <MenuItem style={{fontFamily: 'Open Sans'}} onClick={handleClose}>Português</MenuItem>
            <MenuItem style={{fontFamily: 'Open Sans'}} onClick={handleClose}>Française</MenuItem>
            <MenuItem style={{fontFamily: 'Open Sans'}} onClick={handleClose}>Deutsche</MenuItem>
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
            <MenuItem  onClick={OpenProfile}>
                <IconButton 
                    aria-label="account of current user"
                    aria-controls="profile-menu"
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
                    <Container maxWidth="lg">
     <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item  sm={3} xs={6}>
        <div><a href='/'><img className={classes.logo} src={logoImage.default} component={Link} to='/'></img></a></div>
        </Grid>
        <Grid item sm={6} xs={6}>
            {/* Caja de Busqueda */}
            <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Button style={{outline:'none', backgroundColor:'transparent'}}>
                                    <SearchIcon style={{marginTop:'-0.05rem', marginLeft:'-1.5rem', color:'#727272'}} />
                                </Button>    
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
        <Link className={classes.lang} aria-controls="language-menu" aria-haspopup="true" onClick={OpenLanguage} >EN  <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>  </Link>
        <Button className={classes.connect} onClick={connect} variant="contained" color="primary">
            { _formatWalletAddress(walletAddress) || 'Connect' }
        </Button>
        </Grid>
        {/* Second row */}
        <Grid item sm={3} xs={6}>
        <LocationOnOutlinedIcon></LocationOnOutlinedIcon>Send to <b>Buenos Aires</b> {/* modify in base of location of user */}
        </Grid>
        <Grid item sm={7} xs={6}>
        <div className={classes.container} />
        <div className={classes.sectionDesktop}>
                            {/*cambiar "apuntar a notif, una vez creado" y badgeContent{''} */}
                                <Typography disableTypography className={classes.link}  noWrap>  
                                <ListItemText disableTypography className={classes.listItemTextc} aria-controls="categories-menu" aria-haspopup="true" onClick={OpenCategories} >Categories 
                                <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                                </ListItemText>
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
        <Grid item sm={2} xs={6}>
                 <AccountCircle className={classes.notificon} onClick={OpenProfile}
                    aria-label="account of current user"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    color="inherit" />
                <Badge badgeContent={17} color="secondary" ><NotificationsIcon className={classes.notificon} /></Badge>
                <Badge badgeContent={1} color="primary" ><ShoppingCartOutlinedIcon  className={classes.carticon}/> {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}</Badge>
        </Grid>
      </Grid>
    </div>
    </Container>
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
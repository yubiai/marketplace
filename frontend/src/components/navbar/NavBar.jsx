import React, { useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import AddToQueueOutlinedIcon from "@material-ui/icons/AddToQueueOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";
import { setupEthState } from "../../ethereum";
import { saveLoginInfo, getLoginInfo } from "../../utils/loginInfo";
import { convertExpo } from "../../utils";
import { profileService } from "../../services/profileService";
import { etherscanService } from "../../services/etherscanService";
import { useTranslation } from "react-i18next";

const API_URL = "http://localhost:4000";
let name = "Manuel Rodríguez Roldán"; /*fetch from poh address*/

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    margin: "10px",
  },
  navbar: {
    background:
      "linear-gradient(90deg, rgb(0, 171, 209) 0%, #1C538A 100%) !important",
    height: "105px",
    minHeight: "105px",
    maxHeight: "105px",
    zIndex: 99,
    //  [theme.breakpoints.down('lg')]: {
    //     marginLeft: '0 !important',
    //     marginTop: '0.5rem !important',
    //     maxWidth: 'initial !important',
    //     minWidth: 'initial !important',
    //     position: 'relative',
    // },
    // [theme.breakpoints.between(901, 959)]: {
    //     flexBasis: '100%',
    //     maxWidth: '60vw'
    // },
    // [theme.breakpoints.down(960)]: {
    //     height: '105px',
    //     minHeight:'105px',
    //     maxHeight:'105px',
    //     zIndex: 99,
    //   },
    [theme.breakpoints.down(900)]: {
      height: "70px",
      minHeight: "70px",
      maxHeight: "70px",
      zIndex: 99,
    },
    [theme.breakpoints.down("xs")]: {
      height: "70px",
      minHeight: "70px",
      maxHeight: "70px",
      zIndex: 99,
    },
  },
  logo: {
    width: "100px",
    [theme.breakpoints.down(960)]: {
      display: "none",
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "6rem",
      float: " left",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "6rem",
      float: " left",
    },
  },
  isoLogo: {
    width: "29px",
    [theme.breakpoints.up(960)]: {
      display: "none",
    },
    [theme.breakpoints.down(960)]: {
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "-2.5rem",
      top: "1.5rem",
      float: " left",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      // marginLeft: '1rem',
      // marginTop: '7rem',
      // marginBottom: '-3rem',
      // top: '2rem',
      left: "-1.5rem",
      top: "1.5rem",
      float: " left",
    },
  },
  menuButton: {},
  title: {
    display: "none",
    fontSize: "14px",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      "&:hover": {
        borderBottom: "none",
        color: "#008968",
      },
    },
  },
  link: {
    display: "flex",
    fontSize: "15px",
    font: "Open Sans, sans serif, regular !important",
    color: "#fff",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
    justifyContent: "space-evenly",
    alignItems: "top",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
      textDecorationColor: "transparent",
    },
  },
  listItemTextc: {
    display: "flex",
    fontSize: "16px",
    color: "#fff",
    font: "Open Sans, sans serif, regular !important",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
    paddingTop: "1px",
    marginTop: "-2.5px",
    justifyContent: "space-evenly",
    alignItems: "top",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
  },
  lang: {
    fontSize: "14px",
    color: "#fff",
    marginLeft: "7rem",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    textDecorationColor: "transparent",
    alignItems: "right",
    position:"relative",
    left:"-17px",
    top:"2px",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
      textDecorationColor: "transparent",
    },
    [theme.breakpoints.between(960, 1230)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none", // remove
      position: "relative",
      float: "left",
      left: "-34rem",
      marginBottom: "-1.5rem",
      top: "3.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "2rem",
      left: "-8rem",
      float: " left",
    },
  },
  langContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  notificon: {
    marginLeft: theme.spacing(2),
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
  },
  carticon: {
    marginLeft: theme.spacing(2),
    alignItems: "center",
    display: "inline-flex",
    float: "right",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
    [theme.breakpoints.down("md")]: {
      left: "-7.5rem",
      // marginTop: '0.5rem',
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      position: "relative",
      float: "right",
      left: "1rem",
      // marginBottom: '-1.5rem',
      top: "-1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      // marginLeft: '11rem',
      top: "-2.5rem",
      left: "9.25rem",
      // marginBottom: '-6rem',
    },
  },
  connect: {
    position:"relative",
    left:"-34px",
    top:"2px",
    width:"99px",
    fontSize: "14px",
    color: "#00ABD1",
    fontWeight: "500",
    textTransform: "none",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: 20,
    marginLeft: "1rem",
    textAlign: "center",
    outline: "none",
    "&:hover": {
      outline: "none",
      borderBottom: "none",
      color: "white",
      background: "#00ABD1",
    },
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    [theme.breakpoints.down(900)]: {
      left: "4rem",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-2.5rem",
      left: "-2rem",
      maxWidth: "75px",
      minWidth: "75px",
      width: "100%",
    },
  },
  connectMobile: {
    fontSize: "14px",
    color: "#00ABD1",
    fontWeight: "500",
    textTransform: "none",
    justifyContent: "space-evenly",
    background: "white",
    borderRadius: 20,
    marginLeft: "1rem",
    textAlign: "center",
    outline: "none",
    "&:hover": {
      outline: "none",
      borderBottom: "none",
      color: "white",
      background: "#00ABD1",
    },
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
  },
  listItemText: {
    display: "flex",
    fontSize: "13px",
    fontFamily: "Open Sans, sans serif, regular !important",
    color: "black",
    textDecorationColor: "transparent",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecorationColor: "transparent",
    },
  },
  linkmenu: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
  },
  linkmenuicon: {
    display: "flex",
    size: "18px",
    color: "#000000",
    textDecorationColor: "transparent",
  },
  searchContainer: {
    [theme.breakpoints.down(900)]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  search: {
    position: "relative",
    color: "black",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    maxWidth: "530px",
    minWidth: "530px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0 !important",
      marginTop: "0.5rem !important",
      maxWidth: "initial !important",
      minWidth: "initial !important",
      position: "relative",
    },
    [theme.breakpoints.between(901, 959)]: {
      flexBasis: "100%",
      maxWidth: "60vw",
    },
    [theme.breakpoints.down(960)]: {
      marginTop: "0 !important",
      position: "relative",
      marginLeft: "-2rem",
      maxWidth: "400px",
      minWidth: "400px",
      width: "100%",
      top: "-1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-1.5rem",
      right: "-1rem",
      position: "relative",
      marginLeft: "-4rem",
      maxWidth: "200px",
      minWidth: "200px",
      width: "100%",
    },
  },
  searchIcon: {
    borderLeft: "1px solid #727272",
    borderRadius: "0px",
    marginTop: "-8.5px",
    height: "20px",
    marginRight: "-15px",
    display: "flex",
    color: "#727272",
    backgroundColor: "transparent",
    paddingTop: "-0.65rem",
    paddingLeft: "-2.5rem",
    position: "absolute",
    right: -5,
    top: "15px",
    maxwidth: "13px",
    minWidth: "13px",
    outline: "none",
    "&:hover, &:focus, &:active": {
      outline: "none",
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  inputRoot: {
    color: "inherit",
    [theme.breakpoints.down(959)]: {
      width: "100%",
    },
  },
  inputInput: {
    fontWeight: "light !important",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(-1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuProfile: {
    width: "200px",
    backgroundColor: "red",
  },
  avatar: {
    marginLeft: "15px",
    marginTop: "-1.5rem",
    marginBottom: "1rem",
    width: "47px",
    height: "47px",
    top: "1.8rem",
  },
  nameMenu: {
    display: "inline-block",
    fontSize: "14px",
    padding: "-15px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    marginTop: "-2rem",
    marginLeft: "0.5rem",
    marginBottom: "-2rem",
  },
  ubiAmmount: {
    display: "block",
    color: "#939292",
    fontSize: "12px",
    fontFamily: "Open Sans",
    marginTop: "-0.5rem",
    marginLeft: "-0.2rem",
    marginRight: "10px",
    marginBottom: "1rem",
  },
  ubiIcon: {
    width: "17px",
    marginLeft: "75px",
    paddingRight: "5px",
  },
  menuMobileItemLabel: {
    marginBottom: 0,
  },
  menuMobileItemLink: {
    color: "#000",
    textDecoration: "none",
    "&:hover, &:focus, &:active": {
      color: "#000",
      textDecoration: "none",
    },
  },
  moreIcon: {
    outline: "none",
    marginTop: "-3rem",
    "&:hover, &:focus, &:active": {
      outline: "none",
    },
    [theme.breakpoints.between(901, 959)]: {
      marginTop: 0,
    },
    [theme.breakpoints.down(900)]: {
      position: "relative",
      top: "-10px",
      left: 0,
      marginTop: 0,
      width: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      top: 0,
    },
  },
  location: {
    width: "21px",
    height: "30px",
    marginTop: "-3px",
    [theme.breakpoints.down("sm")]: {
      display: "none", // remove
      position: "relative",
      float: "left",
      left: "7rem",
      top: "-1rem",
    },
    [theme.breakpoints.down("xs")]: {
      top: "2rem",
      bottom: "-2rem",
      left: "-2rem",
      position: "relative",
      // marginLeft: '-4rem',
      size: "75%",
    },
  },
  listItemsMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  quickActionsMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function _formatWalletAddress(address = "") {
  return address ? address.substr(0, 8) : "";
}
export default function NavBar() {
  const classes = useStyles();
  const logoImage = require("../../images/logo2.png");
  const IsologoImage = require("../../images/isologoyubiaiwhite.png");
  const ubiImage = require("../../media/ubi2.svg");
  const profileImage = require("../../media/harishan-kobalasingam.jpg");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = React.useState(null);
  const [token, setToken] = React.useState("");
  const [profileInfo, setProfileInfo] = React.useState({});
  const [walletAddress, setWalletAddress] = React.useState("");
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const categoriesMenuOpen = Boolean(categoriesAnchorEl);
  const languageMenuOpen = Boolean(languageAnchorEl);
  const profileMenuOpen = Boolean(profileAnchorEl);
  const [data, setData] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

  const { t, i18n } = useTranslation("navbar");
  
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
      setupEthState().then(async(r) => {
        const { signerAddress } = r;
        await axios
          .post(`${API_URL}/api/profiles/login`, {
            walletAddress: signerAddress,
          })
          .then((resp) => {
            setWalletAddress(resp.data.eth_address);
            setToken(resp.data.token);
            setProfileInfo({ ...resp.data });
            // Save token and wallet on sessionStorage
            saveLoginInfo(resp.data.token, resp.data.eth_address, {
              display_name: resp.data.display_name,
              photo: resp.data.photo,
            });
            
          });
      });
    }
  };
  
  useEffect(async () => {
    await setupEthState().then(async (r) => {
      const { signerAddress } = r;
      await profileService
        .getProfile(signerAddress)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setData(res.data);
          getBalanceUbi(res.data.eth_address);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const getBalanceUbi = async (address) => {
    await etherscanService
      .getBalanceUbi(address)
      .then((res) => {
        let oldBalance = res.data.result;
        let newBalance = convertExpo(`${oldBalance}e-18`)
        setBalance(newBalance)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let ubisAmmount = balance; 
  const handleClose = () => {
    setAnchorEl(null);
    setCategoriesAnchorEl(null);
    setLanguageAnchorEl(null);
    setProfileAnchorEl(null);
  };

  const disconnect = () => {
    setWalletAddress("");
    setToken("");
    setProfileInfo({});
    // Save token and wallet on sessionStorage
    saveLoginInfo("", "", {});
    handleClose();
  };

  const profile = "profile-menu";
  const renderMenu = (
    <Menu
      id={profile}
      anchorEl={profileAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(profileMenuOpen)}
      onClose={handleClose}
      TransitionComponent={Fade}
      style={{ top: "15px", zIndex: 1000 }}
    >
      <ListItemIcon>
        <Avatar
          src={(profileInfo || {}).photo || profileImage.default}
          profileImage
          className={classes.avatar}
        />
      </ListItemIcon>
      <Typography className={classes.nameMenu}>
        {(profileInfo || {}).display_name || name}
      </Typography>
      <Typography className={classes.ubiAmmount}>
        <img src={ubiImage.default} className={classes.ubiIcon}></img>
        {`${ubisAmmount} ${t("UBI's dripped")}`}
      </Typography>
      <MenuItem
        style={{ fontSize: "13px" }}
        className={classes.listItemText}
        component={Link}
        to="/myinfo"
        onClick={handleClose}
      >
        {t("my_info")}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "13px", fontFamily: "Open Sans" }}
        className={classes.listItemText}
        component={Link}
        to="/orders"
        onClick={handleClose}
      >
        {t("orders")}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "13px" }}
        className={classes.listItemText}
        component={Link}
        to="/salesactive"
        onClick={handleClose}
      >
        {t("sales")}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "13px" }}
        className={classes.listItemText}
        component={Link}
        to="/mailbox"
        onClick={handleClose}
      >
        {t("mailbox")}
      </MenuItem>
      <MenuItem
        style={{ fontSize: "13px" }}
        className={classes.listItemText}
        component="a"
        href="https://resolve.kleros.io/"
        target="_blank"
      >
        {t("kleros_dispute_resolver")}
      </MenuItem>
      {token && (
        <MenuItem
          style={{ fontSize: "13px" }}
          className={classes.listItemText}
          onClick={disconnect}
        >
          {t("disconnect")}
        </MenuItem>
      )}
      {/* <MenuItem> */}
      {/* <IconButton color="inherit">
                    <Badge badgeContent={1} color="primary" >
                        <ShoppingCartOutlinedIcon /> {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}
      {/* </Badge>*/}
      {/* </IconButton> */}
      {/* <p>Cart</p> */}
      {/* </MenuItem> */}
    </Menu>
  );
  const categories = "categories-menu";
  const renderMenuCategories = (
    <Menu
      style={{ top: "16px" }}
      id={categories}
      anchorEl={categoriesAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      keepMounted
      open={Boolean(categoriesMenuOpen)}
      onClose={handleClose}
    >
      <MenuItem className={classes.listItemText} onClick={handleClose}>
       {t("Arts & Crafts")}
      </MenuItem>
      <MenuItem className={classes.listItemText} onClick={handleClose}>
        {t("Automotive")}
      </MenuItem>
      <MenuItem className={classes.listItemText} onClick={handleClose}>
        {t("Appliances")}
      </MenuItem>
      <MenuItem className={classes.listItemText} onClick={handleClose}>
        {t("VideoGames")}
      </MenuItem>
    </Menu>
  );
  const language = "language-menu";
  const renderMenuLanguage = (
    <Menu
      style={{top:"59px"}}
      id={language}
      anchorEl={languageAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      keepMounted
      open={Boolean(languageMenuOpen)}
      onClose={handleClose}
    >
      <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
        English
      </MenuItem>
      <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
        Português
      </MenuItem>
      <MenuItem style={{ fontFamily: "Open Sans" }} onClick={() => {i18n.changeLanguage("es"); handleClose();}}>
        Español
      </MenuItem>
      <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
        Française
      </MenuItem>
      <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
        Deutsche
      </MenuItem>
       
    </Menu>
    
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      style={{ top: "55px" }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          className={classes.connectMobile}
          onClick={connect}
          variant="contained"
          color="primary"
        >
          {_formatWalletAddress(walletAddress) ||  `${t("Connect")}`}
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="profile-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/myinfo" className={classes.menuMobileItemLink}>
          <p className={classes.menuMobileItemLabel}>{t("Profile")}</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p className={classes.menuMobileItemLabel}>{t("Notifications")}</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon />{" "}
            {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}
          </Badge>
        </IconButton>
        <p className={classes.menuMobileItemLabel}>{t("Cart")}</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge>
            <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
          </Badge>
        </IconButton>
        <p className={classes.menuMobileItemLabel}>{t("Categories")}</p>
      </MenuItem>
      <MenuItem>
        <Router>
          <IconButton color="inherit">
            <Link to="/sell">
              <Badge color="secondary">
                <LoyaltyOutlinedIcon
                  className={classes.linkmenuicon}
                ></LoyaltyOutlinedIcon>
                <div className={classes.linkmenu}>
                  <p className={classes.menuMobileItemLabel}>{t("Sell")}</p>
                </div>
              </Badge>
            </Link>
          </IconButton>
        </Router>
      </MenuItem>
      <MenuItem>
        <Router>
          <IconButton color="inherit">
            <Link to="/browsinghistory">
              <Badge color="secondary">
                <HistoryOutlinedIcon
                  className={classes.linkmenuicon}
                ></HistoryOutlinedIcon>
                <div className={classes.linkmenu}>
                  <p className={classes.menuMobileItemLabel}>
                   {t("Browsing history")}
                  </p>
                </div>
              </Badge>
            </Link>
          </IconButton>
        </Router>
      </MenuItem>
      <MenuItem>
        <Router>
          <IconButton color="inherit">
            <Link to="/watchlist">
              <Badge color="secondary">
                <AddToQueueOutlinedIcon
                  className={classes.linkmenuicon}
                ></AddToQueueOutlinedIcon>
                <div className={classes.linkmenu}>
                  <p className={classes.menuMobileItemLabel}>{t("Watch list")}</p>
                </div>
              </Badge>
            </Link>
          </IconButton>
        </Router>
      </MenuItem>
      <MenuItem>
        <Router>
          <IconButton color="inherit">
            <Link to="/helpdesk">
              <Badge color="secondary">
                <ContactSupportOutlinedIcon
                  className={classes.linkmenuicon}
                ></ContactSupportOutlinedIcon>
                <div className={classes.linkmenu}>
                  <p className={classes.menuMobileItemLabel}>{t("Help desk")}</p>
                </div>
              </Badge>
            </Link>
          </IconButton>
        </Router>
      </MenuItem>
    </Menu>
  );

  const { jwtToken, savedWallet, profileData } = getLoginInfo();
  useEffect(() => {
    const init = async () => {
      if (jwtToken && savedWallet) {
        setToken(jwtToken);
        setWalletAddress(savedWallet);
        setProfileInfo(profileData);
      }
    };
    init();
  }, []);

  return (
    <div className={classes.container}>
      <Router>
        <AppBar className={classes.navbar} position="static">
          <Toolbar>
            <Container maxWidth="lg">
              <div className={classes.root}>
                <Grid container spacing={2}>
                  <Grid item sm={3} xs={6}>
                    <div className={classes.sectionDesktopIcon}>
                      <div>
                        <a href="/">
                          <img
                            className={classes.logo}
                            src={logoImage.default}
                            component={Link}
                            to="/"
                          />
                          <img
                            className={classes.isoLogo}
                            src={IsologoImage.default}
                            component={Link}
                            to="/"
                          />
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={6} xs={6} className={classes.searchContainer}>
                    {/* Caja de Busqueda */}
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <Button
                          style={{
                            outline: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <SearchIcon
                            style={{
                              marginTop: "-0.05rem",
                              marginLeft: "-1.5rem",
                              color: "#727272",
                            }}
                          />
                        </Button>
                      </div>
                      <InputBase
                        placeholder={t("Search for goods")}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                      />
                    </div>
                  </Grid>
                  <Grid className={classes.langContainer} item sm={3} xs={6}>
                    <Button
                      className={classes.lang}
                      aria-controls="language-menu"
                      aria-haspopup="true"
                      onClick={OpenLanguage}
                    >
                      EN <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                    </Button>
                    <Button
                      className={classes.connect}
                      onClick={connect}
                      variant="contained"
                      color="primary"
                    >
                      {_formatWalletAddress(walletAddress) || `${t("Connect")}`}
                    </Button>
                  </Grid>
                  {/* Second row */}
                  <Grid item sm={3} xs={6} className={classes.location}>
                    <LocationOnOutlinedIcon></LocationOnOutlinedIcon>{t("Send to")}{" "}
                    <b>Buenos Aires</b>{" "}
                    {/* modify in base of location of user */}
                  </Grid>
                  <Grid item sm={7} xs={6} className={classes.listItemsMenu}>
                    <div className={classes.container} />
                    <div className={classes.sectionDesktop}>
                      {/*cambiar "apuntar a notif, una vez creado" y badgeContent{''} */}
                      <Typography
                        disableTypography
                        className={classes.link}
                        noWrap
                      >
                        <ListItemText
                          disableTypography
                          className={classes.listItemTextc}
                          aria-controls="categories-menu"
                          aria-haspopup="true"
                          onClick={OpenCategories}
                        >
                          {t("Categories")}
                          <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                        </ListItemText>
                        <Link className={classes.link} to="/sell">
                          {t("Sell")}
                        </Link>
                        <Link className={classes.link} to="/browsinghistory">
                          {t("Browsing history")}
                        </Link>
                        <Link className={classes.link} to="/watchlist">
                          {t("Watch list")}
                        </Link>
                        <Link className={classes.link} to="/helpdesk">
                          {t("Help desk")}
                        </Link>
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item sm={2} xs={6} className={classes.quickActionsMenu}>
                    <div style={{ display: "inline-flex" }}>
                      <span className={classes.sectionDesktop}>
                        <AccountCircle
                          className={classes.notificon}
                          onClick={OpenProfile}
                          aria-label="account of current user"
                          aria-controls="profile-menu"
                          aria-haspopup="true"
                          color="inherit"
                        />
                        <Badge badgeContent={17} color="secondary">
                          <NotificationsIcon className={classes.notificon} />
                        </Badge>
                      </span>
                      <Badge color="primary">
                        <ShoppingCartOutlinedIcon
                          className={classes.carticon}
                        />{" "}
                        {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}
                      </Badge>
                    </div>
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
                className={classes.moreIcon}
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

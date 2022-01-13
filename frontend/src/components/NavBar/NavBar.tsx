import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
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
import * as profileService from "../../services/profileService";
import * as etherscanService from "../../services/etherscanService";
import { useTranslation } from "react-i18next";
import { ProfileMenu, Profile } from "./ProfileMenu";
import { useStyles } from "./NavbarStyles";

const API_URL = "http://localhost:4000";
const name = "Manuel Rodríguez Roldán"; /*fetch from poh address*/

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
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLElement | null>();
  // const [categoriesAnchorEl, setCategoriesAnchorEl] = useState<HTMLElement | null>();
  const [walletAddress, setWalletAddress] = React.useState("");
  // const [languageAnchorEl, setLanguageAnchorEl] = useState<HTMLElement | null>();
  // const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>();
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const categoriesMenuOpen = Boolean(categoriesAnchorEl);
  // const languageMenuOpen = Boolean(languageAnchorEl);
  // const profileMenuOpen = Boolean(profileAnchorEl);
  const [profile, setProfile] = useState<Profile | undefined>();

  const { t, i18n } = useTranslation("navbar");

  // const OpenCategories = (event) => {
  //   setCategoriesAnchorEl(event.currentTarget);
  // };
  // const OpenLanguage = (event: React.MouseEvent) => {
  //   setLanguageAnchorEl(event.currentTarget);
  // };
  // const OpenProfile = (event) => {
  //   setProfileAnchorEl(event.currentTarget);
  // };
  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };
  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const connect = () => {
  //   if (!token) {
  //     setupEthState().then(async (r) => {
  //       const { signerAddress } = r;
  //       await axios
  //         .post(`${API_URL}/api/profiles/login`, {
  //           walletAddress: signerAddress,
  //         })
  //         .then((resp) => {
  //           setWalletAddress(resp.data.eth_address);
  //           setToken(resp.data.token);
  //           setProfileInfo({ ...resp.data });
  //           // Save token and wallet on sessionStorage
  //           saveLoginInfo(resp.data.token, resp.data.eth_address, {
  //             display_name: resp.data.display_name,
  //             photo: resp.data.photo,
  //           });
  //         });
  //     });
  //   }
  // };

  useEffect(() => {
    const loadData = async () => {
      const { signerAddress } = await setupEthState();
      const { photo, eth_address, display_name, token } =
        await profileService.getProfile(signerAddress);
      const ubiBalance = await etherscanService.getBalanceUbi(eth_address);

      setProfile({
        photo,
        displayName: display_name,
        ubiAmount: ubiBalance ?? ethers.BigNumber.from(0),
        token,
      });
    };

    loadData();
  }, []);

  const handleClose = () => {
    // setAnchorEl(null);
    // setCategoriesAnchorEl(null);
    // setLanguageAnchorEl(null);
    // setProfileAnchorEl(null);
  };

  const categories = "categories-menu";
  // const renderMenuCategories = (
  //   <Menu
  //     id={categories}
  //     anchorEl={categoriesAnchorEl}
  //     getContentAnchorEl={null}
  //     anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  //     transformOrigin={{ vertical: "top", horizontal: "center" }}
  //     keepMounted
  //     open={Boolean(categoriesMenuOpen)}
  //     onClose={handleClose}
  //   >
  //     <MenuItem className={classes.listItemText} onClick={handleClose}>
  //       {t("Arts & Crafts")}
  //     </MenuItem>
  //     <MenuItem className={classes.listItemText} onClick={handleClose}>
  //       {t("Automotive")}
  //     </MenuItem>
  //     <MenuItem className={classes.listItemText} onClick={handleClose}>
  //       {t("Appliances")}
  //     </MenuItem>
  //     <MenuItem className={classes.listItemText} onClick={handleClose}>
  //       {t("VideoGames")}
  //     </MenuItem>
  //   </Menu>
  // );
  const language = "language-menu";
  // const renderMenuLanguage = (
  //   <Menu
  //     id={language}
  //     anchorEl={languageAnchorEl}
  //     getContentAnchorEl={null}
  //     anchorOrigin={{
  //       vertical: "bottom",
  //       horizontal: "left",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     keepMounted
  //     open={Boolean(languageMenuOpen)}
  //     onClose={handleClose}
  //   >
  //     <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
  //       English
  //     </MenuItem>
  //     <MenuItem
  //       style={{ fontFamily: "Open Sans" }}
  //       onClick={() => {
  //         i18n.changeLanguage("es");
  //         handleClose();
  //       }}
  //     >
  //       Español
  //     </MenuItem>
  //     <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
  //       Português
  //     </MenuItem>
  //     <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
  //       Française
  //     </MenuItem>
  //     <MenuItem style={{ fontFamily: "Open Sans" }} onClick={handleClose}>
  //       Deutsche
  //     </MenuItem>
  //   </Menu>
  // );
  const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <Button
  //         className={classes.connectMobile}
  //         onClick={connect}
  //         variant="contained"
  //         color="primary"
  //       >
  //         {_formatWalletAddress(walletAddress) || "Connect"}
  //       </Button>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="profile-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <Link to="/myinfo" className={classes.menuMobileItemLink}>
  //         <p className={classes.menuMobileItemLabel}>{t("Profile")}</p>
  //       </Link>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p className={classes.menuMobileItemLabel}>{t("Notifications")}</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton color="inherit">
  //         <Badge badgeContent={1} color="primary">
  //           <ShoppingCartOutlinedIcon />{" "}
  //           {/*cambiar "apuntar a cart, una vez creado + prop como notif(en est caso seria cant de items en el cart)" */}
  //         </Badge>
  //       </IconButton>
  //       <p className={classes.menuMobileItemLabel}>{t("Cart")}</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton color="inherit">
  //         <Badge>
  //           <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
  //         </Badge>
  //       </IconButton>
  //       <p className={classes.menuMobileItemLabel}>{t("Categories")}</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <Router>
  //         <IconButton color="inherit">
  //           <Link to="/sell">
  //             <Badge color="secondary">
  //               <LoyaltyOutlinedIcon
  //                 className={classes.linkmenuicon}
  //               ></LoyaltyOutlinedIcon>
  //               <div className={classes.linkmenu}>
  //                 <p className={classes.menuMobileItemLabel}>{t("Sell")}</p>
  //               </div>
  //             </Badge>
  //           </Link>
  //         </IconButton>
  //       </Router>
  //     </MenuItem>
  //     <MenuItem>
  //       <Router>
  //         <IconButton color="inherit">
  //           <Link to="/browsinghistory">
  //             <Badge color="secondary">
  //               <HistoryOutlinedIcon
  //                 className={classes.linkmenuicon}
  //               ></HistoryOutlinedIcon>
  //               <div className={classes.linkmenu}>
  //                 <p className={classes.menuMobileItemLabel}>
  //                   {t("Browsing history")}
  //                 </p>
  //               </div>
  //             </Badge>
  //           </Link>
  //         </IconButton>
  //       </Router>
  //     </MenuItem>
  //     <MenuItem>
  //       <Router>
  //         <IconButton color="inherit">
  //           <Link to="/watchlist">
  //             <Badge color="secondary">
  //               <AddToQueueOutlinedIcon
  //                 className={classes.linkmenuicon}
  //               ></AddToQueueOutlinedIcon>
  //               <div className={classes.linkmenu}>
  //                 <p className={classes.menuMobileItemLabel}>
  //                   {t("Watch list")}
  //                 </p>
  //               </div>
  //             </Badge>
  //           </Link>
  //         </IconButton>
  //       </Router>
  //     </MenuItem>
  //     <MenuItem>
  //       <Router>
  //         <IconButton color="inherit">
  //           <Link to="/helpdesk">
  //             <Badge color="secondary">
  //               <ContactSupportOutlinedIcon
  //                 className={classes.linkmenuicon}
  //               ></ContactSupportOutlinedIcon>
  //               <div className={classes.linkmenu}>
  //                 <p className={classes.menuMobileItemLabel}>
  //                   {t("Help desk")}
  //                 </p>
  //               </div>
  //             </Badge>
  //           </Link>
  //         </IconButton>
  //       </Router>
  //     </MenuItem>
  //   </Menu>
  // );

  const { jwtToken, savedWallet, profileData } = getLoginInfo();
  useEffect(() => {
    const init = async () => {
      if (jwtToken && savedWallet) {
        // setToken(jwtToken);
        setWalletAddress(savedWallet);
        // setProfileInfo(profileData);
      }
    };
    init();
  }, []);

  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Container maxWidth="lg">
            <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item sm={3} xs={6}>
                  <div>
                    <div>
                      <a href="/">
                        <img
                          className={classes.logo}
                          src={logoImage.default}
                          // component={Link}
                          // to="/"
                        />
                        <img
                          className={classes.isoLogo}
                          src={IsologoImage.default}
                          // component={Link}
                          // to="/"
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
                    // onClick={OpenLanguage}
                  >
                    EN <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                  </Button>
                  <Button
                    className={classes.connect}
                    // onClick={connect}
                    variant="contained"
                    color="primary"
                  >
                    {_formatWalletAddress(walletAddress) || "Connect"}
                  </Button>
                </Grid>
                {/* Second row */}
                <Grid item sm={3} xs={6} className={classes.location}>
                  <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                  {t("Send to")} <b>Buenos Aires</b>{" "}
                  {/* modify in base of location of user */}
                </Grid>
                <Grid item sm={7} xs={6} className={classes.listItemsMenu}>
                  {/* <div className={classes.container} /> */}
                  <div className={classes.sectionDesktop}>
                    {/*cambiar "apuntar a notif, una vez creado" y badgeContent{''} */}
                    {/* <Typography
                        disableTypography
                        className={classes.link}
                        noWrap
                      > */}
                    <ListItemText
                      disableTypography
                      className={classes.listItemText}
                      aria-controls="categories-menu"
                      aria-haspopup="true"
                      // onClick={OpenCategories}
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
                    {/* </Typography> */}
                  </div>
                </Grid>
                <Grid item sm={2} xs={6} className={classes.quickActionsMenu}>
                  <div style={{ display: "inline-flex" }}>
                    <span className={classes.sectionDesktop}>
                      <ProfileMenu id="profile-menu" profile={profile} />
                      <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon className={classes.notificon} />
                      </Badge>
                    </span>
                    <Badge color="primary">
                      <ShoppingCartOutlinedIcon className={classes.carticon} />{" "}
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
              // onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.moreIcon}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenuCategories}
      {renderMenuLanguage} */}
    </div>
  );
}

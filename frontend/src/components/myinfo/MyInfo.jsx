import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import Divider from "@material-ui/core/Divider";
import EditName from "./EditName";
import IdNumber from "./IdNumber";
import ShippAddress from "./ShippAddress";
import CellphoneNumber from "./CellPhoneNumber";
import TelegramHandl from "./TelegramHandl";
import Tooltip from "@material-ui/core/Tooltip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { useEffect } from "react";
import { profileService } from "../../services/profileService";
import { setupEthState } from "../../ethereum";
import { etherscanService } from "../../services/etherscanService";
import { convertExpo } from "../../utils";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
  inline: {
    fontFamily: "Open Sans",
    display: "flex",
  },
  listItem: {
    borderRadius: "20px",
    height: "117px",
    backgroundColor: "white",
    fontFamily: "Open Sans",
  },
  btnMyProfile: {
    display: "flex",
    alignItems: "center",
    marginRight: "2rem",
    justifyContent: "space-around",
    marginLeft: "auto",
    borderRadius: "10px",
    height: "30px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    minWidth: "150px",
    maxWidth: "150px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    marginTop: "-10px",
  },
  imageUbi: {
    width: "17px",
    height: "17px",
    marginLeft: "1.4rem",
    marginRight: "-1rem",
    paddingBottom: "3px",
  },
  infoClass: {
    outline: "none !important",
    "&:hover": {
      outline: "none !important",
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
      textDecoration: "none",
      fontFamily: "Open Sans",
    },
  },
  listItemTextIcon: {
    height: "14px",
    width: "11px",
    color: "white",
    backgroundColor: "#00ABD1",
    borderRadius: "2px",
    marginRight: "9px",
    marginLeft: "4px",
    boxShadow: "0px 3px 6px #00000029",
  },
  profName: {
    marginLeft: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  listItemText: {
    marginLeft: "20px",
    fontSize: "18px",
    marginTop: "2rem",
    fontFamily: "Open Sans",
    color: "black",
  },
  menuMobileIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    [theme.breakpoints.up(600)]: {
      display: "none",
    },
  },
  menuIconLink: {
    color: "#000",
    textDecoration: "none",
    "&:hover, &:active, &:focus": {
      color: "#000",
      textDecoration: "none",
    },
  },
}));
function _formatWalletAddress(address = "") {
  return address ? address.substr(0, 8) : "";
}

export default function AlignItemsList() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("myinfo");
  const profileImage = require("../../media/vbuterin.png");
  const ubiImage = require("../../media/ubi2.svg");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const openMobileMenuOpt = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMobileMenuOpt = () => {
    setAnchorEl(null);
  };

  // Get Profile
  const [data, setData] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

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

  if (!data) return <>Cargando...</>;
  
  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <Typography variant="h2">
        <h4
          style={{
            fontWeight: "light",
            fontSize: "12px",
            color: "gray",
            marginLeft: "0.75rem",
          }}
        >
          {t("My Info")}
        </h4>
      </Typography>
      <Typography variant="h2">
        <h4
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "0.75rem",
          }}
        >
          {t("Proof of humanity information")}
        </h4>
      </Typography>
      <Grid
        container
        spacing={1}
        variant="fullWidth"
        direction="column"
        justifyContent="space-around"
        alignItems="left"
        style={{ marginTop: "4px" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginBottom: "8px",
            height: "117px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={data.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className={classes.profName}>
                  {data.first_name} {data.last_name}
                </div>
              }
              secondary={
                <React.Fragment>
                  <div style={{ display: "inline-flex", marginLeft: "20px" }}>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {_formatWalletAddress(data.eth_address)}
                      {/* agregar call de poh al address */}
                    </Typography>
                    {"|"}
                    <FileCopyOutlinedIcon
                      className={classes.listItemTextIcon}
                    />
                    <CallMadeOutlinedIcon
                      className={classes.listItemTextIcon}
                    />
                  </div>
                  <ListItemAvatar>
                    <img
                      alt="{ubilog}"
                      className={classes.imageUbi}
                      src={ubiImage.default}
                    />
                    <div style={{ display: "inline-flex", marginLeft: "20px" }}>
                      {`${ubisAmmount} ${t("UBI's dripped")}`}
                    </div>
                  </ListItemAvatar>
                  <a
                    className={classes.btnMyProfile}
                    style={{ marginTop: "-3rem" }}
                    variant="contained"
                    target="_blank"
                    href={`https://app.proofofhumanity.id/profile/${data.eth_address}`}
                    secondary="MyProfile"
                  >
                    {t("My PoH Profile")}
                  </a>
                  <IconButton
                    onClick={openMobileMenuOpt}
                    aria-label="more"
                    aria-haspopup="true"
                    aria-controls="more-menu"
                    className={classes.menuMobileIcon}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="more-menu"
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={closeMobileMenuOpt}
                    open={Boolean(anchorEl)}
                  >
                    <MenuItem className={classes.menuIcons}>
                      <a
                        className={classes.menuIconLink}
                        target="_blank"
                        rel="noreferrer"
                        href="https://app.proofofhumanity.id/profile/0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"
                      >
                        My PoH Profile
                      </a>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <div style={{ display: "inline-flex" }}>
          <Typography variant="h2">
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "10px",
                marginLeft: "0.75rem",
              }}
            >
              {t("Personal and shipping information")}
            </h4>
          </Typography>
          <Tooltip
            disableTypography
            className={classes.infoClass}
            title={t("This info will only be shared when you make a purchase of an item that needs to be shipped.")}
          >
            <IconButton aria-label="info">
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="left"
          alignItems="left"
          style={{ marginTop: "10px", marginLeft: "2px" }}
        >
          <Grid
            item
            xs={12}
            md={12}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              height: "300px",
              marginLeft: "0.75rem",
            }}
          >
            <ListItem className={classes.listItem} alignItems="flex-start">
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>
                    <ListItem style={{ height: "18px" }}>
                      <ListItemText
                        classes={{ secondary: classes.listItemText }}
                        secondary={`${t("Real Name")}: ${data.first_name} ${data.last_name}`}   
                      />
                    </ListItem>{" "}
                    <EditIcon
                      component={EditName}
                      open={open}
                      onClose={handleClose}
                    />
                    <Divider
                      style={{ backgroundColor: "black", height: "0.5px" }}
                    />
                    <ListItem style={{ height: "18px" }}>
                      <ListItemText
                        classes={{ secondary: classes.listItemText }}
                        secondary={`${t("id")}: ${data.dni}`}
                      />
                    </ListItem>
                    <EditIcon
                      component={IdNumber}
                      open={open}
                      onClose={handleClose}
                    />
                    <Divider
                      style={{ backgroundColor: "black", height: "0.5px" }}
                    />
                    <ListItem style={{ height: "18px" }}>
                      <ListItemText
                        classes={{ secondary: classes.listItemText }}
                        secondary={`${t("Shipping address")}: ${data.address} `}
                      />
                    </ListItem>
                    <EditIcon
                      component={ShippAddress}
                      open={open}
                      onClose={handleClose}
                    />
                    <Divider
                      style={{ backgroundColor: "black", height: "0.5px" }}
                    />
                    <ListItem style={{ height: "18px" }}>
                      <ListItemText
                        classes={{ secondary: classes.listItemText }}
                        secondary={`${t("Cellphone")}: ${data.telephone} `}
                      />
                    </ListItem>
                    <EditIcon
                      component={CellphoneNumber}
                      open={open}
                      onClose={handleClose}
                    />
                    <Divider
                      style={{ backgroundColor: "black", height: "0.5px" }}
                    />
                    <ListItem style={{ height: "18px" }}>
                      <ListItemText
                        classes={{ secondary: classes.listItemText }}
                        secondary={t("Telegram handle:")}
                      />
                    </ListItem>
                    <EditIcon
                      component={TelegramHandl}
                      open={open}
                      onClose={handleClose}
                    />
                    <Divider
                      style={{ backgroundColor: "black", height: "0.5px" }}
                    />
                  </React.Fragment>
                }
              />
            </ListItem>
          </Grid>
        </Grid>
      </Grid>
    </List>
  );
}

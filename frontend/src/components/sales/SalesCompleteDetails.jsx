import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Open Sans",
    [theme.breakpoints.down(900)]: {
      marginBottom: 250,
    },
  },
  inline: {
    fontSize: "11px",
    display: "flex",
    fontFamily: "Open Sans",
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  transactionBuyerContainer: {
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down(481)]: {
      maxWidth: "initial !important",
      width: "calc(100% - 60px) !important",
    },
  },
  listItemGrid: {
    backgroundColor: "white",
    borderRadius: "10px",
    [theme.breakpoints.down(900)]: {
      width: "100% !important",
      maxWidth: "calc(100% - 4rem)",
      flex: 1,
      margin: "1rem 0",
    },
    [theme.breakpoints.down(481)]: {
      maxWidth: "initial",
    },
  },
  listItemGridTransaction: {
    [theme.breakpoints.down(481)]: {
      width: "calc(100% - 28px)",
    },
  },
  profileBuyerGrid: {
    [theme.breakpoints.down(960)]: {
      width: "100%",
      marginTop: "10px",
      flex: 1,
      marginLeft: "0 !important",
      maxWidth: "calc(100% - 120px)",
    },
    [theme.breakpoints.down(481)]: {
      maxWidth: "initial",
    },
  },  
  listItem: {
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Open Sans",
  },
  btnSendMsg: {
    display: "flex",
    alignItems: "center",
    right: "1px",
    fontSize: "13px",
    fontWeight: "500",
    textTransform: "none",
    justifyContent: "space-between",
    marginTop: "10px",
    marginLeft: "-20px",
    marginBottom: "5px",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    minWidth: "150px",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecoloration: "transparent",
    },
  },
  link: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginLeft: "1.5rem",
    marginRight: "-0.75rem",
    justifyContent: "space-evenly",
    padding: theme.spacing(1),
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      textDecorationColor: "transparent",
    },
  },
  imageProfile: {
    display: "flex",
    alignItems: "left",
    left: "10px",
    justifyContent: "left",
    marginLeft: "1px",
    marginBottom: "-10px",
    width: "104px",
    height: "104px",
  },
  imageOrder: {
    display: "flex",
    alignItems: "center",
    right: "1px",
    maxWidth: "70px",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginTop: "-65px",
  },
  listItemTransaction: {
    height: "auto",
    marginTop: "15px",
    padding: "0 0 0 1rem",
  },
  listItemText: {
    fontSize: "11px", //Insert your required size
    color: "black",
    lineHeight: "17px",
    marginLeft: "-13px",
    fontFamily: "Open Sans",
  },
  listItemTextTotal: {
    fontSize: "11px", //Insert your required size
    color: "black",
    fontWeight: "bold",
    marginLeft: "-13px",
    fontFamily: "Open Sans",
  },
  listItemTextIcon: {
    height: "14px",
    width: "11px",
    color: "white",
    backgroundColor: "#00ABD1",
    borderRadius: "2px",
    marginRight: "9px",
    boxShadow: "0px 3px 6px #00000029",
  },
  profileName: {
    fontSize: "16px",
    height: "22px",
    marginTop: "-60px",
    fontWeight: "700",
    marginLeft: "20px",
    fontFamily: "Open Sans",
  },
  profileRepContainer: {
    padding: 0,
    flexDirection: "column",
    alignItems: "baseline",
  },
  txtReputation: {
    color: "black",
    fontWeight: "light",
    fontSize: "12px",
    justifyContent: "left",
    alignItems: "left",
  },
  starsContainer: {},
  starsReput: {
    display: "inline-block",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    marginTop: "-50px",
    marginLeft: "85px",
    color: "#00ABD1",
  },
  starsReputation: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    color: "#00ABD1",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("salescompletedetails");
  const profileImage = require("../../media/vbuterin.png");
  const shoeImage = require("../../media/canoneos.jpg");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <Breadcrumbs
        style={{ marginTop: "-0.25rem" }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link
          className={classes.link}
          to="/sales"
          style={{ color: "#808080" }}
          onClick={handleClick}
        >
          {t("Sales")}
        </Link>
        <Link
          className={classes.link}
          to="/salescomplete"
          style={{ color: "#808080", marginLeft: "-0.5rem" }}
          onClick={handleClick}
        >
          {t("Complete")}
        </Link>
        <Link className={classes.link} style={{ marginLeft: "-0.2rem" }}>
          {t("Details")}
        </Link>
      </Breadcrumbs>

      <Grid
        container
        spacing={1}
        variant="fullWidth"
        direction="row"
        justifyContent="space-between"
        alignItems="left"
        style={{ marginTop: "4px" }}
      >
        <Grid
          item
          xs={10}
          md={10}
          className={classes.listItemGrid}
          style={{
            marginBottom: "4px",
            marginLeft: "2rem",
            height: "67px",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemText
              disableTypography
              //en primary va nombre del order item}
              primary="Canon EOS Rebel T7 EF-S 18-55mm"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    style={{ fontSize: "13px" }}
                  >
                    {" "} {t("item")}
                  </Typography>

                  <ListItemAvatar>
                    <img
                      alt="{imgjson}"
                      className={classes.imageOrder}
                      src={shoeImage.default}
                    />
                  </ListItemAvatar>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="left"
        alignItems="flex-start"
        className={classes.transactionBuyerContainer}
        style={{ marginTop: "10px", marginLeft: "1.8rem" }}
      >
        <Grid
          item
          xs={10}
          md={5}
          className={`${classes.listItemGrid} ${classes.listItemGridTransaction}`}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemText
              primary={
                <React.Fragment>
                  <div style={{ display: "flex" }}>
                    <ListItemText
                      disableTypography
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "inline-flex",
                      }}
                      primary={t("Transaction Details")}
                    />
                    <Breadcrumbs
                      separator="›"
                      aria-label="breadcrumb"
                      style={{ display: "inline-flex" }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: "light" }}>
                        {t("from")}
                      </span>
                      {/* en linea 320 {" "} insertar address */}
                      <span style={{ fontSize: "13px" }}> {t("to")} {" "}</span> 
                    </Breadcrumbs>
                  </div>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <div style={{ fontSize: "11px", fontWeight: "100" }}>
                    {/* conectar date en {" "} */}
                    {t(" Date  |")}{" "}
                    <FileCopyOutlinedIcon
                      className={classes.listItemTextIcon}
                    />
                    <CallMadeOutlinedIcon
                      className={classes.listItemTextIcon}
                    />
                  </div>
                  <ListItem
                    className={classes.listItemTransaction}
                    style={{ height: "18px", marginTop: "15px" }}
                  >
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      secondary={t("Amount")}
                    />
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                      secondary={" ","UBI"}
                    />
                  </ListItem>
                  <Divider
                    style={{ backgroundColor: "black", height: "1px" }}
                  />
                  <ListItem
                    className={classes.listItemTransaction}
                    style={{ height: "18px" }}
                  >
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      secondary={t("Transaction Fee")}
                    />
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                      secondary={" ","UBI"}
                    />
                  </ListItem>
                  <Divider
                    style={{ backgroundColor: "black", height: "1px" }}
                  />
                  <ListItem
                    className={classes.listItemTransaction}
                    style={{ height: "18px" }}
                  >
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      secondary={t("Gas price")}
                    />
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                      secondary={" ","dai"}
                    />
                  </ListItem>
                  <Divider
                    style={{ backgroundColor: "black", height: "1px" }}
                  />
                  <ListItem
                    className={classes.listItemTransaction}
                    style={{ height: "18px" }}
                  >
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      secondary="Nonce"
                    />
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                      secondary={" "}
                    />
                  </ListItem>
                  <Divider
                    style={{ backgroundColor: "black", height: "1px" }}
                  />
                  <ListItem
                    className={classes.listItemTransaction}
                    style={{ height: "18px" }}
                  >
                    <ListItemText
                      classes={{ primary: classes.listItemTextTotal }}
                      primary="Total"
                    />
                    <ListItemText
                      classes={{ secondary: classes.listItemText }}
                      style={{
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                        textAlign: "right",
                      }}
                      secondary={" ","UBI"}
                    />
                  </ListItem>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid
          item
          xs={5}
          md={5}
          className={`${classes.listItemGrid} ${classes.profileBuyerGrid}`}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "7px",
            height: "190px",
            justifyContent: "space-around",
            width: "30vw",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemText
              disableTypography
              style={{ marginTop: "0.65rem", marginBottom: "-0.3rem" }}
              primary={t("Buyer Information")}
            />
          </ListItem>
          <ListItem style={{ alignItems: "flex-start", height: "initial" }}>
            <Grid xs={3} style={{ height: "100%", flexBasis: "auto" }}>
              <ListItemAvatar
                style={{ margin: 0,
                  width: "100%",
                  height: "100%",
                  maxWidth: "100px", }}
              >
                <img
                  alt="{imgjson}"
                  className={classes.imageProfile}
                  style={{
                    marginTop: 0,
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  src={profileImage.default}
                />
              </ListItemAvatar>
            </Grid>
            <Grid
              xs={9}
              style={{
                height: "100%",
                margin: "0 0.5rem",
                justifyContent: "center",
              }}
            >
              <ListItemText
                primary={
                  <React.Fragment>
                    <Breadcrumbs
                      separator="›"
                      aria-label="breadcrumb"
                      style={{ display: "inline-flex" }}
                    >
                      <ListItemText
                        disableTypography
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          display: "inline-flex",
                          color: "black",
                        }}
                        primary="Vitalik Buterin"
                      />{" "}
                      <span
                        style={{
                          marginLeft: "1px",
                          fontSize: "13px",
                          fontWeight: "light",
                          display: "inline-flex",
                        }}
                      >
                        {t("address")}
                      </span>
                    </Breadcrumbs>
                  </React.Fragment>
                }
              />
              <ListItem className={classes.profileRepContainer}>
                
                <div className={classes.starsContainer}>
                  <a>{t("Reputation")} </a>
                  <StarBorderOutlinedIcon className={classes.starsReputation} />
                  <StarBorderOutlinedIcon className={classes.starsReputation} />
                  <StarBorderOutlinedIcon className={classes.starsReputation} />
                  <StarBorderOutlinedIcon className={classes.starsReputation} />
                  <StarBorderOutlinedIcon className={classes.starsReputation} />
                </div>
              </ListItem>

              <Button
                className={classes.btnSendMsg}
                variant="contained"
                component={Link}
                to="/salescompletedetails/messagesbox"
                primary="MessagesBox"
                style={{
                  minWidth: 0,
                  width: "150px",
                  margin: "0.5rem 0",
                }}
              >
                {t("Send message")}
              </Button>
            </Grid>
          </ListItem>
        </Grid>
      </Grid>
    </List>
  );
}

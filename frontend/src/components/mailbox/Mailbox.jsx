import React from "react";
import styles from './mboxDisputeStyles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import LongMenu from "./LongMenu";
import ImageIcon from "@material-ui/icons/Image";
import { useTranslation } from "react-i18next";

export default function AlignItemsList() {
  const classes = styles();
  const [open, setOpen] = React.useState(true);
  const { t, i18n } = useTranslation("mailbox");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link} to="/mailbox" onClick={handleClick}>
          {t("Mailbox")}
        </Link>
      </Breadcrumbs>
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
            borderRadius: "20px",
            marginBottom: "8px",
            height: "117px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
             <ImageIcon className={classes.image} />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}>
                  {"Product Title"}
                </b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {"Price UBI"}{"(Price ARS/USD)"}
                  </Typography>
                  <l style={{ fontWeight: "200" }}>{t("Available")}</l>
                  <FiberManualRecordSharpIcon
                    className={classes.itemStatusIconAvailable}
                  />
                  <ListItem
                    style={{
                      display: "inline-flex",
                      top: "-3rem",
                      left: "-1rem",
                    }}
                  >
                    <Button
                      style={{ display: "inline-flex" }}
                      className={classes.btnChat}
                      variant="contained"
                      component={Link}
                      to="/chat"
                      primary="Chat"
                    >
                      {t("Chat")}
                    </Button>
                    <MoreHorizSharpIcon
                      className={classes.buttonThreeDots}
                      component={LongMenu}
                      open={open}
                      onClose={handleClose}
                    />
                  </ListItem>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: "8px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem alignItems="flex-start" className={classes.listItem}>
            <ListItemAvatar>
              <ImageIcon className={classes.image} />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}>
                  {"Product Title"}
                </b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {"Price UBI"}{"(Price ARS/USD)"}
                  </Typography>
                  <l style={{ fontWeight: "200" }}>{t("Paused")}</l>
                  <FiberManualRecordSharpIcon
                    className={classes.itemStatusIconPaused}
                  />
                  <ListItem
                    style={{
                      display: "inline-flex",
                      top: "-3rem",
                      left: "-1rem",
                    }}
                  >
                    <Button
                      style={{ display: "inline-flex" }}
                      className={classes.btnChat}
                      variant="contained"
                      component={Link}
                      to="/chat"
                      primary="Chat"
                    >
                      {t("Chat")}
                    </Button>
                    <MoreHorizSharpIcon
                      style={{ display: "inline-flex" }}
                      component={LongMenu}
                      open={open}
                      onClose={handleClose}
                    />
                  </ListItem>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginLeft: "0.75rem",
          }}
        >
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <ImageIcon className={classes.image} />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={
                <b style={{ fontSize: "16px" }}>
                  {"Product Title"}
                </b>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {"Price UBI"}{"(Price ARS/USD)"}
                  </Typography>
                  <l style={{ fontWeight: "200" }}>{t("Sold")}</l>
                  <FiberManualRecordSharpIcon
                    className={classes.itemStatusIconSold}
                  />
                  <ListItem
                    style={{
                      display: "inline-flex",
                      top: "-3rem",
                      left: "-1rem",
                    }}
                  >
                    <Button
                      style={{ display: "inline-flex" }}
                      className={classes.btnChat}
                      variant="contained"
                      component={Link}
                      to="/chat"
                      primary="Chat"
                    >
                      {t("Chat")}
                    </Button>
                    <MoreHorizSharpIcon
                      style={{ display: "inline-flex" }}
                      component={LongMenu}
                      open={open}
                      onClose={handleClose}
                    />
                  </ListItem>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
      </Grid>
    </List>
  );
}

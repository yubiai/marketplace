import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import EscrowPayment from "../checkout/escrowPayChk";
import Menu from "./Menu";
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
    marginTop: "-0.5rem",
    height: "30px",
  },
  listItem: {
    borderRadius: "20px",
    height: "117px",
    backgroundColor: "white",
    fontFamily: "Open Sans",
    alignItems:"flex-start",
    width: "100%",
    maxWidth: "300px",
  },
  listItemText: {
    fontFamily: "Open Sans",
    marginLeft: "0px",
    fontSize: "16px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "15px",
      // justifyContent: "center !important",
      // alignItems: "center !important",
    },
  },
  btnPreview: {
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    textTransform: "none",
    // right: "2rem",
    // top: "-4.75rem",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    marginBottom: "5px",
    borderRadius: "10px",
    backgroundColor: "#00ABD1",
    color: "#fff",
    minWidth: "140px",
    maxWidth: "140px",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
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
  btnEdit: {
    display: "flex",
    fontWeight: "500",
    textTransform: "none",
    // right: "2rem",
    // top: "-4.5rem",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    borderRadius: "10px",
    minWidth: "140px",
    maxWidth: "140px",
    backgroundColor: "#d4ecf1",
    color: "#00ABD1",
    "&:hover": {
      borderBottom: "none",
      color: "#00ABD1",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  addItem: {
    display: "inline-flex",
    color: "#FFFF",
    float: "right",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: "-2.2rem",
    marginRight: "2rem",
    backgroundColor: "#00ABD1",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "25px",
    opacity: "1",
  },
  link: {
    display: "flex",
    fontSize: "14px",
    color: "#000000",
    textDecorationColor: "transparent",
    marginTop: "-0.03rem",
    marginLeft: "0.4rem",
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
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
    marginLeft: "0.5rem",
  },
  buttonThreeDots: {
    outline: "none",
    display: "flex",
    maxBlockSize: "50px",
    width: 50,
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  escrowTimer: {
    height: "126px !important",
    width:"100% !important",
    maxWidth:"379px !important",
    display: "flex",
    top: "5px",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      height: "126px !important",
     },
  },
  Price: {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    color: "#323232"
  },
  PriceFiat: {
    color:"#BABABA",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "right",
    marginLeft:"5px"
  },
  itemSectionGrid: {
    marginTop: "4px",
    height: "100%",
    maxHeight: "160px",
    marginLeft: "-15px",
    display: "contents",
    // border: "1px solid red",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "35px",
      position: "relative",
      top: "50px",
     },
  },
  indItemGrid: {
    backgroundColor:"white",
    borderRadius:"5px",
    height: "100%",
    maxHeight: "180px",
    minHeight: "180px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    // border: "1px solid blue",
    [theme.breakpoints.down(1600)]: {
        height: "100%",
        maxHeight: "180px",
        },
    [theme.breakpoints.down(1160)]: {
        height: "100%",
        maxHeight: "282px",
        minHeight: "282px",
        marginTop: "104px",
        },
    [theme.breakpoints.down(600)]: {
        height: "100%",
        maxHeight: "360px",
        minHeight: "360px",
        width: "100%",
        maxWidth: "455px",
        position: "relative",
        marginTop: "20px",
      },
    [theme.breakpoints.down(400)]: {
        height: "100%",
        width: "100%",
        maxWidth: "355px",
        maxHeight: "450px",
        position: "relative",
        marginTop: "15px",
      }, 
  },
  itemDescrGrid: {
    flexDirection:"row",
    backgroundColor: "transparent",
    // border: "1px solid black",
    borderRadius: "20px",
    marginBottom: "8px",
    height: "130px",
    marginLeft: "0.75rem",
    width: "100%",
    maxWidth: "290px",
    [theme.breakpoints.down(1600)]: {
        height: "100%",
        maxHeight: "130px",
        // marginTop: "-8px",
        },
    [theme.breakpoints.down(400)]: {
      width: "100%",
      maxWidth: "190px",
      }, 
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const { t, i18n } = useTranslation("salesactive");
  const [open, setOpen] = React.useState(true);
  const activeImage = require("../../media/canoneos.jpg");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA" }}>
      <Breadcrumbs
        style={{ marginTop: "-0.75rem" }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link
          className={classes.link}
          style={{ color: "#808080" }}
          onClick={handleClick}
        >
          {t("Sales")}
        </Link>
        <Link
          className={classes.link}
          to="/salesactive"
          onClick={handleClick}
          aria-current="page"
          style={{ marginLeft: "-0.2rem" }}
        >
          {t("Active")}
        </Link>
      </Breadcrumbs>
      <Link to={"/additem"}>
        <AddCircleOutlinedIcon
          className={classes.addItem}
          component={"svg"}
          primary="AddItem"
        />
      </Link>
      <Grid
        container
        spacing={1}
        variant="fullWidth"
        direction="column"
        justifyContent="space-around"
        alignItems="left"
        className={classes.itemSectionGrid}
      > 
       {/* first item */}
        <Grid
          container
          spacing={1}
          variant="fullWidth"
          direction="row"
          justifyContent="space-around"
          alignItems="left"
          className={classes.indItemGrid}>
          <div style={{ justifyContent:"flex-start", fleDirection:"row", alignItems:"center", display: "flex"}}>
            <Grid >
              <ListItemAvatar>
                  <img
                    alt="{imgjson}"
                    className={classes.image}
                    src={activeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        Canon EOS Rebel T7 EF-S 18-55mm
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                    <p>{"  "} {t("item")}</p>
                </div>
            </Grid>
          </div>  
            <Grid style={{ justifyContent:"flex-end", fleDirection:"row", alignItems:"center", display: "flex"}}>
              <EscrowPayment  />
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                        <Button
                          className={classes.btnPreview}
                          variant="contained"
                          component={Link}
                          to="/preview"
                          primary="Preview"
                        >
                          {t("View")}
                        </Button>
                        <Button
                          className={classes.btnEdit}
                          variant="contained"
                          component={Link}
                          to="/edititem"
                          primary="EditItem"
                        >
                          {t("Edit item")}
                        </Button>
              </Grid>    
            </Grid>
        </Grid>
        {/* second item */}
        <Grid
          container
          spacing={1}
          variant="fullWidth"
          direction="row"
          justifyContent="space-around"
          alignItems="left"
          className={classes.indItemGrid}>
          <div style={{ justifyContent:"flex-start", fleDirection:"row", alignItems:"center", display: "flex"}}>
            <Grid >
              <ListItemAvatar>
                  <img
                    alt="{imgjson}"
                    className={classes.image}
                    src={activeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        Canon EOS Rebel T7 EF-S 18-55mm
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                    <p>{"  "} {t("item")}</p>
                </div>
            </Grid>
          </div>  
            <Grid style={{ justifyContent:"flex-end", fleDirection:"row", alignItems:"center", display: "flex"}}>
              <EscrowPayment  />
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                        <Button
                          className={classes.btnPreview}
                          variant="contained"
                          component={Link}
                          to="/preview"
                          primary="Preview"
                        >
                          {t("View")}
                        </Button>
                        <Button
                          className={classes.btnEdit}
                          variant="contained"
                          component={Link}
                          to="/edititem"
                          primary="EditItem"
                        >
                          {t("Edit item")}
                        </Button>
              </Grid>    
            </Grid>
        </Grid>  
        {/* third item */}
        <Grid
          container
          spacing={1}
          variant="fullWidth"
          direction="row"
          justifyContent="space-around"
          alignItems="left"
          className={classes.indItemGrid}>
          <div style={{ justifyContent:"flex-start", fleDirection:"row", alignItems:"center", display: "flex"}}>
            <Grid >
              <ListItemAvatar>
                  <img
                    alt="{imgjson}"
                    className={classes.image}
                    src={activeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        Canon EOS Rebel T7 EF-S 18-55mm
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                    <p>{"  "} {t("item")}</p>
                </div>
            </Grid>
          </div>  
            <Grid style={{ justifyContent:"flex-end", fleDirection:"row", alignItems:"center", display: "flex"}}>
              <EscrowPayment  />
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                        <Button
                          className={classes.btnPreview}
                          variant="contained"
                          component={Link}
                          to="/preview"
                          primary="Preview"
                        >
                          {t("View")}
                        </Button>
                        <Button
                          className={classes.btnEdit}
                          variant="contained"
                          component={Link}
                          to="/edititem"
                          primary="EditItem"
                        >
                          {t("Edit item")}
                        </Button>
              </Grid>    
            </Grid>
        </Grid> 
      </Grid>
    
  </List>
  );
}

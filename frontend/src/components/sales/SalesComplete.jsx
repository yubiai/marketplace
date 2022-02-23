import React from "react";
import styles from "./SalesActNRevStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
import EscrowPayment from "../checkout/escrowPayChk";
import Menu from "./MenuComplete";
import { useTranslation } from "react-i18next";

export default function SalesComplete() {
  const classes = styles();
  const [open, setOpen] = React.useState(true);
  const { t, i18n } = useTranslation("salescomplete");
  const completeImage = require("../../media/canoneos.jpg");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMobileMenuOpt = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMobileMenuOpt = () => {
    setAnchorEl(null);
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
          to="/salescomplete"
          onClick={handleClick}
          aria-current="page"
          style={{ marginLeft: "-0.2rem" }}
        >
          {t("Complete")}
        </Link>
      </Breadcrumbs>
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
                    src={completeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                         <p className={classes.itemName}>{t("Delivered on")} {" "}</p>
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <p>{"Quantiy"} {t("item")}</p>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                </div>
            </Grid>
          </div>  
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
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
                    src={completeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        <p className={classes.itemName}>{t("Delivered on")} {" "}</p>
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <p>{"Quantiy"} {t("item")}</p>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                </div>
            </Grid>
          </div>  
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
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
                    src={completeImage.default}
                  />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        <p className={classes.itemName}>{t("Delivered on")} {" "} </p>
                        <MoreHorizSharpIcon
                          className={classes.buttonThreeDots}
                          component={Menu}
                          open={open}
                          onClose={handleClose}
                        />
                    </span>
                    <p>{"Quantiy"} {t("item")}</p>
                    <span className={classes.inline}>
                      <p className={classes.Price}>{"Price UBI"}</p>
                      <p className={classes.PriceFiat}>{"(Price ARS/USD)"}</p>
                    </span>   
                </div>
            </Grid>
          </div>  
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
              <Grid style={{flexDirection:"column",  marginLeft:"20px", marginRight:"20px"}}>
                  <Button
                    className={classes.btnDetails}
                    variant="contained"
                    component={Link}
                    to="/salescompletedetails"
                    primary="Preview"
                  >
                    {t("Details")}
                  </Button>
              </Grid>    
            </Grid>
        </Grid> 
      </Grid>
    </List>
  );
}

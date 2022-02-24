import React, { useState } from "react";
import styles from "./OrderStyles";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import EscrowPayment from "../checkout/escrowPayChk";
import { useTranslation } from "react-i18next";

export default function OrdersComplete() {
  const classes = styles();  
  const { t, i18n } = useTranslation("orders");
  //integrar el hardcodeado del orderImage 
  const orderImage = require("../../media/Shoes-PNG-File.png");
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = useState(null);
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
          {t("Orders")}
        </Link>
        <Link
          className={classes.link}
          to="/orderscomplete"
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
                        src={orderImage.default}
                   />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                         <p className={classes.itemName}>{t("Delivered on")} {" "}</p>
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
                    className={classes.btnCheckOrder}
                    variant="contained"
                    component={Link}
                    to="/checkorderscomplete"
                    secondary="CheckOrders"
                  >
                    {t("Order details")}
                  </Button>
                  <Button className={classes.btnBuyAgain} variant="contained">
                    {t("Buy it again")}
                  </Button>
              </Grid> 
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
                <Link to="/checkorderscomplete" className={classes.menuIconLink}>
                  {t("Order details")}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuIcons}>Buy it again</MenuItem>
            </Menu>     
            </Grid>
        </Grid>
       {/* end of second item */}
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
                        src={orderImage.default}
                   />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                         <p className={classes.itemName}>{t("Delivered on")} {" "}</p>
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
                    className={classes.btnCheckOrder}
                    variant="contained"
                    component={Link}
                    to="/checkorderscomplete"
                    secondary="CheckOrders"
                  >
                    {t("Order details")}
                  </Button>
                  <Button className={classes.btnBuyAgain} variant="contained">
                    {t("Buy it again")}
                  </Button>
              </Grid> 
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
                <Link to="/checkorderscomplete" className={classes.menuIconLink}>
                  {t("Order details")}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuIcons}>Buy it again</MenuItem>
            </Menu>     
            </Grid>
        </Grid>
        {/* end of second item */}
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
                        src={orderImage.default}
                   />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                         <p className={classes.itemName}>{t("Delivered on")} {" "}</p>
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
                    className={classes.btnCheckOrder}
                    variant="contained"
                    component={Link}
                    to="/checkorderscomplete"
                    secondary="CheckOrders"
                  >
                    {t("Order details")}
                  </Button>
                  <Button className={classes.btnBuyAgain} variant="contained">
                    {t("Buy it again")}
                  </Button>
              </Grid> 
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
                <Link to="/checkorderscomplete" className={classes.menuIconLink}>
                  {t("Order details")}
                </Link>
              </MenuItem>
              <MenuItem className={classes.menuIcons}>Buy it again</MenuItem>
            </Menu>     
            </Grid>
        </Grid>
        {/* end of third item */}
      </Grid>
    </List>
  );
}

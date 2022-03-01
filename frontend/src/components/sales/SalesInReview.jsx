import React from "react";
import styles from "./SalesActNRevStyles";
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
import Menu from "./Menu";
import EscrowPayment from "../checkout/escrowPayChk";
import ImageIcon from "@material-ui/icons/Image";
import { useTranslation } from "react-i18next";

export default function SalesInReview() {
  const classes = styles();
  const { t, i18n } = useTranslation("salesinreview");
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
          to="/salesinreview"
          onClick={handleClick}
          aria-current="page"
          style={{ marginLeft: "-0.2rem" }}
        >
          {t("In Review")}
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
                  <ImageIcon className={classes.image} />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                         <p className={classes.itemName}>{"Product Title"} </p>
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
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
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
                  <ImageIcon className={classes.image} />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        <p className={classes.itemName}>{"Product Title"} </p>
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
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
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
                  <ImageIcon className={classes.image} />
                </ListItemAvatar>
            </Grid>
            <Grid className={classes.itemDescrGrid}>
                <div className={classes.listItem} alignItems="flex-start">
                  <span className={classes.listItemText}>
                        <p className={classes.itemName}>{"Product Title"} </p>
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
            <Grid className={classes.escNdbuttonGrid}>
              <EscrowPayment  className={classes.escNdbuttonGrid}/>
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

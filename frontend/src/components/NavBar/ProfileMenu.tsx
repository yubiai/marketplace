import React, { useState } from "react";
import { ethers } from "ethers";
import {
  Menu,
  IconButton,
  Fade,
  MenuItem,
  ListItemIcon,
  Typography,
  Avatar,
} from "@mui/material";
import { AccountCircle } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useStyles } from "./ProfileMenuStyles";
import ubiImage from "../../media/ubi2.svg";
import profileImage from "../../media/harishan-kobalasingam.jpg";

export type Profile = {
  photo: string;
  displayName: string;
  ubiAmount: ethers.BigNumber;
  token: string;
};

type ProfileMenuProps = {
  id: string;
  profile?: Profile;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ id, profile }) => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const { t } = useTranslation("profileMenu");
  const classes = useStyles();

  const handleMenuClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnchorElement(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenuClick}>
        <AccountCircle
          className={classes.notificon}
          aria-label="account of current user"
          aria-controls="profile-menu"
          aria-haspopup="true"
          color="inherit"
        />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorElement}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!anchorElement}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
        style={{ top: "15px", zIndex: 1000 }}
      >
        <ListItemIcon>
          <Avatar
            src={profile?.photo || profileImage}
            className={classes.avatar}
          />
        </ListItemIcon>
        <Typography className={classes.nameMenu}>
          {profile?.displayName}
        </Typography>
        <Typography className={classes.ubiAmmount}>
          <img src={ubiImage} className={classes.ubiIcon}></img>
          {`1000 UBI-s dripped`}
        </Typography>
        <MenuItem
          style={{ fontSize: "13px", fontFamily: "Open Sans" }}
          className={classes.listItemText}
          component={Link}
          to="/orders"
          onClick={handleMenuClose}
        >
          {t("orders")}
        </MenuItem>
        <MenuItem
          style={{ fontSize: "13px" }}
          className={classes.listItemText}
          component={Link}
          to="/salesactive"
          onClick={handleMenuClose}
        >
          {t("sales")}
        </MenuItem>
        <MenuItem
          style={{ fontSize: "13px" }}
          className={classes.listItemText}
          component={Link}
          to="/mailbox"
          onClick={handleMenuClose}
        >
          {t("mailbox")}
        </MenuItem>
        <MenuItem
          style={{ fontSize: "13px" }}
          className={classes.listItemText}
          component={Link}
          to="/myinfo"
          onClick={handleMenuClose}
        >
          {t("my_info")}
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
        {profile?.token && (
          <MenuItem
            style={{ fontSize: "13px" }}
            className={classes.listItemText}
            // onClick={disconnect}
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
    </div>
  );
};

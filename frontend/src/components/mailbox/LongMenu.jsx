import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
const useStyles = makeStyles((theme) => ({
    moreIconDots:{
        display: "inherit",
        alignItems: "inherit",
        justifyContent: "inherit",
        marginLeft: "inherit",
        marginTop: "inherit",
        marginBottom: "inherit",
        color: "black",
        
    
  },

}));

export default function LongMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const options = ["Delete Chat", "Seller Information"];
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizSharpIcon className={classes.moreIconDots} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginLeft: "inherit",
            marginTop: "-20px",
            marginBottom: "-5px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

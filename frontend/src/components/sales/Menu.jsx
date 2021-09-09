import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizSharpIcon from "@material-ui/icons/MoreHorizSharp";
const useStyles = makeStyles((theme) => ({
    moreIconDots:{
        display: "inline-flex",
        alignItems: "inherit",
        justifyContent: "inherit",
        marginLeft: "inherit",
        marginTop: "inherit",
        marginBottom: "inherit",
        color: "black",
        outline: 'none !important',
        '&:hover, &:focus, &:active': {
        outline: 'none !important',
        },
        '&:hover': {
          outline: 'none !important',
        }
  },
    
  

}));

export default function ShortMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const options = ["Pause Sell", "Sell a similar item"];
  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{width:50, maxBlockSize: '50px', display: 'inline-block', paddingRight: '20px'}} >
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.moreIconDots}
      >
        <MoreHorizSharpIcon  className={classes.moreIconDots} />
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

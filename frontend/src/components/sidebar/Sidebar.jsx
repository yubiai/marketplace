import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Link }  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minWidth: 218,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  HeaderList: {
    paddingLeft: theme.spacing(4),
  },
  listItemText: {
    color: '#000000',
    textDecorationColor: 'transparent',
    '&:hover': {
            borderBottom: 'none',
            color: '#008968', 
          }

  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        
        <ListSubheader component="div" id="nested-list-subheader">
           <ListItemIcon>
          <MenuOutlinedIcon/>
          <ListItemText  className={classes.HeaderList} primary="My account" />
          </ListItemIcon>
          
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button component={Link} to="/orders">
        <ListItemIcon>
          <CardGiftcardOutlinedIcon />
        </ListItemIcon>
        <ListItemText className={classes.listItemText} primary="Orders" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StorefrontOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="/salesactive">
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Active"  />
          </ListItem >
          <ListItem button className={classes.nested} component={Link} to="/salescomplete">
            <ListItemIcon></ListItemIcon>
            <ListItemText className={classes.listItemText} primary="Complete"  />
          </ListItem>
        
      
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <DraftsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Mailbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="My info" />
      </ListItem>
    </List>
  );
}
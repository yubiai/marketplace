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
    height: '100%',
    maxWidth: 360,
    minWidth: 218,
    backgroundColor: '#F5F5F5',
  },
  nested: {
    paddingLeft: theme.spacing(2),
    marginTop: '0.5rem',
    height: '22px',
  },
  HeaderList: {
    // paddingLeft: theme.spacing(2),
    marginLeft: '0.5rem',
    font: 'Open Sans',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#393939',
  },
  listItemText: {
    color: '#6A6A6A',
    marginLeft: '0.5rem',
    fontFamily: 'Open Sans',
    marginTop: '-1.2rem',
    marginBottom: '-1rem',
    fontWeight: '200',
    fontSize: '16px',
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
          <MenuOutlinedIcon style={{color:"#393939", marginLeft:"2rem", marginTop:"1rem"}}/>
          <ListItemText disableTypography className={classes.HeaderList} primary="My account" />
          </ListItemIcon>
          
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button component={Link} to="/orders">
        <ListItemIcon>
          <CardGiftcardOutlinedIcon style={{color:"#6A6A6A", marginLeft:"2rem", marginTop:"-0.3rem", width:"20px", height:"19px"}} />
        </ListItemIcon>
        <ListItemText disableTypography className={classes.listItemText} primary="Orders" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StorefrontOutlinedIcon style={{color:"#6A6A6A", marginLeft:"2rem", marginTop:"-0.3rem", width:"20px", height:"19px"}} />
        </ListItemIcon>
        <ListItemText disableTypography style={{marginLeft:"0.5rem", marginBottom: '-0.5rem', marginTop:'-0.7rem',color: '#6A6A6A', fontSize:"16px", fontWeight:"200"}} primary="Sales" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="/salesactive">
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText disableTypography className={classes.listItemText} primary="Active"  />
          </ListItem >
          <ListItem button className={classes.nested} component={Link} to="/salescomplete">
            <ListItemIcon></ListItemIcon>
            <ListItemText disableTypography className={classes.listItemText} primary="Complete"  />
          </ListItem>
        
      
        </List>
      </Collapse>
      <ListItem button component={Link} to="/mailbox">
        <ListItemIcon>
          <DraftsOutlinedIcon style={{color:"#6A6A6A", marginLeft:"2rem", marginTop:"-0.3rem", width:"20px", height:"19px"}} />
        </ListItemIcon>
        <ListItemText disableTypography className={classes.listItemText} primary="Mailbox" />
      </ListItem>
      <ListItem button component={Link} to="/myinfo">
        <ListItemIcon>
          <PersonOutlineOutlinedIcon style={{color:"#6A6A6A", marginLeft:"2rem", marginTop:"-0.3rem", width:"20px", height:"19px"}} />
        </ListItemIcon>
        <ListItemText disableTypography className={classes.listItemText} primary="My info" />
      </ListItem>
    </List>
  );
}
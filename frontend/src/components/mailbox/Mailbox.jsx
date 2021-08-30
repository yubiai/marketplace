import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link }  from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import LongMenu from './LongMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  inline: {
    
    display: 'flex',
  },
  
  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',

  },
  listItemText:{
       
    marginLeft: '20px',
  },
  btnChat: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '140px',
    maxWidth: '140px',  
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent', 
    }  
  }, 
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginLeft: '0.1rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '&:hover': {
        borderBottom: 'none',
        color: '#008968', 
      }
},
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '10px',

  },
  itemStatusIconAvailable: {
    color: '#1ED9A1',
    height: '12px',
  },
  itemStatusIconPaused: {
    color: '#FCB877',
    height: '12px',
  },
  itemStatusIconSold: {
    color: '#D9461E',
    height: '12px',
  },

}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const mailboxImage = require("../../media/canoneos.jpg");
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
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link} to="/mailbox"  onClick={handleClick}>
        Mailbox
        </Link>
        <span style={{color:'black', borderBottom: 'none'}}>
          username
        </span>
         {/* backendconnect user aca   */}
      </Breadcrumbs>
          
    
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Canon EOS Rebel T7 EF-S 18-55mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               10.000 UBI
              </Typography>
              
              {" Available"}
              <FiberManualRecordSharpIcon className={classes.itemStatusIconAvailable}/>
              <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                Chat
                
                </Button>
                <MoreHorizSharpIcon style={{display:'inline-flex'}}  component={LongMenu} open={open}
                    onClose={handleClose} />
                </ListItem>       
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px'}}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Canon EOS Rebel T7 EF-S 18-55mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               10.000 UBI
              </Typography>
              {" Paused"}
              <FiberManualRecordSharpIcon className={classes.itemStatusIconPaused}/>
              <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                Chat
                
                </Button>
                <MoreHorizSharpIcon style={{display:'inline-flex'}}  component={LongMenu} open={open}
                    onClose={handleClose} />
                </ListItem>    
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px'}}>
      <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Canon EOS Rebel T7 EF-S 18-55mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               10.000 UBI
              </Typography>
              {" Sold"}
              <FiberManualRecordSharpIcon className={classes.itemStatusIconSold}/>
              <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                Chat
                
                </Button>
                <MoreHorizSharpIcon style={{display:'inline-flex'}}  component={LongMenu} open={open}
                    onClose={handleClose} />
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
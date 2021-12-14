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
    fontFamily: 'Open Sans',
    display: 'flex',
  },

  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
  },
  listItemText:{
    fontFamily: 'Open Sans',
    marginLeft: '20px',
    position: 'relative'
  },
  btnChat: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    fontWeight: '500',
    textTransform: 'none',
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#00ABD1',
    color: '#fff',
    minWidth: '140px',
    maxWidth: '140px',
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none !important'
    },
  },
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginTop: '-0.75rem',
    marginLeft: '0.4rem',
    marginRight: '-0.75rem',
    justifyContent: 'space-evenly',
    padding: theme.spacing(1),
    alignItems: 'center',
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      textDecorationColor: 'transparent',
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
  buttonThreeDots: {
    outline: 'none',
    display:'inline-flex',
    '&:hover, &:focus, &:active': {
    outline: 'none !important',
    },
    '&:hover': {
      backgroundColor: 'white',
    }
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
        <Link className={classes.link}  to="/mailbox"  onClick={handleClick}>
          Mailbox
        </Link>
      </Breadcrumbs>
      <Grid container spacing={1}
            variant="fullWidth"
            direction="column"
            justifyContent="space-around"
            alignItems="left" style={{marginTop: '4px'}}>
        <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px', marginLeft: '0.75rem' }}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
            </ListItemAvatar>
            <ListItemText
                disableTypography
                className={classes.listItemText}
                primary={<b style={{fontSize:'16px'}}>Canon EOS Rebel T7 EF-S 18-55mm</b>}
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
                <l style={{fontWeight:'200'}}>{" Available"}</l>
                <FiberManualRecordSharpIcon className={classes.itemStatusIconAvailable}/>
                <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                  <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                    Chat
                  </Button>
                  <MoreHorizSharpIcon className={classes.buttonThreeDots}
                                      component={LongMenu}
                                      open={open}
                                      onClose={handleClose} />
                  </ListItem>
              </React.Fragment>
            }
          />
        </ListItem>
      </Grid>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', marginLeft: '0.75rem'}}>
        <ListItem alignItems="flex-start" className={classes.listItem}>
          <ListItemAvatar>
            <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            className={classes.listItemText}
            primary={<b style={{fontSize:'16px'}}>Canon EOS Rebel T7 EF-S 18-55mm</b>}
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
              <l style={{fontWeight:'200'}}>{" Paused"}</l>
              <FiberManualRecordSharpIcon className={classes.itemStatusIconPaused}/>
              <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                  Chat
                </Button>
                <MoreHorizSharpIcon style={{display:'inline-flex'}}
                                    component={LongMenu}
                                    open={open}
                                    onClose={handleClose} />
                </ListItem>
            </React.Fragment>
          }
        />
        </ListItem>
      </Grid>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginLeft: '0.75rem'}}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <img alt="{imgjson}" className={classes.image} src={mailboxImage.default} />
            </ListItemAvatar>
            <ListItemText
              disableTypography
              className={classes.listItemText}
              primary={<b style={{fontSize:'16px'}}>Canon EOS Rebel T7 EF-S 18-55mm</b>}
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
                  <l style={{fontWeight:'200'}}>{" Sold"}</l>
                  <FiberManualRecordSharpIcon className={classes.itemStatusIconSold}/>
                  <ListItem style={{display:'inline-flex', top: '-3rem', left:'-1rem'}}>
                    <Button style={{display:'inline-flex'}} className={classes.btnChat} variant="contained" component={Link} to="/chat" primary="Chat" >
                      Chat
                    </Button>
                    <MoreHorizSharpIcon style={{display:'inline-flex'}}
                                        component={LongMenu}
                                        open={open}
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

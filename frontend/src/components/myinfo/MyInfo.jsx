import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import Divider from '@material-ui/core/Divider';
import EditName from './EditName';
import IdNumber from './IdNumber';
import ShippAddress from './ShippAddress';
import CellphoneNumber from './CellPhoneNumber';
import TelegramHandl from './TelegramHandl';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

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
  btnMyProfile: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    justifyContent: 'space-around',
    marginLeft: 'auto',
    borderRadius: '10px',
    height: '30px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '150px',
    maxWidth: '150px',
    top: '-2rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent',
      textDecoration: 'none', 
    }  
  },
  
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    marginTop: '-10px',

  },
  imageUbi: {
    width: '17px',
    height: '17px',
 },
  infoClass: {
    '&:hover': {
        borderBottom: 'none',
        color: '#008968',
        backgroundColor: 'transparent',
        textDecoration: 'none',
    }
  },
  listItemTextIcon:{
    height:'15px',
    color: '#FCB877',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const ubiImage = require("../../media/logoubi.png")
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
    
    <Typography variant="h2"><h3 style={{ fontWeight: "bold", fontSize: "20px" }}>My Info</h3></Typography>
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'10px', marginBottom:'8px', height:'117px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={profileImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          primary="Vitalik Buterin"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               'address poh'
              </Typography>
              <FileCopyOutlinedIcon className={classes.listItemTextIcon}  /><CallMadeOutlinedIcon className={classes.listItemTextIcon} />
              <ListItemAvatar>
                <img alt="{ubilog}" className={classes.imageUbi} src={ubiImage.default} />
            
             </ListItemAvatar>
              {" UBI-s dripped"}
              
                <a className={classes.btnMyProfile} style={{marginTop:'-75px'}}
                 variant="contained"  target="_blank" href="https://app.proofofhumanity.id/profile/0x1db3439a222c519ab44bb1144fc28167b4fa6ee6/" secondary="MyProfile" >
                My PoH Profile
                </a>
               
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid container spacing={0}
    direction="row"  
  justifyContent="left"
  alignItems="left" style={{marginTop: '10px', marginLeft: '2px'}}>  
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'10px', height: '300px'}} >
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemText
            primary="Personal and shipping information"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                
                </Typography>
                <Tooltip className={classes.infoClass} title="This info will only be shared when you make a purchase of an item that needs to be shipped.">
                    <IconButton aria-label="info">
                    <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Full name"   />
                </ListItem> <EditIcon component={EditName} open={open}
                    onClose={handleClose} />
                <Divider style={{backgroundColor: 'black'}}/>
                <ListItem  style={{height: '18px'}} >
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="ID Number" />
                </ListItem><EditIcon component={IdNumber} open={open}
                    onClose={handleClose} />
                <Divider style={{backgroundColor: 'black', height:'0.5px'}} />
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Shipping address" />
                </ListItem><EditIcon component={ShippAddress} open={open}
                    onClose={handleClose}/>
                <Divider  style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Cellphone number" />
                </ListItem><EditIcon component={CellphoneNumber} open={open}
                    onClose={handleClose}/>
                <Divider style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{primary:classes.listItemTextTotal}} primary="Telegram handle" />
                </ListItem><EditIcon component={TelegramHandl} open={open}
                    onClose={handleClose} />
                
              </React.Fragment>
            }
          />
        </ListItem>
      </Grid>
    </Grid>
    </Grid>  
    </List>
  );
}
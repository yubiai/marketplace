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
    fontFamily: 'Open Sans',
    display: 'flex',
  },
  
  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
  },
  btnMyProfile: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem',
    justifyContent: 'space-around',
    marginLeft: 'auto',
    borderRadius: '10px',
    height: '30px',
    backgroundColor: '#00ABD1',
    color: '#fff',
    minWidth: '150px',
    maxWidth: '150px',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)', 
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
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
    marginLeft: '1.4rem',
    marginRight:'-1rem',
    paddingBottom: '3px',
 },
  infoClass: {
    outline: 'none !important',
    '&:hover': {
        outline: 'none !important',
        borderBottom: 'none',
        color: '#00ABD1',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        fontFamily: 'Open Sans',
    }
  },
  listItemTextIcon:{
    height:'14px',
    width: '11px',
    color: 'white',
    backgroundColor: '#00ABD1',
    borderRadius: '2px',
    marginRight: '9px',
    marginLeft: '4px',
    boxShadow: '0px 3px 6px #00000029',
  },
  profName: {
    marginLeft: '20px',
    fontSize: '18px',
    fontWeight: 'bold',

  },
  listItemText:{
    marginLeft: '20px',
    fontSize: '18px',
    marginTop: '2rem',
    fontFamily: 'Open Sans',
    color:'black',
  },  
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const ubiImage = require("../../media/ubi2.svg");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
    
    <Typography variant="h2"><h4 style={{ fontWeight: "light", fontSize: "12px", color: "gray", marginLeft:'0.75rem'  }}>My Info</h4></Typography>
    <Typography variant="h2"><h4 style={{ fontWeight: "bold", fontSize: "20px", marginLeft:'0.75rem' }}>Proof of humanity information</h4></Typography>
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'10px', marginBottom:'8px', height:'117px', marginLeft:'0.75rem' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={profileImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          
          
          primary={<div className={classes.profName}>Vitalik Buterin</div>}
          secondary={
            <React.Fragment>
              <div style={{display:"inline-flex", marginLeft: '20px'}}>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               'address poh'
               {/* agregar call de poh al address */}
              </Typography>
              {"|"}
              <FileCopyOutlinedIcon className={classes.listItemTextIcon}  /><CallMadeOutlinedIcon  className={classes.listItemTextIcon} />
              </div>
              
              <ListItemAvatar>
               <img alt="{ubilog}" className={classes.imageUbi} src={ubiImage.default} /> 
               <div style={{display:"inline-flex", marginLeft: '20px'}}>{" UBI-s dripped"} </div>
                
              {/* apuntar backend side ubi dripped */}
             </ListItemAvatar>
              
              
                <a  className={classes.btnMyProfile} style={{marginTop: '-3rem'}}
                 variant="contained"  target="_blank" href="https://app.proofofhumanity.id/profile/0x1db3439a222c519ab44bb1144fc28167b4fa6ee6/" secondary="MyProfile" >
                My PoH Profile
                </a>
               
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      <div style={{display:"inline-flex"}}>
      <Typography variant="h2"><h4 style={{ fontWeight: "bold", fontSize: "20px", marginTop:"10px", marginLeft:'0.75rem' }}>Personal and shipping information</h4></Typography>
      <Tooltip disableTypography className={classes.infoClass} title="This info will only be shared when you make a purchase of an item that needs to be shipped.">
                    <IconButton aria-label="info">
                    <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
      </div>          
      <Grid container spacing={0}
    direction="row"  
  justifyContent="left"
  alignItems="left" style={{marginTop: '10px', marginLeft: '2px'}}>  
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'10px', height: '300px', marginLeft:'0.75rem'}} >
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                
                </Typography>
                
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Full name"   />
                </ListItem> <EditIcon  component={EditName} open={open}
                    onClose={handleClose} />
                <Divider style={{backgroundColor: 'black', height: '0.5px'}}/>
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
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Telegram handle" />
                </ListItem><EditIcon component={TelegramHandl} open={open}
                    onClose={handleClose} />
                <Divider style={{backgroundColor: 'black', height:'0.5px'}}/>    
                
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
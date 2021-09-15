import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    
  },
  inline: {
    fontSize: '11px',
    display: 'flex',
    fontFamily: 'Open Sans',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  listItem: {
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight:'bold',
    fontFamily: 'Open Sans',
  },
  btnSendMsg: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'none',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginLeft: '-20px',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '150px',
    '&:hover': {
      borderBottom: 'none',
      color: '#008968', 
      textDecoloration: 'transparent',
    }  
  },
  
  
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginTop: '0.25rem',
    marginLeft: '1.6rem',
    marginRight: '-0.75rem',
    justifyContent: 'space-evenly',
    padding: theme.spacing(1),
    alignItems: 'center',
    '&:hover': {
        borderBottom: 'none',
        color: '#008968',
        textDecorationColor: 'transparent',  
      }
},
imageProfile: {
  display: 'flex',
  alignItems: 'left',
  left: '10px',
  justifyContent: 'left',
  marginLeft: '1px',
  marginBottom: '-10px',
  width: '104px',
  height: '104px',
  

},
  imageOrder: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    maxWidth: '70px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginTop: '-65px',
  },
  listItemText:{
    fontSize:'11px',//Insert your required size
    color: 'black',
    lineHeight: '17px',
    marginLeft: '-13px',
    fontFamily: 'Open Sans',
  },
  listItemTextTotal:{
    fontSize:'11px',//Insert your required size
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '-13px',

  },
  listItemTextIcon:{
    height:'14px',
    width: '11px',
    color: 'white',
    backgroundColor: '#FCB877',
    borderRadius: '2px',
    marginRight: '9px',
    boxShadow: '0px 3px 6px #00000029',
    
  },
  profileName: {
    fontSize: '16px',
    height: '22px',
    marginTop: '-60px',
    fontWeight: '700',
    marginLeft: '20px',

  },
  profileReputation: {
    fontSize: '14px',
    height: '19px',
    
  },
  txtReputation: {
    color: 'black',
    fontWeight: 'light',
    fontSize: '12px',
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: '-25px',
    
  },
  starsReput: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '-50px',
    marginLeft: '85px',
    color: '#FCB877',
    
  },
  starsReput2: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '-50px',
    marginLeft: '5px',
    color: '#FCB877',
    
  },
  starsReput3: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '-50px',
    marginLeft: '5px',
    color: '#FCB877',
    
  },
  starsReput4: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '-50px',
    marginLeft: '5px',
    color: '#FCB877',
    
  },
  starsReput5: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    marginTop: '-50px',
    marginLeft: '5px',
    color: '#FCB877',
    
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const shoeImage = require("../../media/canoneos.jpg");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
      
      <Breadcrumbs style={{marginTop:'-0.25rem'}} separator="›" aria-label="breadcrumb">
        <Link className={classes.link} to="/sales" style={{color: '#808080'}} onClick={handleClick}>
          Sales
        </Link>
        <Link className={classes.link} to="/salescomplete" style={{color: '#808080', marginLeft: '-0.5rem'}} onClick={handleClick}>
          Complete
        </Link>
        <Link className={classes.link} style={{marginLeft: '-0.2rem'}} >
          Details
        </Link>
      </Breadcrumbs>
    
    <Grid container spacing={1}
    variant="fullWidth"
    direction="row"
    justifyContent="space-between"
    alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={10} md={10} style={{backgroundColor: 'white', borderRadius:'10px', marginBottom:'4px', marginLeft: '2rem', height:'67px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
        disableTypography
        //en primary va nombre del order item}
          primary="Canon EOS Rebel T7 EF-S 18-55mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
                style={{fontSize:"13px"}}
              >
               {" 1 item"}
              </Typography>
              
              <ListItemAvatar>
                  <img alt="{imgjson}" className={classes.imageOrder}  src={shoeImage.default} />
              </ListItemAvatar>
                
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
    </Grid>  
      
    <Grid container spacing={0}
    direction="row"  
   justifyContent="left"
  alignItems="center" style={{marginTop: '10px'}}>  
      <Grid item xs={10} md={5} style={{backgroundColor: 'white', borderRadius:'10px', height: '190px', marginLeft: '1.8rem'}} >
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment >
                <ListItemText disableTypography style={{fontSize: '14px', fontWeight:'bold', display: 'inline-flex'}} primary="Transaction Details"/>
                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{display: 'inline-flex'}}>
                <span style={{marginLeft: '160px', fontSize: '13px', fontWeight: 'light'}}>from</span>
                <span style={{fontSize: '13px'}}> to (address)</span>
                </Breadcrumbs>
              </React.Fragment>}
            
            secondary={
              <React.Fragment>
                <div style={{fontSize:"11px", fontWeight:"100"}}>
                {/* change date to backend transaction json o como este conectado a la bd */}
                {" Date  |"} <FileCopyOutlinedIcon className={classes.listItemTextIcon} /><CallMadeOutlinedIcon className={classes.listItemTextIcon} />
                </div>
                <ListItem style={{height: '18px', marginTop: '15px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Amount"   />
                  <ListItemText classes={{secondary:classes.listItemText}} style={{justifyContent:'flex-end', marginLeft:'330px'}} secondary="0.039 ETH"/>
                </ListItem>
                <Divider style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Transaction Fee"   />
                  <ListItemText classes={{secondary:classes.listItemText}} style={{justifyContent:'flex-end', marginLeft:'290px'}} secondary="0.016 ETH"/>
                </ListItem>
                <Divider style={{backgroundColor: 'black', height:'0.5px'}} />
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Gas price"   />
                  <ListItemText classes={{secondary:classes.listItemText}} style={{justifyContent:'flex-end', marginLeft:'340px'}} secondary="26 GWEI"/>
                </ListItem>
                <Divider  style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Nonce"   />
                  <ListItemText classes={{secondary:classes.listItemText}} style={{justifyContent:'flex-end', marginLeft:'350px'}} secondary="16"/>
                </ListItem>
                <Divider style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{primary:classes.listItemTextTotal}} primary="Total" />
                  <ListItemText classes={{secondary:classes.listItemText}} style={{justifyContent:'flex-end', marginLeft:'320px'}} secondary="0.040649 ETH"/>
                </ListItem>
                
              </React.Fragment>
            }
          />
        </ListItem>
      </Grid>
      <Grid item xs={5} md={5} style={{backgroundColor: 'white', borderRadius:'10px', marginLeft: '7px', height: '190px', justifyContent:'space-around', width:'30vw'}}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemText disableTypography style={{marginTop:'0.65rem'}} primary="Buyer Information"/>
             
          </ListItem>
          <ListItem  style={{justifyContent: 'space-around', height: '100px'}}>
            <Grid xs={3} style={{height: '100%', flexBasis: 'auto'}}>
              <ListItemAvatar style={{ margin: 0, width: '100%', height: '100%' }}>
                <img alt="{imgjson}"
                     className={classes.imageProfile}
                     style={{
                      marginTop: 0,
                      width: 'auto',
                      height: '100%',
                      display: 'block'
                    }}
                     src={profileImage.default} />
              </ListItemAvatar>
            </Grid>
            <Grid xs={9} style={{
              height: '100%',
              margin: '0 0.5rem',
              justifyContent: 'center'
            }}>
              <ListItemText 
            primary={
              <React.Fragment >
                <Breadcrumbs separator="›" aria-label="breadcrumb" style={{display: 'inline-flex'}}>
                <ListItemText disableTypography style={{fontSize: '14px', fontWeight:'bold', display: 'inline-flex', color:'black'}} primary="Vitalik Buterin"/> <span style={{marginLeft: '1px',  fontSize: '13px', fontWeight: 'light' , display: 'inline-flex'}}>address</span>
                </Breadcrumbs>
              </React.Fragment>}/>
            <ListItem style={{display: 'inline-block',  marginLeft: '-15px'}}>                
              <ListItemText
                    disableTypography 
                    className={classes.profileReputation}
                            style={{
                              margin: '0 !important',
                              marginTop: '-7px',

                            }}
                            primary="Reputation" /> <StarBorderOutlinedIcon className={classes.starsReput}/><StarBorderOutlinedIcon className={classes.starsReput2}/><StarBorderOutlinedIcon className={classes.starsReput3}/><StarBorderOutlinedIcon className={classes.starsReput4}/><StarBorderOutlinedIcon className={classes.starsReput5}/>
            </ListItem>                
              
              <Button   className={classes.btnSendMsg} variant="contained" component={Link} to="/salescompletedetails/messagesbox" primary="MessagesBox"
                      style={{
                        minWidth: 0,
                        width: '150px',
                        margin: '0.5rem 0',
                        marginTop: '-20px',
                        }}>
                Send message
              </Button>
            </Grid>                   
          </ListItem>
       </Grid>
    </Grid>  
      
      
      
    
    </List>
  );
}
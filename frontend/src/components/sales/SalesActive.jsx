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
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import Menu from './Menu';

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
    marginTop:'-0.5rem',
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
  },  
  btnPreview: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    textTransform: 'none',
    right: '2rem',
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#00ABD1',
    color: '#fff',
    minWidth: '140px',
    maxWidth: '140px',
    top: '-4.75rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      backgroundColor: 'transparent', 
    }  
  },
  btnEdit: {
    display: 'flex',
    fontWeight: '500',
    textTransform: 'none',
    right: '2rem',
    top: '-4.5rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 'auto',
    borderRadius: '10px',
    minWidth: '140px',
    maxWidth: '140px',
    backgroundColor: '#d4ecf1',
    color: '#00ABD1',
    '&:hover': {
      borderBottom: 'none',
      color: '#00ABD1',
      backgroundColor: 'transparent', 
   }, 
  },
  addItem:{
    display: 'inline-flex',
    color: '#FFFF',
    float: 'right',
    justifyContent:"flex-end",
    alignItems:"flex-start",
    marginTop: '-2.2rem',
    marginRight: '2rem',
    backgroundColor: '#00ABD1',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '25px',
    opacity: '1',
  },
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginTop: '-0.03rem',
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
  buttonThreeDots: {
    outline: 'none',
    display:'flex',
    maxBlockSize: '50px',
    width:50, 
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
  const activeImage = require("../../media/canoneos.jpg");
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
      <Breadcrumbs style={{marginTop:'-0.75rem'}}  separator="›" aria-label="breadcrumb" >
        <Link className={classes.link} style={{color: '#808080'}} onClick={handleClick}>
          Sales
        </Link>
        <Link
            className={classes.link}
            to="/salesactive"
            onClick={handleClick}
            aria-current="page"
            style={{marginLeft: '-0.2rem'}}
        >
        Active
        
        </Link>
        
      
      </Breadcrumbs>

      <Link to={"/additem"}>
        <AddCircleOutlinedIcon className={classes.addItem} component={'svg'} primary="AddItem" />
      </Link>
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px', marginLeft: '0.75rem'}}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={activeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          disableTypography
          className={classes.listItemText}
          primary={<span style={{fontSize:'16px', fontWeight: 'bold'}}>Canon EOS Rebel T7 EF-S 18-55mm<MoreHorizSharpIcon className={classes.buttonThreeDots}   component={Menu} open={open}
          onClose={handleClose} /></span>}
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
              {" 1 item"}
              
                <Button className={classes.btnPreview} variant="contained" component={Link} to="/preview" primary="Preview" >
                View
                </Button>
                <Button className={classes.btnEdit} variant="contained" component={Link} to="/edititem" primary="EditItem" >
                Edit Item
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', marginLeft: '0.75rem'}}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={activeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          disableTypography
          className={classes.listItemText}
          primary={<span style={{fontSize:'16px', fontWeight: 'bold'}}>Canon EOS Rebel T7 EF-S 18-55mm<MoreHorizSharpIcon className={classes.buttonThreeDots}   component={Menu} open={open}
          onClose={handleClose} /></span>}
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
              {" 1 item"}
              
                <Button className={classes.btnPreview} variant="contained" component={Link} to="/preview" primary="Preview" >
                View
                </Button>
                <Button className={classes.btnEdit} variant="contained" component={Link} to="/edititem" primary="EditItem" >
                Edit Item
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginLeft: '0.75rem'}}>
      <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={activeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          disableTypography
          className={classes.listItemText}
          primary={<span style={{fontSize:'16px', fontWeight: 'bold'}}>Canon EOS Rebel T7 EF-S 18-55mm<MoreHorizSharpIcon className={classes.buttonThreeDots}   component={Menu} open={open}
          onClose={handleClose} /></span>}
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
              {" 1 item"}
              
                <Button className={classes.btnPreview} variant="contained" component={Link} to="/preview" primary="Preview" >
                View
                </Button>
                <Button className={classes.btnEdit} variant="contained" component={Link} to="/edititem" primary="EditItem" >
                Edit Item
                </Button>
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
    </Grid>  
    </List>
  );
}
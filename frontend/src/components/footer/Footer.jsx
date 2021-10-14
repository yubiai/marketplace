import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { InputBase } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '17vh',
    flexGrow: 1,
    fontSize: '14px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 10000
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: 'auto',
   // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],  
   background: 'linear-gradient(90deg, rgb(0, 171, 209) 0%, #1C538A 100%) !important',
   fontSize: '14px',
  }, 
  logo: {
    width: '90px',
   
},
paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
socialMedia: {
  padding: 0,
  margin: 3,
},
link: { 
  fontSize: '13px',
  color: '#fff',
  flexDirection: 'row',
  textDecorationColor: 'transparent',
  padding: 5,
 
  '&:hover': {
      borderBottom: 'none',
      color: '#a9a9a9', 
      textDecorationColor: 'transparent',
    }
 
},
submit: {
  textTransform: 'none',
  color: '#727272',
  marginLeft: '10px',
  '&:hover': {
    borderBottom: 'none',
    color: '#a9a9a9', 
    textDecorationColor: 'transparent', 
  }

},
input:  {
  marginTop: '13.5px',
  fontSize: '12px',
  color: '#000',
  width: '100%',
  borderBottom: 'none',
  height: '35px',
  background: '#ffffff',
  borderRadius : 8,
  paddingLeft: '1rem'
},
formContainer: {
  color: '#FCB877',
  position: 'relative',
},
button: {
  borderLeft: '1px solid #727272',
  borderRadius: '0px',
  marginTop: '3.5px',
  height: '20px',
  marginRight: '5px',
  display: 'flex',
  color:'#727272',
  backgroundColor: 'white',
  padding: '0 8px 0 8.5px',
  position: 'absolute',
  right: -5,
  top: '17px',
  width: '35px',
  minWidth: '0',
  outline: 'none',
  '&:hover, &:focus, &:active': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: 'white',
  }
},
sendIcon: {
  width: 14,
  height: 14
}

}));

export default function StickyFooter() {
  const classes = useStyles();
  const logoImage = require("../../images/logo2.png");
  const [name, setName] = useState("");

  const preventDefault = (event) => {
    console.log(name);
  };
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} md={2}>
              <div className={classes.paper}>
                <img className={classes.logo} src={logoImage.default} alt="Logo YUBIAI" />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <div className={classes.formContainer}>
                <form className={classes.form} noValidate autoComplete="off">
                  {/* <TextField className={classes.paper} id="name-input" name="name" label="Name" variant="outlined" type="text" placeholder='Want to talk? Share us your ETHMail' /> */}
                  <InputBase disableTypography
                             className={classes.input}
                             placeholder="Contact me, Share us your ETHMail"
                             inputProps={{ 'aria-label': 'contact' }}>
                  </InputBase>
                  <Button className={classes.button}>
                    <SendIcon className={classes.sendIcon} type="submit"></SendIcon>
                  </Button>                
                </form>
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <div className={classes.paper}>
                <Typography>
                  <Link className={classes.link} href="https://gov.proofofhumanity.id/"  onClick={preventDefault} target="_blank" >Governance Forum </Link>
                  <Link className={classes.link} href="https://snapshot.org/#/" onClick={preventDefault} target="_blank" >Snapshot  </Link>
                  <Link className={classes.link} href="https://democracy.earth/#/" onClick={preventDefault} target="_blank" >UBI Vaults </Link>
                  <Link className={classes.link} href="https://court.kleros.io/" onClick={preventDefault} target="_blank" >Kleros</Link>
                </Typography>
              </div>
            </Grid> 
            <Grid item xs={12} sm={4} md={2}>
              <div className={classes.paper}>
                <Link className={classes.link} href="https://www.youtube.com/channel/UCXHJbgCm5M-Zbg8PuJCioMA/" target="_blank"> <YouTubeIcon className={classes.socialMedia}  /></Link>
                <Link className={classes.link} href="https://twitter.com/proofofhumanity" target="_blank"> <TwitterIcon className={classes.socialMedia}  /></Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}
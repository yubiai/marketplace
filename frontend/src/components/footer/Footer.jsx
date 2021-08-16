import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '53vh',
    flexGrow: 1,
    fontSize: '14px',
  },
  main: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: 'auto',
   // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],  
   background: 'linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%)',
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
  fontSize: '14px',
  color: 'black',
  flexDirection: 'row',
  textDecorationColor: 'transparent',
  padding: 5,
 
  '&:hover': {
      borderBottom: 'none',
      color: '#008968', 
    }
 
},
submit: {
  padding: 4,
  
  fontSize: '14px',
  color: '#FCB877',
  background: 'white',
  marginLeft: '20',
  borderRadius : 20,
  width: '112px',
  '&:hover': {
    borderBottom: 'none',
    color: 'white',
    background: '#FCB877', 
  }

},
input: {
  padding: '5px',
  marginTop: '15px',
  fontSize: '12px',
  color: '#000',
  width: '205px',
  height: '30px',
  background: '#ffffff',
  borderRadius : 10,
},
form: {
  display: 'flex',
  marginTop: '30px',
 
  color: '#FCB877',
  width: '230px',
  height: '20px',
  background: '#fff',
},


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
        <Grid item xs={2}>
          <div className={classes.paper}><img className={classes.logo} src={logoImage.default} alt="Logo YUBIAI" ></img></div>
        </Grid>
        <Grid item xs={3}>
        <div classes={classes.form} >
          <form    noValidate autoComplete="off">
            {/* <TextField className={classes.paper} id="name-input" name="name" label="Name" variant="outlined" type="text" placeholder='Want to talk? Share us your ETHMail' /> */}

            <InputBase  placeholder="Want to talk? Share us your ETHMail"
                                className={classes.input}
                                inputProps={{ 'aria-label': 'contact' }}
                            />
            <IconButton  color="inherit">
              <SendIcon></SendIcon>
           </IconButton>
          
          </form>
          {/* <Button className={classes.submit} variant="contained" color="primary" type="submit">Contact Us</Button> */}
         

        
        </div>
        </Grid>
        <Grid item xs={5}>
        <div className={classes.paper}>
        <Typography>
        <Link className={classes.link} href="https://gov.proofofhumanity.id/" onClick={preventDefault} >Governance Forum </Link>
        <Link className={classes.link} href="#" onClick={preventDefault} >Snapshot  </Link>
        <Link className={classes.link} href="#" onClick={preventDefault} >UBI Vaults </Link>
        <Link className={classes.link} href="https://court.kleros.io/" onClick={preventDefault} >Kleros</Link>
        </Typography>

        </div>
        </Grid> 
        <Grid item xs={2}>
        <div className={classes.paper}>
        <Link className={classes.link} href="https://youtube.com"> <YouTubeIcon className={classes.socialMedia}  /></Link>
        <Link className={classes.link} href="https://twitter.com"> <TwitterIcon className={classes.socialMedia}  /></Link>
        </div>
        </Grid>
      </Grid>
        
        </Container>
      </footer>
    </div>
  );
}
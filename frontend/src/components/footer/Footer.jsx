import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';




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
    width: '120px',
   
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
  padding: 0,
  margin: 3,
  fontSize: '14px',
  color: '#FCB877',
  background: 'white',

},
contact: {
  padding: 0,
  margin: 3,
  fontSize: '14px',
  color: '#FCB877',
  background: 'white',

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
        <div className={classes.paper}>
          <form className={classes.contact} noValidate autoComplete="off">
            <TextField id="name-input" name="name" label="Name" variant="outlined" type="text" />
            
          <Button className={classes.submit} variant="contained" color="primary" type="submit">Contact Us</Button>
          </form>
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
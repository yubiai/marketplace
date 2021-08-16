import React, { useState }  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Grid';
import Button from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '64vh',
    flexGrow: 1,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
   // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],  
   background: 'linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%)',
  }, 
  logo: {
    width: '120px',
   
},
paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
link: {
 
  fontSize: '14px',
  color: '#fff',
  flexDirection: 'row',
  textDecorationColor: 'transparent',
  padding: 5,
  '&:hover': {
      borderBottom: 'none',
      color: '#008968', 
    }
 
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
      
        <Container maxWidth="xl">
        <Grid container spacing={0}>
        <Grid item xs={3}>
          <div className={classes.paper}><img className={classes.logo} src={logoImage.default}></img></div>
        </Grid>
        <Grid item xs={3}>
        <div className={classes.paper}>
          <form className={classes.contact} noValidate autoComplete="off">
            <TextField id="name-input" name="name" label="Name" variant="outlined" type="text" />
          </form>   
          <Button variant="contained" color="primary" type="submit">Contact Us</Button>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className={classes.paper}>
        <Typography>
        <Link className={classes.link} href="#" onClick={preventDefault} to="/sell" >Governance Forum </Link>
        <Link className={classes.link} href="#" onClick={preventDefault} to="/browsinghistory" >Snapshot  </Link>
        <Link className={classes.link} href="#" onClick={preventDefault} to="/watchlist" >UBI Vaults </Link>
        <Link className={classes.link} href="#" onClick={preventDefault} to="/helpdesk" >Kleros</Link>
        </Typography>

        </div>
        </Grid> 
        <Grid item xs={2}>
        <div className={classes.paper}>
        <YouTubeIcon />
        <TwitterIcon />
        </div>
        </Grid>
      </Grid>
        
        </Container>
      </footer>
    </div>
  );
}
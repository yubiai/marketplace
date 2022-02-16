import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    // maxWidth: '801px',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  gridCheckout: {
    display: 'flex',
    
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'10px',
    // overflowY: 'scroll',
    height: '780px',
    maxWidth: '801px',
    width: '100%',
    // [theme.breakpoints.down(628)]: {
    //   width: '100%',
    //  },
  },
  gridSummary: {
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'10px',
    // overflowY: 'scroll',
    height: '522px',
    maxWidth: '477px',
    width: '100%',
    // [theme.breakpoints.down(628)]: {
    //   width: '100%',
    //  },
  },

}));

export default function Checkout() {
    const classes = useStyles();
    const { t, i18n } = useTranslation("checkout");
    const [currency, setCurrency] = React.useState('UBI');

return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="left"
          direction="row"  >
          <Grid direction="column" item xs={10} md={5} className={classes.gridCheckout}>
            <h3>{t("Checkout")}</h3>
            <h4>Shipping Details</h4>
            <FormControl>
                <FormLabel id="address">Select delivery location</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="default-address"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="address" control={<Radio />} label={" "} />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="address">New Address</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="default-address"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="address" control={<Radio />} label={" "} />
                </RadioGroup>
            </FormControl>

          </Grid>
          <Grid item xs={10} md={5} className={classes.gridSummary}>
            <h3>Order Summary</h3>
            <ListItem>
                <ListItemText>Product </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
             <Divider
                    style={{ backgroundColor: "gray", height: "1px" }}
                  />
            <ListItem>
                <ListItemText>Sub total </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Yubiai Fee </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>UBI Burner Fee </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>
            <Divider
                    style={{ backgroundColor: "gray", height: "1px" }}
                  />
            <ListItem>
                <ListItemText>Order Total </ListItemText>
                <ListItemText>Price</ListItemText>
            </ListItem>           
          </Grid>

</Grid>
  );
}
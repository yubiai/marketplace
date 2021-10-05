import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';




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

  title: {
    width: '50ch',
    margin:'10px'
    
    
  },
  price: {
    width: '37.5ch',
    margin:'10px'
    },
  currency: {
    width: '80px',
    margin:'10px' 
  },

  condition: {     
    m: 1, 
    width: '44.5ch',
    color: 'black',
    margin:'10px'
    

  },
  category: {
    
    m: 1, 
    width: '44.5ch',
    margin:'10px'
   
  },

  description: {
    width: '102.5ch',
    margin:'10px'
  },

  imguploader: {
    width: '102.5ch',
    margin:'10px'
  },

  submit: {
    width: '100px',
    margin:'10px',
    marginLeft: "92.5ch"
 
    
  },
}));


const conditions = [
  {
    value: 'New',
    label: 'New',
  },
  {
    value: 'Used',  
    label: 'Used',
  },
  {
    value: 'Refurbished',
    label: 'Refurbished',
  },
  
];


const currencies = [
  {
    value: 'UBI',
    label: 'UBI',
  },
  {
    value: 'ETH',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'xDAI',
    label: '¥',
  },
];

const categories = [
  {
    value: 'Arts & Crafts',
    label: 'Arts & Crafts',
  },
  {
    value: 'Automotive',
    label: 'Automotive',
  },
  {
    value: 'Appliances',
    label: 'Appliances',
  },
  {
    value: 'Video Games',
    label: 'Video Games',
  },
];


export default function AddItem() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('UBI');
  const [condition, setCondition] = React.useState('New');
  const [category, setCategory] = React.useState('Appliances');

  const handleChange1 = (event1) => {
    setCurrency(event1.target.value1);
  };
  const handleChange2 = (event2) => {
    setCondition(event2.target.value2);
  };
  const handleChange3 = (event3) => {
    setCategory(event3.target.value3);
  };

  

return (

  <form noValidate autoComplete="off">
  
  <div>
  <TextField id="title" label="Title"  type="text" name="title" className={classes.title} variant="outlined"  />
  <TextField id="price" label="Price" type="number" name="price" className={classes.price} variant="outlined" />
  
  <TextField
          id="standard-select-currency"
          select
          className={classes.currency}
          label="Currency"
          value={currency}
          variant="outlined"
          onChange={handleChange1}
           type="text"
        >{currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
    </div>
    
  <div>   
    {/* <InputLabel id="condition">Condition</InputLabel> */}
    <Select
          labelId="demo-simple-select-label"
          id="condition"
          value={condition}
          onChange={handleChange2}
          className={classes.condition}
          label="Condition"
          variant="outlined"
          helperText="Please select your currency"
        >{conditions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
         
    </Select>
    
        {/* <InputLabel id="category">Category</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="category"
          value={category}
          onChange={handleChange3}
          className={classes.category}
          label="Condition"
          variant="outlined"
        >{categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
           
        </Select>
      </div>    
        <TextField id="description" aria-label="minimum height" minRows={4} multiline defaultValue="Default Value" className={classes.description} variant="outlined" />

        <TextField
          name="upload-photo"
          type="file"
          className={classes.imguploader}
          variant="outlined"
          minRows={4}
          
        />
       <div style={{ display: "flex" }}>

        <Button type="submit" value="Submit" variant="contained" className={classes.submit}>Submit</Button>
        </div>
</form>
);
}
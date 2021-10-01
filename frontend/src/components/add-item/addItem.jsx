import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



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
    width: '30ch'
    
    
  },
  price: {
    width: '30ch',
    },
  currency: {
    width: '50px', 
  },

  condition: {     
    m: 1, 
    width: '30ch',
    color: 'black',
    

  },
  category: {
    
    m: 1, 
    width: '30ch'
   
  },

  description: {
    width: '400px',
   
  },

  imguploader: {
    width: '400px',
   
  },

  submit: {
    width: '100px',
    
  },
}));

const currencies = [
  {
    value: 'UBI',
    label: '$',
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



export default function AddItem() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(true);
  const [condition, setCondition] = React.useState(true);
  const [category, setCategory] = React.useState(true);

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange2 = (event) => {
    setCondition(event.target.value);
  };
  const handleChange3 = (event) => {
    setCategory(event.target.value);
  };

  

return (

  <form noValidate autoComplete="off">
  
  <div>
  <TextField id="title" label="Title"  type="text" name="title" className={classes.title} />
  <TextField id="price" label="Price" type="number" name="price" className={classes.price} />
  
  <TextField
          id="standard-select-currency"
          select
          className={classes.currency}
          label="&nbsp;"
          value={currency}
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
          variant="standard"
          helperText="Please select your currency"
        >
          <MenuItem value={1}>New</MenuItem>
          <MenuItem value={2}>Used</MenuItem>
          <MenuItem value={3}>Refurbished</MenuItem>
    </Select>
    
        {/* <InputLabel id="category">Category</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="category"
          value={category}
          onChange={handleChange3}
          className={classes.category}
          label="Condition"
          variant="standard"
        >
           <MenuItem className={classes.listItemText} >Arts & Crafts</MenuItem>
            <MenuItem className={classes.listItemText} >Automotive</MenuItem>
            <MenuItem className={classes.listItemText} >Appliances</MenuItem>
            <MenuItem className={classes.listItemText} >VideoGames</MenuItem>
        </Select>
      </div>    
        <TextareaAutosize id="description" aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" className={classes.description} />

        <TextField
          name="upload-photo"
          type="file"
          className={classes.imgupload}
        />


        <input type="submit" value="Submit" className={classes.submit} />
</form>
);
}
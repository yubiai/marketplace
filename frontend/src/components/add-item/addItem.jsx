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
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '140px',
    maxWidth: '140px',
    top: '-4.75rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
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
    backgroundColor: '#fef1e4',
    color: '#FCB877',
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
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
    backgroundColor: '#FCB877',
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
        color: '#008968',
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
  const [currency, setCurrency] = React.useState('');
  const [condition, setCondition] = React.useState('');
  const [category, setCategory] = React.useState('');

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
  <TextField id="outlined-basic" label="Outlined" variant="Title" type="text" name="title" />
  <TextField id="outlined-basic" label="Outlined" variant="Price" type="number" name="price" />
  

  <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange1}
          helperText="Please select your currency"
        >{currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
         </TextField>

        
        <InputLabel id="demo-simple-select-label">Condition</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={condition}
          onChange={handleChange2}
        >
          <MenuItem value={1}>New</MenuItem>
          <MenuItem value={2}>Used</MenuItem>
          <MenuItem value={3}>Refurbished</MenuItem>
        </Select>

        
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange3}
        >
           <MenuItem className={classes.listItemText} >Arts & Crafts</MenuItem>
            <MenuItem className={classes.listItemText} >Automotive</MenuItem>
            <MenuItem className={classes.listItemText} >Appliances</MenuItem>
            <MenuItem className={classes.listItemText} >VideoGames</MenuItem>
        </Select>

        <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />

        <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />


        <input type="submit" value="Submit" />
</form>
);
}
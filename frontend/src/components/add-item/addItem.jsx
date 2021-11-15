import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Box, Fab, withTheme } from "@material-ui/core";



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
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-around'
    },
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
    width: '100%',
    margin:'5px',
    color:'black'
    
  },
  price: {
    width: '100%',
    margin:'5px'
    },
  currency: {
    width: '100%',
    margin:'5px' 
  },

  condition: {     
    m: 1, 
    width: '100%',
    color: 'black',
    margin:'5px' 

  },
  category: {
    
    m: 1, 
    width: '100%',
    margin:'5px'
   
  },

  description: {
    width: '100%',
    margin:'5px'
  },

  imguploader: {
    width: '100%',
    margin:'5px'
  },
  addPhotoButton: {
    color: 'gray',
    marginTop: '0.75rem',
    height: '38px',
    left: '23rem',
    boxShadow: 'none',
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    outline: 'none !important',
    '&:hover, &:focus, &:active': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        outline: 'none !important',
    },
    '&:hover': {
      outline: 'none !important',
    }
},
  submit: {
    width: '200px',
    margin:'10px',
    color: 'white',
    // marginLeft: "92.5ch",
    backgroundColor: '#00ABD1',
    '&:hover, &:focus, &:active': {
      outline: 'none !important',
      },
      '&:hover': {
        backgroundColor: 'Blue',
      }
    
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
    label: 'eth',
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
    "value": "YUBI5725",
    "label": "Accesorios para Vehículos"
  },
  {
    "value": "YUBI1512",
    "label": "Agro"
  },
  {
    "value": "YUBI1403",
    "label": "Alimentos y Bebidas"
  },
  {
    "value": "YUBI1071",
    "label": "Animales y Mascotas"
  },
  {
    "value": "YUBI1367",
    "label": "Antigüedades y Colecciones"
  },
  {
    "value": "YUBI1368",
    "label": "Arte, Librería y Mercería"
  },
  {
    "value": "YUBI1743",
    "label": "Autos, Motos y Otros"
  },
  {
    "value": "YUBI1384",
    "label": "Bebés"
  },
  {
    "value": "YUBI1246",
    "label": "Belleza y Cuidado Personal"
  },
  {
    "value": "YUBI1039",
    "label": "Cámaras y Accesorios"
  },
  {
    "value": "YUBI1051",
    "label": "Celulares y Teléfonos"
  },
  {
    "value": "YUBI1648",
    "label": "Computación"
  },
  {
    "value": "YUBI1144",
    "label": "Consolas y Videojuegos"
  },
  {
    "value": "YUBI1500",
    "label": "Construcción"
  },
  {
    "value": "YUBI1276",
    "label": "Deportes y Fitness"
  },
  {
    "value": "YUBI5726",
    "label": "Electrodomésticos y Aires Ac."
  },
  {
    "value": "YUBI1000",
    "label": "Electrónica, Audio y Video"
  },
  {
    "value": "YUBI2547",
    "label": "Entradas para Eventos"
  },
  {
    "value": "YUBI407134",
    "label": "Herramientas"
  },
  {
    "value": "YUBI1574",
    "label": "Hogar, Muebles y Jardín"
  },
  {
    "value": "YUBI1499",
    "label": "Industrias y Oficinas"
  },
  {
    "value": "YUBI1459",
    "label": "Inmuebles"
  },
  {
    "value": "YUBI1182",
    "label": "Instrumentos Musicales"
  },
  {
    "value": "YUBI3937",
    "label": "Joyas y Relojes"
  },
  {
    "value": "YUBI1132",
    "label": "Juegos y Juguetes"
  },
  {
    "value": "YUBI3025",
    "label": "Libros, Revistas y Comics"
  },
  {
    "value": "YUBI1168",
    "label": "Música, Películas y Series"
  },
  {
    "value": "YUBI1430",
    "label": "Ropa y Accesorios"
  },
  {
    "value": "YUBI409431",
    "label": "Salud y Equipamiento Médico"
  },
  {
    "value": "YUBI1540",
    "label": "Servicios"
  },
  {
    "value": "YUBI9304",
    "label": "Souvenirs, Cotillón y Fiestas"
  },
  {
    "value": "YUBI1953",
    "label": "Otras categorías"
  }
];


export default function AddItem() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('UBI');
  const [condition, setCondition] = React.useState('New');
  const [category, setCategory] = React.useState('YUBI1648');

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




  <Grid container spacing={2}
            variant="fullWidth"
           
            alignItems="left" style={{marginTop: '4px' ,  marginLeft: '1rem'}}>
  


    {/* <form noValidate autoComplete="off"> */}
    
  <Grid item xs={10} md={5} style={{backgroundColor: 'white', borderRadius:'20px' }}>  
   {/* <InputLabel id="condition">Condition</InputLabel> */}
    <Select
          labelId="demo-simple-select-label"
          id="condition"
          value={condition}
          onChange={handleChange2}
          className={classes.condition}
          label="Condition"
          variant="outlined"
          helperText="Please select your condition"
        >{conditions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
         
    </Select>
    </Grid>

    <Grid item xs={10} md={5} > 
    {/* <InputLabel id="category">Category</InputLabel> */}
    <Select
          labelId="demo-simple-select-label"
          id="category"
          value={category}
          onChange={handleChange3}
          className={classes.category}
          label="Category"
          variant="outlined"
        >{categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
           
        </Select>
    </Grid>

<Grid item xs={10} md={10} > 
  <TextField id="title" label="enter item name, model & manufacturer"  type="text" name="title" className={classes.title} variant="outlined" defaultValue="Title"  />
  </Grid>
  <Grid item xs={10} md={10}> 
        <TextField id="description" aria-label="minimum height" minRows={4} multiline defaultValue="Description" className={classes.description} variant="outlined" />
     </Grid>

  <Grid item xs={10} md={3} > 
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
    </Grid>

    <Grid item xs={10} md={3} > 
    <TextField id="price" label="0.00" type="number" name="price" className={classes.price} variant="outlined" defaultValue="Price" />
    </Grid>


     <Grid item xs={10} md={10} > 
     
          <h3>Item Images</h3>
          <p>Get noticed by the right buyers with visual examples of your services. Images must have a minimum width of 375px, height of 375px and must not be more than 10mb each</p>
          </Grid> 
        {/* <label className={classes.imguploader} htmlFor="upload-photo">
                <input
                    style={{ display: "none" }}
                    
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />          
                <Fab
                  className={classes.addPhotoButton}
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                 <AddAPhotoIcon />
                 </Fab>
         </label>    */}


          <Grid item xs={10} md={3} > 
          <Box component="div" sx={{ p: 3, border: '1px dashed grey',   height:'150px', paddingTop:'60px', paddingLeft:'60px' }}><Button>Drag & drop a photo or </Button></Box>
          </Grid> 
          <Grid item xs={10} md={3} > 
          <Box component="div" sx={{ p: 3, border: '1px dashed grey',  height:'150px', paddingTop:'60px', paddingLeft:'60px' }}><Button>Drag & drop a photo or </Button></Box>
          </Grid> 
          <Grid item xs={10} md={3} > 
          <Box component="div" sx={{ p: 3, border: '1px dashed grey',   height:'150px', paddingTop:'60px', paddingLeft:'60px' }}><Button>Drag & drop a photo or </Button></Box>
          </Grid> 
            
         <Grid item xs={10} md={10}>

        <Button type="submit" value="Submit" variant="contained" className={classes.submit}>Preview & Submit for review</Button>
        </Grid>
{/* </form> */}
<div sx={{ marginBottom: '200ch'}}>&nbsp;<br></br></div>
</Grid>

);
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Box, Fab, withTheme } from "@material-ui/core";
import { currencies, categories, conditions } from "./addItemJSON";
import AddItemPreview from "./addItemPreview";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  gridRoot: {
    marginTop: '4px' ,
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius:'20px',
    overflowY: 'scroll',
    height: '680px',
    width: '700px',
    [theme.breakpoints.down(628)]: {
      width: '100%',
     
     
      
    },
  },
  gridCondition: {
    // backgroundColor: 'white',
    // borderRadius:'20px'
  },
  dragNdropBox: {
    position: 'relative',
    border: '1px dashed grey',
    height:'150px',
    display: 'flex'
  },
  dragNdropSpan: {
    margin: 'auto'
  },
  dragNdropInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    opacity: 0,
    cursor: 'pointer'
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
  gridCategory: {
    display:"grid"
  },
  category: {
    m: 1,
    width: '100%',
    margin:'5px',
   
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

export default function AddItem() {
  const classes = useStyles();
  const [showItemPreview, setShowItemPreview] = React.useState(false);

  const [currency, setCurrency] = React.useState('UBI');
  const [condition, setCondition] = React.useState('New');
  const [category, setCategory] = React.useState('YUBI1648');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);

  // File definitions
  const fileInputFieldSt = React.useRef(null);
  const fileInputFieldNd = React.useRef(null);
  const fileInputFieldRd = React.useRef(null);
  const [files, setFiles] = React.useState({});
  const [pictures, setPictures] = React.useState([]);

  /**
   * Format file before open modal
   */
  const setFile = (ev, field) => {
    setFiles({
      ...files,
      [field]: ev.currentTarget.files[0]
    })
  };
  const openModal = () => {
    const pictureList = [];
    Object.values(files).forEach((pictVal, index) => {
      pictureList.push({
        url: URL.createObjectURL(pictVal),
        alt: `Pict-${index}`
      })
    });
    setPictures([...pictureList]);
    setShowItemPreview(true);
  };

  return (
    <Grid container spacing={2}
          variant="fullWidth"
          alignItems="left" className={classes.gridRoot} >
          
      {/* <form noValidate autoComplete="off"> */}
      <Grid item xs={10} md={5} className={classes.gridCondition}>
      {/* <InputLabel id="condition">Condition</InputLabel> */}
      <div>
      <h2>Sell your product</h2>
      </div>
        <Select
              labelId="demo-simple-select-label"
              id="condition"
              value={condition}
              onChange={ev => setCondition(ev.target.value)}
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

      <Grid item xs={10} md={5}  alignItems="flex-end" className={classes.gridCategory} >
        {/* <InputLabel id="category">Category</InputLabel> */}
        <Select
              labelId="demo-simple-select-label"
              id="category"
              value={category}
              onChange={ev => setCategory(ev.target.value)}
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
        <TextField id="title"
                  label="enter item name, model & manufacturer"
                  type="text"
                  name="title"
                  className={classes.title}
                  variant="outlined"
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                  placeholder="Title" />
      </Grid>
      <Grid item xs={10} md={10}>
        <TextField id="description"
                    aria-label="minimum height"
                    minRows={4}
                    multiline
                    placeholder="Description"
                    onChange={ev => setDescription(ev.target.value)}
                    value={description}
                    className={classes.description}
                    variant="outlined" />
      </Grid>
      <Grid item xs={10} md={3}>
        <TextField
                id="standard-select-currency"
                select
                className={classes.currency}
                label="Currency"
                value={currency}
                variant="outlined"
                onChange={ev => setCurrency(ev.target.value)}
                type="text"
              >{currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
        </TextField>
      </Grid>
      <Grid item xs={10} md={3}>
        <TextField id="price"
                  label="0.00"
                  type="number"
                  name="price"
                  onChange={ev => setPrice(ev.target.value)}
                  value={price}
                  className={classes.price}
                  variant="outlined"
                  placeholder="Price" />
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
      <Grid item xs={10} md={3}>
        <Box component="div" className={classes.dragNdropBox}>
          <span className={classes.dragNdropSpan}>Drag &amp; drop a photo or Browse </span>
          <input className={classes.dragNdropInput}
          accept="image/*"
          onChange={ev => setFile(ev, 'fileOne')}
          type="file"
          ref={fileInputFieldSt}
          />
        </Box>
      </Grid>
      <Grid item xs={10} md={3}>
        <Box component="div" className={classes.dragNdropBox}>
          <span className={classes.dragNdropSpan}>Drag &amp; drop a photo or Browse </span>
          <input className={classes.dragNdropInput}
          onChange={ev => setFile(ev, 'fileTwo')}
          type="file"
          accept="image/*"
          ref={fileInputFieldNd} />
        </Box>
      </Grid>

        <Grid item xs={10} md={3} >
        <Box component="div" className={classes.dragNdropBox}>
          <span className={classes.dragNdropSpan}>Drag &amp; drop a photo or Browse </span>
          <input className={classes.dragNdropInput}
          type="file"
          onChange={ev => setFile(ev, 'fileThree')}
          type="file"
          accept="image/*"
          ref={fileInputFieldRd} />
        </Box>
      </Grid>
      <Grid item xs={10} md={10}>
        <Button type="submit" value="Submit" variant="contained"
                className={classes.submit}
                onClick={openModal}>
          Preview &amp; Submit for review
        </Button>
      </Grid>
      {/* </form> */}
      <div sx={{ marginBottom: '200ch'}}>&nbsp;<br></br></div>
      {
        showItemPreview &&
        <AddItemPreview productName={name}
                        productDescription={description}
                        productPrice={{value: price, currency}}
                        pictures={pictures}
                        hideItemModal={() => setShowItemPreview(false)}
        />
      }
    </Grid>
  );
}

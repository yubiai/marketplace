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
import ImageIcon from "@material-ui/icons/Image";
import { itemService } from '../../services/itemService';
import { useTranslation } from "react-i18next";
import AddItemResult from './addItemResult';
import { useHistory } from "react-router-dom";
import { useGlobal } from "../../providers/globalProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  gridRoot: {
    marginTop: '4px',
    marginLeft: '1rem',
    backgroundColor: 'white',
    borderRadius: '20px',
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
  sellYourProduct: {
    width: 205,
    height: 33,
    fontFamily: 'Open Sans',
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000"
  },
  productImages: {
    width: 146,
    height: 25,
    fontFamily: 'Open Sans',
    fontSize: 18,
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgba(57, 57, 57, 0.85)"
  },
  dragNdropBox: {
    position: 'relative',
    border: '1px dashed grey',
    height: '180px',
    // width: '180px',
    display: 'flex',

  },
  dragNdropSpan: {
    margin: 'auto',
    fontSize: '12px',
    textAlign: 'center'
  },
  dragNdropInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    opacity: 0,
    cursor: 'pointer',
    zIndex: 10,

  },
  dragNdropIconContainerFill: {
    // background: 'rgba(0, 0, 0, 0.5)',
    color: 'transparent',
    display: "none !important",
    padding: 1
  },
  dragNdropIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    zIndex: 10
  },
  dragNDropIcon: {
    color: 'gray',
    width: '45px',
    height: '36px',
    display: 'block'
  },
  dragNDropPictRender: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    [theme.breakpoints.down(900)]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '50% !important',
      width: '50% !important',
    },
  },
  inline: {
    fontFamily: 'Open Sans',
    display: 'flex',
    marginTop: '-0.5rem',
  },
  listItem: {
    borderRadius: '20px',
    height: '117px',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
  },
  listItemText: {
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
    display: 'flex',
    maxBlockSize: '50px',
    width: 50,
    '&:hover, &:focus, &:active': {
      outline: 'none !important',
    },
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  title: {
    width: '100%',
    margin: '5px',
    color: 'black'
  },
  divPrice: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '9px',
  },
  price: {
    width: '223px',
    margin: '5px'
  },
  currency: {
    width: '78px',
    margin: '5px'
  },
  condition: {
    m: 1,
    width: '100%',
    color: 'black',
    margin: '5px'
  },
  gridCategory: {
    display: "grid"
  },
  category: {
    m: 1,
    width: '100%',
    margin: '5px',
    marginTop: "-31px",
    [theme.breakpoints.down('xs')]: {
      // display: 'flex',
      // flexDirection: 'column',
      // height: '100%',
      // justifyContent: 'space-around'
      marginTop: "7px",
    },
  },
  description: {
    width: '100%',
    margin: '5px'
  },
  imguploader: {
    width: '100%',
    margin: '5px'
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
    margin: '10px',
    color: 'white',
    // marginLeft: "92.5ch",
    backgroundColor: '#00ABD1',
    '&:hover, &:focus, &:active': {
      outline: 'none !important',
    },
    '&:hover': {
      color: '#00ABD1',
      backgroundColor: 'White',
    }
  },
  label: {
    marginLeft: '8px',
    fontFamily: 'Open Sans',
    fontSize: '14px',
  },
  labelCategory: {
    marginLeft: '8px',
    // marginBottom: '-25px',
    fontFamily: 'Open Sans',
    fontSize: '14px',

  },
  categoryMenu: {
    position: 'relative',
    maxHeight: '600px !important',
    top: '90px',
  },
  labelPrice: {
    marginLeft: '14px',
    fontFamily: 'Open Sans',
    fontSize: '14px',
  },
  conversion: {
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    width:"100%"
  }
}));

export default function AddItem() {
  const classes = useStyles();
  const [showItemPreview, setShowItemPreview] = React.useState(false);
  const [showItemResult, setShowItemResult] = React.useState(false);
  const { t, i18n } = useTranslation("additem");
  const [currency, setCurrency] = React.useState('UBI');
  const [condition, setCondition] = React.useState('New');
  const [conversion, setConversion] = React.useState(0);
  const [category, setCategory] = React.useState('YUBI1648');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const history = useHistory();
  const global = useGlobal();

  // Wallet User
  const walletUser = sessionStorage.getItem('wallet');

  // File definitions
  const fileInputFieldSt = React.useRef(null);
  const fileInputFieldNd = React.useRef(null);
  const fileInputFieldRd = React.useRef(null);
  const [files, setFiles] = React.useState({});
  const [pictures, setPictures] = React.useState([]);

  /**
   * Format file before open modal
   */
  const conversionActive = (value) => { 
    if (currency === 'UBI') {
      let result = value * global.prices.ubi * global.prices.arg;
      return setConversion(result);
    }
    if (currency === 'USD') {
      let result = value / global.prices.ubi;
      return setConversion(result);  
    }
    if (currency === 'AR$') {
      let result = value / global.prices.ubi / global.prices.arg;
      console.log(result);
      return setConversion(result);  
    }
      
    // console.log(value);
    console.log(currency);
    };

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
  const getImgFromFile = (fileObj) => {
    return URL.createObjectURL(fileObj);
  };
  const submitReview = async () => {
    const form = new FormData();
    Object.values(files).forEach((file, index) => {
      form.append('file', file)
    });
    form.append('title', name);
    form.append('price', price);
    form.append('description', description);
    form.append('condition', condition);
    form.append('seller', walletUser);

    await itemService.newItem(form, category)
      .then((res) => {
        // Si sale todo bien
        console.log(res, "res")
        setShowItemPreview(false);
        setShowItemResult(true);
      })
      .catch((err) => {
        // Si sale algo mal
        console.log(err, "err");
      })
  };

  return (
    <Grid container spacing={2}
      variant="fullWidth"
      alignItems="left" className={classes.gridRoot} >

      {/* <form noValidate autoComplete="off"> */}
      <Grid item xs={10} md={5} className={classes.gridCondition}>
        {/* <InputLabel id="condition">Condition</InputLabel> */}
        <div>
          <h2 className={classes.sellYourProduct}>{t("Sell your product")}</h2>
         
        </div>
        <label className={classes.label}>
          {t("Condition")}
        </label>
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

      <Grid item xs={10} md={5} alignItems="flex-end" className={classes.gridCategory} >
        {/* <InputLabel id="category">Category</InputLabel> */}
        <label className={classes.labelCategory}>
          {t("Category")}
        </label>
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
        <label className={classes.label}>
          {t("Title")}
        </label>
        <TextField id="title"
          label={t("Enter item name, model & manufacturer")}
          type="text"
          name="title"
          className={classes.title}
          variant="outlined"
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder={t("i.e MacAir Book 13 inch gray")} />
      </Grid>
      <Grid item xs={10} md={10}>
        <label className={classes.label}>
          {t("Description")}
        </label>
        <TextField id="description"
          aria-label="minimum height"
          minRows={4}
          multiline
          placeholder={t("Write a detailed description of your item")}
          onChange={ev => {
            if ((ev.target.value || '').length < 600) {
              setDescription(ev.target.value);
            }
          }}
          value={description}
          className={classes.description}
          variant="outlined" />
      </Grid>
      <div>

        <label className={classes.labelPrice}>
          {t("Price")}
          <div>
            <span style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <p style={{marginRight:"5px"}} >Precio Arg: {global.prices.arg}</p>
                <p style={{marginRight:"5px"}}>Precio UBI: {global.prices.ubi}</p>
                <p >Valor ubi en Arg: {global.prices && global.prices.ubi * global.prices.arg}</p>
            </span>
          </div>
        </label>
        <div className={classes.divPrice}>
           <Grid item xs={10} md={3}>
            <TextField
              id="standard-select-currency"
              select
              className={classes.currency}
              label={t("Currency")}
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
              onChange={ev => conversionActive(ev.target.value)}
              // value={price}
              className={classes.price}
              variant="outlined"
              placeholder="Price" />
          </Grid>
          <p className={classes.conversion}>{conversion}{" "}{currency === 'AR$' ? 'UBI': '$' &&  currency === 'USD' ? 'UBI': 'UBI' &&  currency === 'UBI' ? 'ARG': 'UBI' }  </p>
          
        </div>
      </div>
      <Grid item xs={10} md={10} >
        <h3 className={classes.productImages}>{t("Product Images")}</h3>
        <p>{t("Get noticed by the right buyers with visual examples of your services/products. Images must have a minimum width of 375px(Max Size: 10 MB | *.jpg, *.jpeg, *.png)")}</p>
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
        <Box component="div" className={classes.dragNdropBox}>
          <div className={
            `${classes.dragNdropIconContainer} ${files.fileOne ? classes.dragNdropIconContainerFill : ''}`}>
            <ImageIcon className={classes.dragNdropIcon}
              style={{
                color: '#bababa',
                width: '45px',
                height: '36px',
                display: 'block'
              }
              } />
            <span className={classes.dragNdropSpan}>{t("Drag & drop a photo or Browse")} </span>
          </div>
          {
            files.fileOne &&
            <img className={classes.dragNDropPictRender}
              src={getImgFromFile(files.fileOne)}
              alt="Image one" />
          }
          <input className={classes.dragNdropInput}
            accept="image/*"
            onChange={ev => setFile(ev, 'fileOne')}
            type="file"
            ref={fileInputFieldSt}
          />
        </Box>
      </Grid>
      <Grid item xs={10} md={3} >
        <Box component="div" className={classes.dragNdropBox}>
          <div className={
            `${classes.dragNdropIconContainer} ${files.fileTwo ? classes.dragNdropIconContainerFill : ''}`}>
            <ImageIcon className={classes.dragNdropIcon}
              style={{
                color: '#bababa',
                width: '45px',
                height: '36px',
                display: 'block'
              }
              } />
            <span className={classes.dragNdropSpan}>{t("Drag & drop a photo or Browse")} </span>
          </div>
          {
            files.fileTwo &&
            <img className={classes.dragNDropPictRender}
              src={getImgFromFile(files.fileTwo)}
              alt="Image two" />
          }
          <input className={classes.dragNdropInput}
            onChange={ev => setFile(ev, 'fileTwo')}
            type="file"
            accept="image/*"
            ref={fileInputFieldNd} />
        </Box>
      </Grid>

      <Grid item xs={10} md={3}  >
        <Box component="div" className={classes.dragNdropBox}>
          <div className={
            `${classes.dragNdropIconContainer} ${files.fileThree ? classes.dragNdropIconContainerFill : ''}`}>
            <ImageIcon className={classes.dragNdropIcon}
              style={{
                color: '#bababa',
                width: '45px',
                height: '36px',
                display: 'block'
              }
              } />
            <span className={classes.dragNdropSpan}>{t("Drag & drop a photo or Browse")}</span>
          </div>
          {
            files.fileThree &&
            <img className={classes.dragNDropPictRender}
              src={getImgFromFile(files.fileThree)}
              alt="Image three" />
          }
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
          {t("Preview & Submit for review")}
        </Button>
      </Grid>
      {/* </form> */}
      <div sx={{ marginBottom: '200ch' }}>&nbsp;<br></br></div>
      {
        showItemPreview &&
        <AddItemPreview productName={name}
          productDescription={description}
          productPrice={{ value: price, currency }}
          pictures={pictures}
          hideItemModal={() => setShowItemPreview(false)}
          submitReview={submitReview}
        />  
      }
      {showItemResult &&
        <AddItemResult hideItemModal={() => {
          setShowItemResult(false)
          history.push("/")
        }}
          text="Hola" />
      }
    </Grid>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Fab } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: "159ch",
    backgroundColor: theme.palette.background.paper,
    padding: "20px",
  },
  inline: {
    fontFamily: "Open Sans",
    display: "flex",
    marginTop: "-0.5rem",
  },

  listItem: {
    borderRadius: "20px",
    height: "117px",
    backgroundColor: "white",
    fontFamily: "Open Sans",
  },
  listItemText: {
    fontFamily: "Open Sans",
    marginLeft: "20px",
  },

  image: {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
  },
  buttonThreeDots: {
    outline: "none",
    display: "flex",
    maxBlockSize: "50px",
    width: 50,
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },

  title: {
    width: "50ch",
    margin: "10px",
  },
  price: {
    width: "37.5ch",
    margin: "10px",
  },
  currency: {
    width: "80px",
    margin: "10px",
  },

  condition: {
    m: 1,
    width: "44.5ch",
    color: "black",
    margin: "10px",
  },
  category: {
    m: 1,
    width: "44.5ch",
    margin: "10px",
  },

  description: {
    width: "102.5ch",
    margin: "10px",
  },

  imguploader: {
    width: "102.5ch",
    margin: "10px",
  },
  addPhotoButton: {
    color: "gray",
    marginTop: "0.75rem",
    height: "38px",
    left: "23rem",
    boxShadow: "none",
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    outline: "none !important",
    "&:hover, &:focus, &:active": {
      backgroundColor: "transparent",
      boxShadow: "none",
      outline: "none !important",
    },
    "&:hover": {
      outline: "none !important",
    },
  },
  submit: {
    width: "100px",
    margin: "10px",
    marginLeft: "92.5ch",
    backgroundColor: "#00ABD1",
    "&:hover, &:focus, &:active": {
      outline: "none !important",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const conditions = [
  {
    value: "New",
    label: "New",
  },
  {
    value: "Used",
    label: "Used",
  },
  {
    value: "Refurbished",
    label: "Refurbished",
  },
];

const currencies = [
  {
    value: "UBI",
    label: "UBI",
  },
  {
    value: "ETH",
    label: "eth",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "xDAI",
    label: "¥",
  },
];

const categories = [
  {
    value: "YUBI5725",
    label: "Accesorios para Vehículos",
  },
  {
    value: "YUBI1512",
    label: "Agro",
  },
  {
    value: "YUBI1403",
    label: "Alimentos y Bebidas",
  },
  {
    value: "YUBI1071",
    label: "Animales y Mascotas",
  },
  {
    value: "YUBI1367",
    label: "Antigüedades y Colecciones",
  },
  {
    value: "YUBI1368",
    label: "Arte, Librería y Mercería",
  },
  {
    value: "YUBI1743",
    label: "Autos, Motos y Otros",
  },
  {
    value: "YUBI1384",
    label: "Bebés",
  },
  {
    value: "YUBI1246",
    label: "Belleza y Cuidado Personal",
  },
  {
    value: "YUBI1039",
    label: "Cámaras y Accesorios",
  },
  {
    value: "YUBI1051",
    label: "Celulares y Teléfonos",
  },
  {
    value: "YUBI1648",
    label: "Computación",
  },
  {
    value: "YUBI1144",
    label: "Consolas y Videojuegos",
  },
  {
    value: "YUBI1500",
    label: "Construcción",
  },
  {
    value: "YUBI1276",
    label: "Deportes y Fitness",
  },
  {
    value: "YUBI5726",
    label: "Electrodomésticos y Aires Ac.",
  },
  {
    value: "YUBI1000",
    label: "Electrónica, Audio y Video",
  },
  {
    value: "YUBI2547",
    label: "Entradas para Eventos",
  },
  {
    value: "YUBI407134",
    label: "Herramientas",
  },
  {
    value: "YUBI1574",
    label: "Hogar, Muebles y Jardín",
  },
  {
    value: "YUBI1499",
    label: "Industrias y Oficinas",
  },
  {
    value: "YUBI1459",
    label: "Inmuebles",
  },
  {
    value: "YUBI1182",
    label: "Instrumentos Musicales",
  },
  {
    value: "YUBI3937",
    label: "Joyas y Relojes",
  },
  {
    value: "YUBI1132",
    label: "Juegos y Juguetes",
  },
  {
    value: "YUBI3025",
    label: "Libros, Revistas y Comics",
  },
  {
    value: "YUBI1168",
    label: "Música, Películas y Series",
  },
  {
    value: "YUBI1430",
    label: "Ropa y Accesorios",
  },
  {
    value: "YUBI409431",
    label: "Salud y Equipamiento Médico",
  },
  {
    value: "YUBI1540",
    label: "Servicios",
  },
  {
    value: "YUBI9304",
    label: "Souvenirs, Cotillón y Fiestas",
  },
  {
    value: "YUBI1953",
    label: "Otras categorías",
  },
];

export default function AddItem() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("UBI");
  const [condition, setCondition] = React.useState("New");
  const [category, setCategory] = React.useState("YUBI1648");
  const { t, i18n } = useTranslation("additem");

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
        <ListItemText disableTypography>
          Sell your product
        </ListItemText>
        <TextField
          id="title"
          label={t("Title")}
          type="text"
          name="title"
          className={classes.title}
          variant="outlined"
        />
        <TextField
          id="price"
          label={t("Price")}
          type="number"
          name="price"
          className={classes.price}
          variant="outlined"
        />

        <TextField
          id="standard-select-currency"
          select
          className={classes.currency}
          label={t("Currency")}
          value={currency}
          variant="outlined"
          onChange={handleChange1}
          type="text"
        >
          {currencies.map((option) => (
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
        >
          {conditions.map((option) => (
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
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </div>
      <TextField
        id="description"
        aria-label="minimum height"
        minRows={4}
        multiline
        label={t("Description")}
        className={classes.description}
        variant="outlined"
      />

      <label className={classes.imguploader} htmlFor="upload-photo">
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
      </label>

      <div style={{ display: "flex" }}>
        <Button
          type="submit"
          value="Submit"
          variant="contained"
          className={classes.submit}
        >
          {t("Submit")}
        </Button>
      </div>
    </form>
  );
}

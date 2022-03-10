import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: "159ch",
      backgroundColor: theme.palette.background.paper,
      padding: "20px",
    },
    inline: {
      fontFamily: "Open Sans",
      display: "flex",
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
      position: "relative",
    },
    btnChat: {
      display: "flex",
      alignItems: "center",
      right: "1px",
      fontWeight: "500",
      textTransform: "none",
      justifyContent: "space-evenly",
      marginLeft: "auto",
      marginBottom: "5px",
      borderRadius: "10px",
      backgroundColor: "#00ABD1",
      color: "#fff",
      minWidth: "140px",
      maxWidth: "140px",
      "&:hover": {
        borderBottom: "none",
        color: "#00ABD1",
        backgroundColor: "transparent",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none !important",
      },
    },
    link: {
      display: "flex",
      fontSize: "14px",
      color: "#000000",
      textDecorationColor: "transparent",
      marginTop: "-0.75rem",
      marginLeft: "0.4rem",
      marginRight: "-0.75rem",
      justifyContent: "space-evenly",
      padding: theme.spacing(1),
      alignItems: "center",
      "&:hover": {
        borderBottom: "none",
        color: "#00ABD1",
        textDecorationColor: "transparent",
      },
    },
    image: {
      width: "80px",
      height: "80px",
      borderRadius: "10px",
      color: "#bababa"
    },
    itemStatusIconAvailable: {
      color: "#1ED9A1",
      height: "12px",
    },
    itemStatusIconPaused: {
      color: "#FCB877",
      height: "12px",
    },
    itemStatusIconSold: {
      color: "#D9461E",
      height: "12px",
    },
    buttonThreeDots: {
      outline: "none",
      display: "inline-flex",
      "&:hover, &:focus, &:active": {
        outline: "none !important",
      },
      "&:hover": {
        backgroundColor: "white",
      },
    },
  }));

export default styles;
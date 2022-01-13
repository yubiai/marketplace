import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    marginLeft: "15px",
    marginTop: "-1.5rem",
    marginBottom: "1rem",
    width: "47px",
    height: "47px",
    top: "1.8rem",
  },
  nameMenu: {
    display: "inline-block",
    fontSize: "14px",
    padding: "-15px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    marginTop: "-2rem",
    marginLeft: "0.5rem",
    marginBottom: "-2rem",
  },
  ubiAmmount: {
    display: "block",
    color: "#939292",
    fontSize: "12px",
    fontFamily: "Open Sans",
    marginTop: "-0.5rem",
    marginLeft: "-0.2rem",
    marginRight: "10px",
    marginBottom: "1rem",
  },
  ubiIcon: {
    width: "17px",
    marginLeft: "75px",
    paddingRight: "5px",
  },
  listItemText: {
    display: "flex",
    fontSize: "16px",
    color: "#fff",
    font: "Open Sans, sans serif, regular !important",
    textDecorationColor: "transparent",
    marginLeft: "1rem",
    paddingTop: "1px",
    marginTop: "-2.5px",
    justifyContent: "space-evenly",
    alignItems: "top",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
  },
  notificon: {
    marginLeft: theme.spacing(2),
    alignItems: "center",
    "&:hover": {
      borderBottom: "none",
      color: "#a9a9a9",
    },
  },
}));

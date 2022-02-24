import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    gridRoot: {
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        height: "1523px",
        width: "1184px",
        backgroundColor: "white",
        overflowY: 'scroll',
        fontFamily: "Open Sans",
    },
    productTitle: {
        width: "303px",
        height: "27px",
        flexGrow: "0",
        margin: "8px 11px 5px 0",
        fontSize: "20px",
        fontWeight: "600",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "justify",
        color: "#000",
    },
    subtotalPrice: {
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "right",
        color: "#323232"
    },
    subtotalPriceFiat: {
        color:"#BABABA",
        fontSize: "16px",
        lineHeight: "24px",
        textAlign: "right",
        marginLeft:"5px"
    },
    starsReputation: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    color: "#00ABD1",
  },
  opinions: {
    width: "114px",
    height: "19px",
    flexGrow: "0",
    margin: "7px 42px 21px 13px",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "justify",
    color: "#bababa",
  },
  Price: {
    fontSize: "20px",
    lineHeight: "27px",
    textAlign: "right",
    color: "#323232"
  },
  PriceFiat: {
    color:"#BABABA",
    fontSize: "20px",
    lineHeight: "27px",
    textAlign: "right",
    marginLeft:"5px"
  },
  Fee:{
    width: "206px",
    flexGrow: "0",
    margin:" 7px 7px 4px 7px",
    fontSize: "14px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "justify",
    color: "#323232",

  },
}));

export default styles;    
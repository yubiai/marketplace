import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles((theme) => ({
    root: {
        fontFamily: "Open Sans",
      },
    button: {
        width: "288px",
        height: "32px",
        color: "white",
        textTransform: "none",
        margin: "27px 80px 286px 124px",
        borderRadius: "5px",
        backgroundColor: "#00abd1",
        "&:hover": {
            backgroundColor: "white",
            color: "#00abd1",
        },
    },  
  }));

export default styles;
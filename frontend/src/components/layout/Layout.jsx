import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "../sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  baseContainer: {
    height: '100%'
  },
  sidebarContainer: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    width: '100%',
    padding: 0,
    [theme.breakpoints.down(900)]: {
      height: '100%',
      left: 0,
      top: 0,
      padding: '0 !important',
      position: 'absolute',
      width: '100%',
      maxWidth: 'initial',
      flexBasis: '100%'
    }
  },
  layoutBody: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    [theme.breakpoints.down(900)]: {
      paddingTop: '0 !important',
      marginTop: '58px',
      width: '100%',
      maxWidth: 'initial',
      flexBasis: '100%',
      marginBottom: '200px'
    }
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.baseContainer} spacing={3}>
      <Grid className={classes.sidebarContainer} item sm={3} md={3}>
        <SideBar/>
      </Grid>
      <Grid className={classes.layoutBody} item sm={9} md={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;

import React from "react";
import Grid from "@material-ui/core/Grid";

import SideBar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;

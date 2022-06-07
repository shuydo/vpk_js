import React from 'react';
import { Container, Grid } from '@mui/material';
// import {Button, Container, Grid} from "@material-ui/core";
// import Box from "@material-ui/core/Box";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justify="center"
      >
        <Grid container alignItems="center" direction="column">
          <div className="lds-hourglass" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;

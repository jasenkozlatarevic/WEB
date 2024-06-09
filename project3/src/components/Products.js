import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

function Products() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1">My Projects</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h2">Project 1</Typography>
            <Typography variant="body1">
              This is a description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h2">Project 2</Typography>
            <Typography variant="body1">
              This is a description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Products;

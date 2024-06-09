// src/components/Portfolio.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import project1Image from '../project1.png';
import project2Image from '../project2.png';

const projects = [
  { title: 'Portfolio', description: 'I made a portfolio for the first project', image: project1Image },
  { title: 'PROJECT 2 - SAN BURGO', description: 'For my second project, I made a fast food site', image: project2Image },
];

const Portfolio = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            color: 'gray',
            fontWeight: 'normal',
            marginBottom: 5,
          }}
        >
          Jasenko's projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Portfolio;

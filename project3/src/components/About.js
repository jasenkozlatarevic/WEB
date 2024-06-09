import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import jasenkoImage from '../about.png'; 

const Home = () => {
  return (
    <Container>
      <Box 
        sx={{
          textAlign: 'center',
          marginTop: 4,
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom
          sx={{ 
            color: 'gray',
          }}
        >
          Hello!
        </Typography>
        <Typography 
          variant="h6" 
          component="p" 
          sx={{
            color: '#7EB9E9',
            marginBottom: 4,
          }}
        >
          I'm a future web developer
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src={jasenkoImage}
              alt="Jasenko Zlatarević"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                border: '8px solid #7EB9E9',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ marginBottom: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  color: 'gray',
                  fontWeight: 'normal',
                  marginBottom: 2,
                }}
              >
                About me
              </Typography>
              <Typography 
                variant="body1" 
                component="p" 
                sx={{
                  color: 'gray',
                }}
              >
                I am Jasenko Zlatarević, born in Cazin in 2001, graduated from high school in construction, majored in architectural technician, after finishing high school I continue my education in Sarajevo. I also play football and actively go to the gym, I am ready for all kinds of challenges, I study foreign languages and I like to read contemporary Bosnian-Herzegovinian literature. I finished primary music school, so in my free time I usually play the accordion or sleep.
              </Typography>
            </Box>
            <Box>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  color: 'gray',
                  fontWeight: 'normal',
                  marginBottom: 2,
                }}
              >
                Details:
              </Typography>
              <Typography variant="body1" component="p" sx={{ color: 'gray' }}>
                <strong>Name:</strong> Jasenko Zlatarevic<br />
                <strong>Age:</strong> 21 years<br />
                <strong>Location:</strong> Cazin / Sarajevo<br />
                <strong>E-mail:</strong> <a href="mailto:jasenkozlatarevic5@gmail.com" style={{ color: 'gray', textDecoration: 'none' }}>jasenko.zlatarevic@stu.ibu.edu.ba</a>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

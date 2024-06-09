import React from 'react';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import jasenkoImage from '../jasenko.png';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
        }}
      >
        <Box
          sx={{
            textAlign: isSmallScreen ? 'center' : 'left',
            marginBottom: isSmallScreen ? 4 : 0,
          }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              display: 'inline',
              fontWeight: 'light',
              color: '#A9A9A9',
            }}
          >
            Jasenko
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              display: 'inline',
              fontWeight: 'light',
              color: 'gray',
            }}
          >
            &nbsp;Zlatarević
          </Typography>
          <Typography 
            variant="subtitle1" 
            component="p" 
            sx={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 1,
            }}
          >
            <span style={{ color: '#89cff0' }}>DESIGN</span> 
            <span style={{ color: 'gray' }}> • </span>
            <span style={{ color: '#89cff0' }}>DEVELOPMENT</span> 
            <span style={{ color: 'gray' }}> • </span>
            <span style={{ color: '#89cff0' }}>BRANDING</span>
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: isSmallScreen ? 'center' : 'right',
          }}
        >
          <img
            src={jasenkoImage}
            alt="Jasenko Zlatarević"
            style={{
              maxWidth: isSmallScreen ? '100%' : '400px',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      py={3} 
      textAlign="center"
      sx={{
        backgroundColor: '#3f51b5',
        color: '#fff',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Jasenko Zlatarević. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

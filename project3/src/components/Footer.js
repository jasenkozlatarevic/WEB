import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Jasenko Zlatarević. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/TopLeftImage.css';

const Header = ({ imageUrl, altText, name }) => {
    return (
      <Box 
        sx={{
          display: 'flex', 
          justifyContent: 'right', 
          alignItems: 'right',
          width: '100%',
          padding: '20px',
        }}
      >
        <img src={imageUrl} alt={altText} className="top-left-image" />
        <Typography 
          variant="h6" 
          sx={{
            align: 'right',
            marginRight: '10px',
            fontWeight: 'bold',
            fontFamily: 'Yomogi, sans-serif'
          }}
        >
          {name}
        </Typography>
      </Box>
    );
  };
  
  export default Header;

import React from 'react';
import { Box } from '@mui/material';

const FunImage = ({ src, alt }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Make the image centered vertically and horizontally within the viewport height
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        maxWidth: '100%',
        maxHeight: '80vh', // Adjust as needed
        objectFit: 'contain', // Keeps the aspect ratio intact
      }}
    />
  </Box>
);

export default FunImage;

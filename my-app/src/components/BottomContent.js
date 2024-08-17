import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

// MainContent Component
const MainContent = ({ imageSrc, imageAlt, title, description }) => (
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} md={6}>
      <Box mt={4}>
        <Typography 
          variant="h6" 
          sx={{
            align: 'right',
            marginRight: '10px',
            fontWeight: 'bold',
            fontFamily: 'Yomogi, sans-serif'
          }}
        >
          {description}
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={imageSrc}
        alt={imageAlt}
        sx={{
          width: '100%',
          height: 'auto',
          maxHeight: '600px',
        }}
      />
    </Grid>
  </Grid>
);

export default MainContent;
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="./Images/LeftJelly.png"
          alt="Taller Image"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '600px', // Adjust as needed
          }}
        />
      </Grid>

      {/* Text on the right */}
      <Grid item xs={12} md={6}>
      <Typography 
          variant="h4" 
          sx={{
            align: 'top',
            marginRight: '10px',
            fontWeight: 'bold',
            fontFamily: 'Yomogi, sans-serif'
          }}
        >
        Emma Rose Vonbuelow
        </Typography>
        {/* Additional component below the text */}
        <Box mt={4}>
          {/* Replace with your custom component */}
          <Typography 
          variant="h6" 
          sx={{
            align: 'right',
            marginRight: '10px',
            fontWeight: 'bold',
            fontFamily: 'Yomogi, sans-serif'
          }}
        >
        hey, welcome to my super cool site. here are all things me...<br/><br/> or at least what i care to share without getting my data stolen. stay safe and have fun! 
        </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;

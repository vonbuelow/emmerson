import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import MainContent from '../components/MainContent';
import BottomContent from '../components/BottomContent';
import FunImage from '../components/FunImage';

const MainPage = () => {
  return (
    <Container>
      <MainContent
        imageSrc="./Images/LeftJelly.png"
        imageAlt="Taller Image"
        title="Emma Rose Vonbuelow"
        description="hey, welcome to my super cool site. here are all things me... or at least what i care to share without getting my data stolen. stay safe and have fun!"
      />
      <BottomContent
        imageSrc="./Images/RightJelly.png"
        imageAlt="Shorter Image"
        title="Emma Rose Vonbuelow"
        description="oh- well this is awkward. i guess i should have some more content, come back soon!"
       />
       <FunImage 
        src="./Images/Selfie.png" 
        alt="Fun Centered Image" 
      />
    </Container>
  );
};

export default MainPage;

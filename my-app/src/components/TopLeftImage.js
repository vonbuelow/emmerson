import React from 'react';
import '../styles/TopLeftImage.css'; // Import the CSS file for styling

const TopLeftImage = ({ imageUrl, altText }) => {
  return (
    <div className="top-left-container">
      <img src={imageUrl} alt={altText} className="top-left-image" />
    </div>
  );
};

export default TopLeftImage;
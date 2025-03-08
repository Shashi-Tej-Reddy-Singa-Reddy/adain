import React from 'react';
import backgroundImage from './1.jpeg'; // Import the image

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: 'contain', // This ensures the image fits inside the container without distortion
        backgroundPosition: 'center', // Keep the image centered
        backgroundRepeat: 'no-repeat', // Prevents repeating the image
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Color for text
        textAlign: 'center',
        margin: 0, // Prevents body margin from affecting layout
      }}
    >
     
    </div>
  );
}

export default Home;

// Home.js
import React from 'react';


const homeStyles = {
  homeContainer: {
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
  },
  mainHeading: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '16px',
  },
  subHeading: {
    color: '#666',
    fontSize: '18px',
    textAlign: 'center',
  },
};

const Home = () => {
  return (
   <div>
          
            <center><h1 style={homeStyles.mainHeading}>
              WELCOME TO COUNSELLING AND VISITING MANAGEMENT SYSTEM
            </h1>
            </center>
            <p style={homeStyles.subHeading}>Explore and discover amazing things!</p>
          

        {/* Grid of product cards */}
        </div>
  );
  
};

export default Home;
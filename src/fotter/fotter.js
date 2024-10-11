import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h1 style={styles.heading}>Since 2024. All rights reserved.</h1>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    padding: '20px',
    textAlign: 'center',    
    maxWidth: '100%',
    color: 'white',
  },
  heading: {
    margin: 0,
    fontSize: '18px',
  },
};

export default Footer;

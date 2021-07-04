import React from 'react';

let currentYear = new Date().getFullYear();

const Footer = () => {
  return(
    <footer>
      <p>Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer;

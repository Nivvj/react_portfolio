import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="colonne">
        <h3>Contacts</h3>
        <p>Vous pouvez me contacter par :</p>
        <p>- Mail : <a href="mailto:nivethavijay.pro@gmail.com">nivethavijay.pro@gmail.com</a></p>
        <p>- Linkedin : <a href="https://www.linkedin.com/in/nivetha-vijayatharan-2652b6257/">Nivetha Vijayatharan</a></p>
      </div>
      <div className="colonne2">
        <img id="fst-img" src="./pictures/logoUSPN.png" alt="Université Sorbonne Paris Nord" />
      </div>
      <div className="colonne3">
        <img id="snd-img" src="./pictures/Institut-Galilee.png" alt="Institut Galilée" />
      </div>
    </footer>
  );
};

export default Footer;

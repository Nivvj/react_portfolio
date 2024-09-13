import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="profile">
        <img src="/pictures/images.jpeg" alt="Photo de profil" />
        <h1>Nivetha Vijayatharan</h1>
      </div>
      <ul>
        <li><a href="#mes_projets">Mes projets</a></li>
        <li><a href="./cv_pdf">Curriculum Vitae</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

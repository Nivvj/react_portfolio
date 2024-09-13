import React from 'react';

const Project = ({ title, description, link, dates }) => {
  return (
    <div className="project">
      <h4>{title}</h4>
      <p>{description}</p>
      {link && (
        <p>
          Lien du projet : <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </p>
      )}
      <p className="dates">Dates : {dates}</p>
    </div>
  );
};

export default Project;

import React from 'react';
import '../styles/CollaboratorCard.css';

const CollaboratorCard = ({ name, affiliation, image }) => {
  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="affiliation">{affiliation}</p>
      </div>
    </div>
  );
};

export default CollaboratorCard;


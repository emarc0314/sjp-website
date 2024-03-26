import React from 'react';
import '../styles/EventPoster.css';

const EventPoster = ({ name, image, description, location, date }) => {
  return (
    <div class="poster">
      <div class="image">
        <img src={image} />
        <div class="event-details">
          <h3>{name}</h3>
          <p className="description">{description}</p>
          <p>{location}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPoster
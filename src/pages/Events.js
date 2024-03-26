import React from 'react';
import '../styles/Events.css';
import '../images/event1.png';
import '../images/event2.png';
import '../images/event3.png';
import EventPoster from '../components/EventPoster';

export default function Events() {
  let im1 = require('../images/event1.png')
  let im2 = require('../images/event2.png')
  let im3 = require('../images/event3.png')

  return (
    <div className="page">
      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23E67C73&showTitle=0&src=Y19lMDQ4YmE2YTYwMmNkNzZlMTliYTk2OTZmYTRhMmE5YmRmMmU0NDdhYjEwOTNhYTE1YTU5MzFiNDcyMTYyOTQzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB"
      ></iframe>
      <div className="posters-container">
        <div className="posters">
          <EventPoster
            name="G-Body Meeting"
            image={im1}
            description="Second G-Body of 2024"
            location="Rockefeller 230"
            date="March 7 @ 5PM"
          />
          <EventPoster
            name="Keffiyeh Thursday"
            image={im2}
            description="Wear your keffiyeh or red, green, and black/white"
            location=""
            date="Every Thursday"
          />
          <EventPoster
            name="Students for Justice in Palestine"
            image={im3}
            description="Second G-Body of 24 Baby"
            location="Duffield Hall"
            date="March 12 @ 10:41"
          />
          <EventPoster
            name="G-Body Meeting"
            image={im1}
            description="Second G-Body of 2024"
            location="Rockefeller 230"
            date="March 7 @ 5PM"
          />
          <EventPoster
            name="Keffiyeh Thursday"
            image={im2}
            description="Wear your keffiyeh or red, green, and black/white"
            location=""
            date="Every Thursday"
          />
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import '../styles/Events.css';
import '../images/event1.png';
import '../images/event2.png';
import '../images/event3.png';
import EventPoster from '../components/EventPoster';

export default function Events() {
  let im1 = require('../images/event1.png')
  let im3 = require('../images/event3.png')
  let im4 = require('../images/event4.jpg')
  let im5 = require('../images/event5.jpg')
  let im6 = require('../images/event6.jpg')
  let im7 = require('../images/event7.jpg')

  return (
    <div className="page">
      <iframe
        className="calendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23E67C73&title=CML%20Events%20Calendar&src=cHJvZ3JhbW1pbmcuY21sQGdtYWlsLmNvbQ&color=%23D50000">
      </iframe>
      <div className="posters-container">
        <div className="posters">
          <EventPoster
            name="Tatreez Workshop"
            image={im7}
            description="Palestinian embroidery with Eman Toom"
            location="Sibley Dome"
            date="April 27 @ 3:30PM"
          />
          <EventPoster
            name="A History of Palestinian Resistance"
            image={im6}
            description="A teach-in with Professor Bikrum Gill"
            location="Olin 165"
            date="April 26 @ 5PM"
          />
          <EventPoster
            name="What the Worlds Silence Says"
            image={im5}
            description="A Evening with Gazan Poet Yahya Ashour"
            location="Klarman Auditorium KG70"
            date="April 22 @ 4:30PM"
          />
          <EventPoster
            name="Persisting Struggles of Women in Palestine and Latin America"
            image={im4}
            description="Teach-in delving into the enduring struggles faced by Palestinian and Latin American women"
            location="626 Thurston Ave"
            date="April 15 @ 6PM"
          />
          <EventPoster
            name="G-Body Meeting"
            image={im1}
            description="Second G-Body of 2024"
            location="Rockefeller 230"
            date="March 7 @ 5PM"
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
        </div>
      </div>
    </div >
  );
}


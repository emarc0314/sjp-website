import React, { useState } from 'react';
import '../styles/Home.css'

import CollaboratorCard from '../components/CollaboratorCard'

import Carousel from '../components/Carousel';
import c1 from '../images/carousel1.JPG'
import c2 from '../images/carousel2.JPG'
import c3 from '../images/carousel3.JPG'

export default function Home() {
  return <div className="home">

    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require('../images/logo.png')} ></img>
      </div>
      <h1 className="SJP"> Students for Justice in Palestine at Cornell</h1>
    </div>

    <div className="middle">
      <div className="image-container">
        <Carousel pics={[c1, c2, c3]}></Carousel>
      </div>
      <div className="about-us">
        <h1 className="titles"> About Us</h1>
        <div className="text-box" >
          <p className="about-us-text"> Cornell Students for Justice in Palestine is a registered student activism organization that advocates for freedom, justice, and equality in Palestine. Our focus is to promote an understanding of the Palestinian struggle on-campus through educational events that raise awareness and critical discussions of the Occupation of Palestine within the settler-colonial state of Israel. We host events such as teach-ins, rallies, and cultural events to develop an intersectional movement focused on the Palestinian struggle for self-determination. We are open to all students interested in learning about and supporting Palestinian human rights.</p>
          <p className="about-us-text">Cornell SJP is also a member organization of the Ithaca-based Coalition for Mutual Liberation, a group of over 90 organizations that educate, empower, and organize the community to fight against imperialism, settler colonialism, and other forms of oppression. </p>
        </div>
      </div>
    </div>

    <div className="under-middle">
      <div className="get-involved">
        <h1 className="titles" > Get Involved</h1>
        <div className="buttons">
          <a className="button" href="https://www.instagram.com/sjp.atcornell?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Students</a>
          <a href="mailto:sjpcornell@gmail.com" className="button">Press</a>
        </div>
      </div>
    </div>

    <div className="bottom">
      <div className="collaborators">
        <h1 className="titles" > Collaborators</h1>
        <h5 className="collaborators-subtext"> Valued Partnerships</h5>
        <div cards>
          <div className="rows">
            <CollaboratorCard
              name="Arab Student Association"
              affiliation="Student Organization"
              image={require("../images/ASA.png")}
            />
            <CollaboratorCard
              name="Jewish Voice for Peace"
              affiliation="Student Organization"
              image={require("../images/JVP.png")}
            />
          </div >
          <div className="rows">
            <CollaboratorCard
              name="Native American Indigenous Students at Cornell"
              affiliation="Student Organization"
              image={require("../images/NAISAC.png")}
            />
            <CollaboratorCard
              name="Arab Graduate Student Association"
              affiliation="Student Organization"
              image={require("../images/AGSA.png")}
            />
          </div >
        </div>
      </div>
    </div>

  </div>
}

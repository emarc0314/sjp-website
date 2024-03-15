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
        <p className="about-us-text"> We are a committed collective of students deeply concerned with the ongoing humanitarian crisis and systematic oppression faced by the Palestinian people, which we recognize as a mass genocide. Our solemn mission is to shed light on the stark realities of this genocide, perpetrated through decades of occupation, apartheid policies, and violence against Palestinian communities. Through rigorous advocacy, education, and solidarity actions, we aim to confront the injustices inflicted upon Palestinians, demand accountability from perpetrators, and advocate for urgent international intervention to halt the genocide and ensure the realization of Palestinian rights to self-determination, justice, and freedom. Join us in our solemn commitment to bearing witness, amplifying Palestinian voices, and mobilizing for meaningful change in solidarity with the victims of this ongoing tragedy.</p>
      </div>
    </div>

    <div className="under-middle">
      <div className="get-involved">
        <h1 className="titles" > Get Involved</h1>
        <div className="buttons">
          <a href="https://monkeytype.com/" className="button">Students</a>
          <a href="https://newcp.net/" className="button">Press</a>
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
              name="Students for Justice in Palestine"
              affiliation="Student Organization"
              image={require("../images/logo.png")}
            />
            <CollaboratorCard
              name="Students for Justice in Palestine"
              affiliation="Student Organization"
              image={require("../images/logo.png")}
            />
          </div >
          <div className="rows">
            <CollaboratorCard
              name="Students for Justice in Palestine"
              affiliation="Student Organization"
              image={require("../images/logo.png")}
            />
            <CollaboratorCard
              name="Students for Justice in Palestine"
              affiliation="Student Organization"
              image={require("../images/logo.png")}
            />
          </div >
        </div>
      </div>
    </div>

  </div>
}

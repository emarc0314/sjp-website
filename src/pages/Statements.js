import React, { Component } from 'react'
import '../styles/Statements.css'
import statementImg from '../images/statement_img.jpg';
import statement2 from '../images/statement2.jpeg';
import statement3 from '../images/statement3.JPG';
import statement4 from '../images/statement4.jpeg';
import statement5 from '../images/statement5.jpg';
import statement6 from '../images/carousel3.JPG';
import statement7 from '../images/muslimrights.webp';

import StatementCard from '../components/StatementCard';


let sheetID = "1VDvusxn9pGVGmO-gyOIVjMeZFGnH3YEhE5r-C_jQ8zw"
let sheetTitle = "sjp-statements"
//SHEET_RANGE might have to be changed if we ever have >30 events, but probably not
let sheetRange = 'A2:O37'
let fullURL = ("https://docs.google.com/spreadsheets/d/" + sheetID + '/gviz/tq?sheet=' + sheetTitle + '&range=' + sheetRange);


class Statements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statements: []
    };
  }

  getStatementDate = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dateString = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
    return dateString //Tuesday February 12 2013
  }

  componentDidMount() {
    fetch(fullURL)
      .then(res => res.text())
      .then(rep => {
        // figure out why 47, 0, -2 here 
        // its from some tutorial but it basicially gets you each row 
        // and it's information which we use below

        let data = JSON.parse(rep.substring(47).slice(0, -2));
        let activeRows = data.table.rows.length;
        // console.log(activeRows)

        let statements = []

        for (let i = 0; i < activeRows; i++) {
          let coverURL = data.table.rows[i].c[1].v
          let date = data.table.rows[i].c[2].f
          let title = data.table.rows[i].c[3].v
          let blurb = data.table.rows[i].c[4].v
          let body = data.table.rows[i].c[5].v

          let statementDate = this.getStatementDate(new Date(Date.parse(date)))
          let id = coverURL.split('=')[1];
          let cover_image = "https://drive.google.com/uc?export=view&id=" + id
          console.log(cover_image)

          let statement = {
            cover: cover_image,
            date: statementDate,
            title: title,
            blurb: blurb,
            body: body
          }

          statements.push(statement)
        }

        this.setState({
          statements: statements
        })
      })
  }

  // function Statements(props) {

  render() {


    return (
      <div className="statement-page">
        {/* <div className="grid-container">

          {this.state.statements.sort((a, b) => a.date - b.date).map(statement =>
            <div className="grid-item" onClick={() => this.handleCardClick(statement)}>
              <img src={statement.cover}>
              </img>
            </div>
          )}
        </div> */}
        <div className="statement-row">
          <StatementCard image={statement7} date="March 20, 2024" title="Standing Strong: Rallying Around Targeted Muslim Students" blurb="Amidst a series of targeted attacks and provocations against Muslim and Arab students, Cornellians unite in unwavering support for a freshman Muslim sister who was recently spat at, highlighting the urgent need for Cornell to address systemic safety concerns for marginalized communities." />
          <StatementCard image={statement6} date="October 30, 2023" title="United Against Hate: Cornell's Coalition Stands in Solidarity" blurb="We, a coalition of Cornell student organizations, unequivocally condemn recent anti-Semitic and Islamophobic acts, calling for university action to ensure safety and uphold the values of inclusivity and mutual respect." />
        </div>
        <div className="statement-row">
          <StatementCard image={statement5} date="October 18, 2023" title="Calling for Ethical Reflection and Action Amidst Gaza Crisis" blurb="In a heartfelt plea, Cornellians invoke the historical context of Indigenous rights to spotlight the urgent need for ethical action and dialogue in addressing the Palestinian crisis in Gaza, urging the community to embrace principles of justice and equitable futures." />
          <StatementCard image={statement4} date="October 10, 2023" title="A Call for Justice: Speaking Out on Recent Tragedies" blurb="In light of recent devastating events, we urge an end to violence and the systemic oppression faced by Palestinians, advocating for human rights and calling on Cornell to sever ties with entities supporting Israel’s military actions" />
        </div>
        <div className="statement-row">
          <StatementCard image={statement2} date="March 6, 2022" title="Call to Withhold Participation in Amos Yadlin’s HKS Study Group" blurb="We strongly urge all accepted students to turn down their spot for MEI Senior Fellow Amos Yadlin’s Spring 2022 Study Group, entitled 'Israeli National Security in a Shifting Middle East: Historical and Strategic Perspectives for an Uncertain Future.'" />
          <StatementCard image={statement3} date="December 1, 2017" title="Cornell Community Denounces Collaboration with Technion University" blurb="We, representing various Cornell student groups such as Students for Justice in Palestine and Amnesty International, stand united in our opposition to Cornell Tech's partnership with Technion University, citing grave concerns of complicity in war crimes and human rights violations in Palestine." />
        </div>
        <div className="individual">
          <StatementCard image={statementImg} date="November 1, 2013" title="We Stand Against Campus Closures: Support for Morales/Shakur Center at CCNY" blurb="We condemn the closure of the Guillermo Morales/Assata Shakur Student and Community Center at City College of New York and stand in solidarity with student organizers and the Harlem community." />
        </div>
      </div>
    );

    //THIS is where we do componenet did mount stuff
  }
}

export default Statements;

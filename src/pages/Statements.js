import React, { Component } from 'react'
import '../styles/Statements.css'

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
        <h1> statements</h1>
        <div className="grid-container">

          {this.state.statements.sort((a, b) => a.date - b.date).map(statement =>
            <div className="grid-item" onClick={() => this.handleCardClick(statement)}>
              <img src={statement.cover}>
              </img>
            </div>
          )}
        </div>
      </div>
    );

    //THIS is where we do componenet did mount stuff
  }
}

export default Statements;

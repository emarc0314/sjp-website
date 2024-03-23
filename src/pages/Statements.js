import React, { Component } from 'react'
import '../styles/Statements.css'
import StatementCard from '../components/StatementCard';

function Statements(props) {
  return (
    <div className="statement-page">
      <h1> statements</h1>
      <div className="grid-container">
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
        <div className="grid-item">
          <StatementCard></StatementCard>
        </div>
      </div>
    </div>
  )

  //THIS is where we do componenet did mount stuff
}

export default Statements;
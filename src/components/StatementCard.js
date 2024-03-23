import '../styles/Statements.css'
import statementImg from '../images/statement_img.jpg';
import React, { Component } from 'react'

// export default function StatementCard() {

class StatementCard extends Component {

    state = { clicked: false }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    }
    //convert HREF from title from sheets into all lowercase??
    //lowercase, then replace each space with - and make it a HREF
    //to be given that tho i'm going to need to take in some props

    render(props) {
        return (
            <div className="statement-card">
                <img src={statementImg} className="card-image"></img>
                <div className="card-date">February 6, 2022</div>
                <div className="card-title">Call to Withhold Participation in Amos Yadlin’s HKS Study Group
                </div>
                <div className="card-body">We strongly urge all accepted students to turn down their spot for MEI Senior 
                Fellow Amos Yadlin’s Spring 2022 Study Group, entitled “Israeli National Security in a Shifting Middle East: 
                Historical and Strategic Perspectives for an Uncertain Future.”</div>
                <br></br>

           
                <CustomLink href="/statements/detail">READ MORE →</CustomLink>
            </div>
        );
    }
}

export default StatementCard

function CustomLink({ href, children, ...props }) {  
    return (

        <a href={href} {...props}>
            <div className="card-read-more-button" href="/statements/detail">READ MORE →</div>
        </a>
    )
  }
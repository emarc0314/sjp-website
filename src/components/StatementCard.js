import '../styles/StatementCard.css'
import React from 'react'

function slugify(text) {
    return text.toLowerCase().replace(/[\s\W-]+/g, '-');
}


// https://docs.google.com/spreadsheets/d/1VDvusxn9pGVGmO-gyOIVjMeZFGnH3YEhE5r-C_jQ8zw/edit?resourcekey#gid=1991449905


const StatementCard = ({ image, date, title, blurb }) => {

    let state = { clicked: false }

    const handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    const statementSlug = slugify(title);
    //convert HREF from title from sheets into all lowercase??
    //lowercase, then replace each space with - and make it a HREF
    //to be given that tho i'm going to need to take in some props

    return (
        <div className="statement-card">
            <img src={image} alt="Statement" className="card-image" />
            <div className="card-date">{date}</div>
            <div className="card-title">{title}</div>
            <div className="card-body">{blurb}</div>
            <br />
            <a href={`/statements/${statementSlug}`} style={{ color: "#e58174" }}>READ MORE →</a>
        </div>
    );
}

export default StatementCard

function CustomLink({ href, children, ...props }) {
    return (
        //how to pass information from here to statementDetailpage
        <a href={href} {...props}>
            <div className="card-read-more-button" href="/statements/details">READ MORE →</div>
        </a>
    )
}
import React, { Component } from 'react'
import '../styles/Navbar.css'

class Navbar extends Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render(props) {
    return <nav className="nav">
      <div className="menu-icon" onClick={this.handleClick}>

      </div>
      <div className={this.state.clicked ? "nav-container active" : "nav-container"}>
        <ul className="nav-menu">
          <CustomLink href="/">HOME</CustomLink>
          <CustomLink href="/events">EVENTS</CustomLink>
          <CustomLink href="/statements">STATEMENTS</CustomLink>
          <CustomLink href="/contact">CONTACT</CustomLink>
          <CustomLink href="/archives">ARCHIVES</CustomLink>
        </ul>
      </div>
    </nav>
  }
}

export default Navbar

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname

  return (
    <li className={path == href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}

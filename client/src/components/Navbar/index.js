import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./style.css"

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)

  }

  render() {
    const loginRegLink = (
      <div className="navbar-nav " >
        <div className="nav-item">
          <Link to="/login" className="nav-link" >
            <span class="glyphicon glyphicon-log-in"></span> Login
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/register" className="nav-link">
            <span class="glyphicon glyphicon-user"></span> Register
          </Link>
        </div>
      </div>
    )


    const userLink = (
      <div className="navbar-nav" >
        <div className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/resource" className="nav-link">
            Resources
          </Link>
        </div>

        <div className="nav-item">
          <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </div>
      </div>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">

        <div to="/" className="navbar-brand">
          <img src="../logo11.png" alt="logo" id="logo" />
        </div>

        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse "
          id="navbarsExample10"
        >
          <div id="links">
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>

        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
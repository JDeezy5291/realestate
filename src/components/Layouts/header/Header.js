import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  componentDidMount() {
    fetch(
      "https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": "69eba11a69msha705dde574ada95p1dd22djsn0b1f0989d269"
        }
      }
    )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="header-hero-container">
        <header>
          <div className="flex container">
            <a id="logo" href="#">
              PROPERTY MOVER
            </a>
            <nav>
              <button id="nav-toggle" className="hamburger-menu">
                <span className="strip"></span>
                <span className="strip"></span>
                <span className="strip"></span>
              </button>

              <ul id="nav-menu">
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Properties</a>
                </li>
                <li>
                  <a href="#">Agents</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li id="close-flyout">
                  <span className="fas fa-times"></span>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section id="hero">
          <div className="fade"></div>
          <div className="hero-text">
            <h1>Reimagine Home</h1>
            {/* <p>Lorem ipsum dolor sit amet consectectur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Header;

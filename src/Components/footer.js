import React from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons";


function Footer() {
  return (
    <div className="main-footer">
      <div className="contianer">
        <div className="row">
          <div className="column">
            <ul className="list">
              <h2>COMPANY</h2>
              <li> Who We Are</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Report Fruad</li>
              <li>Contact</li>
              <li>Financial information</li>
            </ul>
          </div>
          <div className="column">
            <ul className="list">
              <h2>FOR FOODIES</h2>
              <li> Code of Conducts</li>
              <li>Community</li>
              <li>Blogger Help</li>
              <li>Mobile Apps </li>
            </ul>
          </div>

          <div className="column">
            <ul className="list">
              <h2>FOR RESTAURANTS</h2>
              <li>Add Restaurant</li>
              <li>Business App</li>
              <li>Restaurant Widgets</li>
              <li>Products for Business</li>
            </ul>
          </div>

          <div className="column">
            <ul className="list">
              <h2>FOR YOU</h2>
              <li> Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="column">
            <ul className="list">
              <h2>SOCIAL LINKS</h2>
              <SocialIcon url="https://instagram.com" />
              <SocialIcon url="https://facebook.com" />
              <SocialIcon url="https://twitter.com" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

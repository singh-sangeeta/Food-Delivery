import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./home.css";


function Home() {
  return (
    <div className="nav">
     <div className="bg">
     <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src="food.jpeg" alt="logo" />
          </div>
          </ul>
          <ul className="nav-list">
          <div className="rightnav">
          <Link to="./Restaurant" className="main"><li>Add Restaurant</li></Link>
          <li>Log In</li>
          <li>Sign Up</li>
          </div>
        </ul>
      </nav>
      <div className="para">
        <h1> Food Delivery</h1>
        <div className="search">
          <input type="search" id="search" placeholder="search for the restaurant"/>
          </div>
      </div>

     </div>
      <div className="main-container">
      <div className=" hero-container">
      <Link to="/Order" className="main" >
        <img src="../images/cake.jpg" alt="cake" />
        <p className="text"> Order Food Online</p>
      </Link>
      </div>
      <div className="hero-container">
      <Link to="/Order" className="main" >
        <img src="../images/sandwich.jpg" alt="cake" />
      <p className="text"> Go Out For a Meal</p>
      </Link>
      </div>
      <div className="hero-container">
      <Link to="/Order" className="main" >
        <img src="../images/vernon.jpg" alt="cake" />
      <p className="text"> Nightlife & Clubs</p>
      </Link>
      </div>
      <div className="hero-container">
      <Link to="/Order" className="main" >
        <img src="../images/strawberry.jpg" alt="cake" />
      <p className="text"> Nutrition</p>
      </Link>
      </div>
    </div>


    <div className="Main">
      <div className="first">
        <h1> Collections</h1>
        </div>
        <div className="second">
        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</p>
      </div>
      <div className="one">
      <div className="third">
      <img src="../images/trend.jpg" alt="louis" />
        <h2 className="txt">Trending of this Week</h2>
      </div>
      <div className="third">
      <img src="../images/tajmahal.jpg" alt="louis" />
        <h2 className="txt">Best of Agra</h2>
      </div> <div className="third">
      <img src="../images/agra.jpg" alt="louis" />
        <h2 className="txt">Wah Taj!</h2>
      </div> <div className="third">
      <img src="../images/rest.jpg" alt="louis" />
        <h2 className="txt">All-Day Dining</h2>
      </div>
      </div>
    </div>



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

    </div>
  );
}

export default Home;

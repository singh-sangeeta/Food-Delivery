import React from "react";
import "./restaurant.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Restaurant() {
  return (
    <div className="rest">
      <div className="rest1">
        <nav className="nav-list">
          <ul>
            <div className="left-ul">
              <li>
                <h4> Food Delivery</h4>
              </li>
            </div>
          </ul>
          <ul>
            <div className="mid-ul">
              <li>Products</li>
              <li>Add a Restaurant</li>
             <Link to="./contact" className="main"> <li> Contacts us</li></Link>
            </div>
          </ul>
          <ul>
            <div className="right-ul">
            <Link to="/Order" className="main" >

              <li>
                <button className="b1"> login </button>
              </li></Link>
              <li>
                <button className="b2">create Account</button>
              </li>
            </div>
          </ul>
        </nav>
        <div className="rest2">
          <h3> Partner with Food Delivery</h3>
          <p> for free and get more customers!</p>
          <div className="rest3">
            <ul>
              <li>
                <button className="b2"> Register your restaurant</button>
              </li>
              <li>
                <button className="b1">
                  {" "}
                  Restaurant already listed? Claim now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rest4">
        <h1> Why should you partner with Food Delivery?</h1>
        <p>
          Food Delivery enables you to get 60% more revenue, 10x new customer
          and <br />
          boost your brand visibility by providing insight to improve your
          business.
        </p>
      </div>
      <div className="rest5">
        <div className="rest5A">
          <div className="rest5A1">
            <section className="box-container">
              <div className="rest5C">
                <div className="rest5D">
                  <img
                    src="https://b.zmtcdn.com/merchant-onboarding/d2bcadb70abdd99811cceda4cc757f5a1600670711.png"
                    alt="Busness Card"
                    className="rest5D1"
                  />
                  <div className="restE1">
                    <div className="rest5E2">500+ cities</div>
                    <div className="rest5E3">in India</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="rest5A1">
            <section className="box-container">
              <div className="rest5C">
                <div className="rest5D">
                  <img
                    src="https://b.zmtcdn.com/merchant-onboarding/77b29f40bd0fb6c74c78695b07cdee901600670728.png"
                    alt="Busness Card"
                    className="rest5D1"
                  />
                  <div className="restE1">
                    <div className="rest5E2">2.5 lakhs+</div>
                    <div className="rest5E3">restaurant listing</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="rest5A1">
            <section className="box-container">
              <div className="rest5C">
                <div className="rest5D">
                  <img
                    src="https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png"
                    alt="Busness Card"
                    className="rest5D1"
                  />
                  <div className="restE1">
                    <div className="rest5E2">4 crore +</div>
                    <div className="rest5E3">monthly orders</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="rest6">
        <div className="rest6A">
          <h1> How it Works? </h1>
        </div>
        <div className="rest6B">
          <div className="rest6B1">
            <div className="rest6B2">
              <img src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png" />
            </div>
            <div className="rest6B3">
              <h1> Step 1</h1>
            </div>
            <div className="rest6B4">
              <h3> Create your page on Food delivery</h3>
              <p>
                {" "}
                Help users discover your place by creating <br /> a listing on
                Food Delivery
              </p>
            </div>
          </div>
          <div className="rest6B1">
            <div className="rest6B2">
              <img src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png" />
            </div>
            <div className="rest6B3">
              <h1> Step 2</h1>
            </div>
            <div className="rest6B4">
              <h3> Register for online ordering</h3>
              <p>
                {" "}
                And deliver orders to millions of <br /> customers with ease
              </p>
            </div>
          </div>

          <div className="rest6B1">
            <div className="rest6B2">
              <img src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png" />
            </div>
            <div className="rest6B3">
              <h1> Step 3</h1>
            </div>
            <div className="rest6B4">
              <h3> Start recieving orders online </h3>
              <p>
                Manage orders on our partner app, <br /> web dashboard or API
                partn
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rest7">
        <div className="rest7A">
          <div className="rest7A1">
            <h1> Already have your restaurant listed?</h1>
            <p> search here and claim the ownership of your restaurant </p>
          </div>
          <div className="rest7A2">
            <input
              type="search"
              id="search"
              placeholder="search for your restaurant, eg Greenland cafe"
            />
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

export default Restaurant;

import React from "react";
import background from "./background.jpg";
import "./order.css";
import ScrollArea from "react-scrollbar";
import SearchField from "react-search-field";
import { SocialIcon } from "react-social-icons";

function Order() {
  return (
    <div className="wrapper">
      <div className="cont1">
        <div className="cont1A">
          <ul>
            <li>
              <h1>Food Delivery</h1>
            </li>
          </ul>
        </div>
        <div className="cont1B">
          <ul>
            <li>
              <SearchField placeholder="Search..." className="test-class" />
            </li>
          </ul>
        </div>
        <div className="cont1C">
          <ul>
            <li> Log in </li>
            <li> Sign in</li>
          </ul>
        </div>
      </div>
      <hr className="solids" />
      <div className="gallery">
        <div className="header">
          <img src="../images/cake.jpg" alt="cake" />
          <h1> Chocolate Cake</h1>
          <p> desert food </p>
        </div>
        <div className="HEADER">
          <div className="header1">
            <img src="../images/noodel.jpeg" alt="cake" />
          </div>
          <div className="header2">
            <img src="../images/soya.jpg" alt="cake" />
            <img src="../images/farhad.jpg" alt="cake" />
          </div>
        </div>
      </div>

      <div className="test">
        <button> Add Review</button>
        <button> Direction </button>
        <button> Bookmark </button>
        <button> Share </button>
      </div>
      <div className="test1">
        <ul>
          <li> Overview </li>
          <li> Order Online </li>
          <li> Reviews</li>
          <li> Photos </li>
        </ul>
      </div>
      <hr className="dotted" />

      <div className="test2">
        <div className="sidebar">
          <ul>
            <li>Recommended (4)</li>
            <li>Combos (8)</li>
            <li>Thali (2)</li>
            <li>Main Course(15)</li>
            <li>Starters(11)</li>
            <li>Breads(9)</li>
            <li>Rice and Biryani (6)</li>
            <li>Fried Rice and Noodles (6)</li>
            <li>Snacks (3)</li>
            <li>Dessert (1)</li>
            <li>Soft Drinks (4)</li>
          </ul>
        </div>
        <hr />
        <ScrollArea>
          <div className="rows">
            <h1 className="head">Recommended</h1>
            <div className="column">
              <div className="column-1">
                <img className="image" src={background} alt="background" />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/cake.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/noodel.jpeg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/soya.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <hr className="solid" />
            <h1 className="head">Combos</h1>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/farhad.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/sandwich.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/vernon.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/unsplash.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/trend.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>{" "}
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/strawberry.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/anastasia.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/louis.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <hr className="solid" />
            <h1 className="head">Thali</h1>
            <div className="column">
              <div className="column-1">
                <img
                  className="image"
                  src="../images/resty.jpg"
                  alt="background"
                />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
            <div className="column">
              <div className="column-1">
                <img className="image" src={background} alt="background" />
              </div>
              <div className="column-2">
                <button className="btn btn-sm">add</button>
              </div>
            </div>
          </div>
        </ScrollArea>
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
export default Order;

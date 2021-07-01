import React from "react";
import { useState } from "react";
import "./contact.css";
import SearchField from "react-search-field";
import { SocialIcon } from "react-social-icons";

function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [fullNameErr,setFullNameErr] = useState({});
  const [emailErr,setEmailErr] = useState({});
  const [mobileNoErr,setMobileNoErr] = useState({});


  const onSubmit = (e) => {
    e.preventDefault();
    const isvalid = formvalidation();
  }

  const formvalidation = () =>{
      const fullNameErr = {};
      const emailErr = {};
      const mobileNoErr = {};
      let isvalid = true;

      if(fullName.trim().trimlength>25){
          fullNameErr.fullNameLong = "Full name is too long";
          isvalid = false;
      }
      if(fullName.trim().trimlength>25){
        fullNameErr.fullNameLong = "Full name is too long";
        isvalid = false;
    } 
    if(mobileNo.trim().trimlength<=10){
        mobileNoErr.fullNameLong = "mobileno is incorrect";
        isvalid = false;
    }
    setFullNameErr(fullNameErr);
    setEmailErr(emailErr);
    setMobileNoErr(mobileNoErr);
    return isvalid;
}

  return (
    <div className="cont">
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
      <div className="cont2">
        <div className="cont2A">
          <img src="../images/strawberry.jpg" alt="anastasia" />
          <h1> We would love to hear from you</h1>
        </div>
      </div>

      

      <div className="form">
      <div className="form1">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Full Name*" value={fullName} 
           onChange={(e)=>{setFullName(e.target.value)}}

          />
          <br/>
            {Object.keys(fullNameErr).map((key)=>{
                return<div style={{color : "red"}}>{fullNameErr[key]}</div>
                })}
          <input
            type="email"
            placeholder="Email Address*"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <br/>
            {Object.keys(fullNameErr).map((key)=>{
                return<div style={{color : "red"}}>{fullNameErr[key]}</div>
                })}
          <input
            type="mobile no"
            placeholder="Mobile Number (optional)"
            value={mobileNo}
            onChange={(e)=>{setMobileNo(e.target.value)}}

          />
          <br/>
            {Object.keys(mobileNoErr).map((key)=>{
                return<div style={{color : "red"}}>{mobileNoErr[key]}</div>
                })}
          <textarea rows="7" tabindex="1" placeholder="type text" />
          <button type="submit"> Submit feedback</button>
        </form>
      </div>
      <div className="formA">
        <div className="form2">
          <div className="form2A">
            <div className="form2B">
              <h2> Report a Safety Emergency</h2>
            </div>
            <div className="form2C">
              <p>
                We are committed to the safety of <br /> everyone using Food
                Delivery
              </p>
              <h4> Report here</h4>
            </div>
          </div>
        </div>
        <div className="form2">
          <div className="form2A">
            <div className="form2B">
              <h2> Issue With your live Order?</h2>
            </div>
            <div className="form2C">
              <p>
                Click on the 'Support' or 'Online <br /> ordering help' section
                in your app to
                <br />
                connect to our customer support <br />
                team
              </p>
            </div>
          </div>
        </div>

        <div className="form2">
          <div className="form2A">
            <div className="form2B">
              <h2> Issue With Food Delivery Order?</h2>
            </div>
            <div className="form2C">
              <p>
                Click on the 'pro help' section in your <br /> app to connect to
                our pro support
                <br />
                team
              </p>
            </div>
          </div>
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

export default Contact;

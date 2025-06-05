"use client";

import React from "react";
import "./sign-style.css";

export default function SignUpPage() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">
          <img className="box-img1" src="/logo.jpg" alt="Company Logo" />
        </div>
        <div className="side-img">
          <img className="box-img2" src="/side-img.jpg" alt="Side Illustration" />
        </div>
      </div>

      <div className="right-panel">
        <div className="login-info">
          <div className="tab-menu">
            <ul>
              <li>
                <a href="#" className="tab">Log in</a>
              </li>
              <li>
                <a href="#" className="tab active">Sign up</a>
              </li>
            </ul>
          </div>

          <form className="form">
            <p>Join our sustainable marketplace as a buyer or seller</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Phone" />
            <input type="text" placeholder="Join As: Customer,Raddi wala,Company" />
          </form>
        </div>

        <div className="login-buttons">
          <button className="reg">Register</button>
          <button className="sign">Have account? Sign In</button>
        </div>
      </div>
    </div>
  );
}

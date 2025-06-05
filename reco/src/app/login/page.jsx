"use client";
import React from "react";
import Image from "next/image";
import "./login-style.css"; // make sure this path is correct in your project

export default function LoginPage() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">
          <Image className="box-img1" src="/logo.jpg" alt="logo" width={250} height={300} />
        </div>
        <div className="side-img">
          <Image className="box-img2" src="/side-img.jpg" alt="side-img" width={500} height={500} />
        </div>
      </div>

      <div className="right-panel">
        <div className="login-info">
          <div className="tab-menu">
            <ul>
              <li><a href="#" className="tab active">Log in</a></li>
              <li><a href="#" className="tab">Sign up</a></li>
            </ul>
          </div>
          <form className="login-form">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" className="center" defaultValue="contact@dscodetech.com" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="error center" />

            <div className="form-footer">
              <span className="error-message">Wrong password</span>
              <a href="#" className="forgot-link footer">Forgot password?</a>
            </div>

            <button type="submit" className="continue-btn">Continue</button>
          </form>
        </div>

        <div className="login-buttons">
          <button className="apple-button">Login with Apple</button>
          <button className="google-button">Login with Google</button>
          <div className="signup-text">
            Don&apos;t have an account? <a className="footer" href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

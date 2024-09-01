import React, { useState } from "react";
import "./CSS/LoginSignup.css"


  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you'd normally send the formData to your backend for processing
  //   console.log('Form submitted:', formData); 
  // };

  const LoginSignup = () => {
      return (
        <div className="login-container">
      <div className="login-section">
        <h2 className="subtext">LOG IN TO YOUR ACCOUNT</h2>
        <form style={{display:"block"}}>
          <div className="form-group">
            <label className="subtext" htmlFor="email">E-MAIL</label>
            <input type="email" id="login-email" />
          </div>
          <div className="form-group">
            <label className="subtext" htmlFor="password">PASSWORD</label>
            <input type="email" id="login-password" />
          </div>
          <button type="submit" style={{textAlign:"center"}} className="subtext login-button">LOG IN</button>
          <a href="" className="forgot-password">Have you forgotten your password?</a>
        </form>
      </div>
      <div className="register-section">
        <h2 className="subtext">NEED AN ACCOUNT?</h2>
        <button style={{textAlign:"center"}} className="subtext register-button">REGISTER</button>
      </div>
    </div>
      );
}

export default LoginSignup

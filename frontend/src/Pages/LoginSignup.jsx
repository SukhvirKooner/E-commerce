import React, { useState } from "react";
import "./CSS/LoginSignup.css"


  

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you'd normally send the formData to your backend for processing
  //   console.log('Form submitted:', formData); 
  // };

  const LoginSignup = () => {
    const [state,setState] = useState("LOG IN TO YOUR ACCOUNT");
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const login = async ()=>{
      console.log("login exicuted",formData);
      let responseData;
      await fetch('http://localhost:4000/login',{
        method: 'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)
      if (responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }else{
        alert(responseData.errors)
      }
    }
    const signup = async () =>{
      console.log("signup exicuted",formData)
      let responseData;
      await fetch('http://localhost:4000/signup',{
        method: 'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)
      if (responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }else{
        alert(responseData.errors)
      }
    }
      return (
        <div className="login-container">
      <div className="login-section">
        <h2 className="subtext">{state}</h2>
        <form style={{display:"block"}}>
            {state==="PERSONAL DETAILS"?
              <div className="form-group">
                <label className="subtext" htmlFor="text">NAME</label>
                <input name="name" value={formData.name} onChange={handleChange} type="text" id="name" />
              </div>:<></>
            }
          <div className="form-group">
            <label className="subtext" htmlFor="email">E-MAIL</label>
            <input name="email" value={formData.email} onChange={handleChange} type="email" id="login-email" />
          </div>
          <div className="form-group">
            <label className="subtext" htmlFor="password">PASSWORD</label>
            <input name="password" value={formData.password} onChange={handleChange} type="email" id="login-password" />
          </div>
          {state==="LOG IN TO YOUR ACCOUNT"?
              <button onClick={()=>{login()}}  type="button" style={{textAlign:"center"}} className="subtext login-button">LOG IN</button>:
              <button onClick={()=>{signup()}} type="button" style={{textAlign:"center"}} className="subtext login-button">REGISTER</button>
            }
          
           
        </form>
      </div>
            {state==="LOG IN TO YOUR ACCOUNT"?
              <div className="register-section">
              <h2 className="subtext">NEED AN ACCOUNT?</h2>
              <button onClick={()=>{setState("PERSONAL DETAILS")}} setState style={{textAlign:"center"}} className="subtext register-button">REGISTER</button>
            </div>:<div className="register-section">
              <h2 className="subtext">ALREADY HAVE AN ACCOUNT?</h2>
              <button onClick={()=>{setState("LOG IN TO YOUR ACCOUNT")}} setState style={{textAlign:"center"}} className="subtext register-button">LOG IN</button>
            </div>
            }
    </div>
      );
}

export default LoginSignup

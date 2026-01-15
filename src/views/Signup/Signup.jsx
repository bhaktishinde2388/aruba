import React, { useState } from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs.jsx'
import Button from "../../components/Button/Button.jsx"
import { Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import { use } from 'react';

function Signup() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [gender, setGender] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError,setEmailError] = useState("")

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const signupValidation = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");

    let isValid = true;

    if (!nameRegex.test(name)) {
      setNameError("Enter a valid name (min 3 letters, alphabets only)");
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }

     if (isValid) {
      alert("Signup validation passed ✅");
    }
    
  }

  return (
    <div>Signup
      <form onSubmit={signupValidation}>
        <InputBoxs type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} error={nameError} />
        <InputBoxs type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} error={emailError}/>
        <InputBoxs type="number" placeholder="Enter Contact Number" />
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            /> Male
          </label>

          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            /> Female
          </label>
        </div>
        <InputBoxs type="password" placeholder="Enter password" />
        <InputBoxs type="password" placeholder="Confirm Password" />

        <Button type="submit" text="Signup" />
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">login on existing account</Link>
      </p>

    </div>

  )
}

export default Signup
import React, { useState } from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs.jsx'
import Button from "../../components/Button/Button.jsx"
import { Link , useNavigate} from 'react-router-dom';
import Login from '../Login/Login.jsx';
import "./Signup.css"
import toast from 'react-hot-toast';


function Signup() {

const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");


  const [nameError, setNameError] = useState("");
  const [emailError,setEmailError] = useState("");
  const [contactError,setContactError] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;



  const signupValidation = (e) => {
    e.preventDefault();  

    setNameError("");
    setEmailError("");
    setContactError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!nameRegex.test(name)) {
      setNameError("Enter a valid name (min 3 letters, alphabets only)");
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }
    if(!contactRegex.test(contact)){
      setContactError("Enter Valid contact number");
      isValid = false;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character." );
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords not match");
      isValid = false;
    }

    if (isValid) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // for check email already exists
      const isEmailTaken = existingUsers.some(user => user.email === email);
      if(isEmailTaken){
        setEmailError("This email is alreadyy registered");
        return;
        
      }

      // for new user
      const newUser = {
        name,
        email,
        contact,
        gender,
        password,
      };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

     toast.success("Signup successful!");
      
      navigate("/login");
    }

  }

  return (
    <div className="signup-conatiner">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={signupValidation}>
          <InputBoxs type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} error={nameError} />
          <InputBoxs type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} error={emailError}/>
          <InputBoxs type="text" placeholder="Enter Contact Number" value={contact}  onChange={(e)=>setContact(e.target.value)} error={contactError} />
          <div className="gender-conatiner">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>

            <label >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
          </div>
          <InputBoxs type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}error={passwordError}/>
          <InputBoxs type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}error={confirmPasswordError} />

          <Button type="submit" text="Signup" />
        </form>
      <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">login on existing account</Link>
        </p>

      </div>
    </div>

  )
}

export default Signup
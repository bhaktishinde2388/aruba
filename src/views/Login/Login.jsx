import React,{useState} from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const loginValidation = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;

       if (!emailRegex.test(email.trim())) {
      setEmailError("Enter a valid email address");
      isValid = false;
    }

    
    if (password.trim() === "") {
      setPasswordError("Password is requiredd");
      isValid = false;
    }

    if (isValid) {
      alert("Login validation passed");
      setEmail("");
      setPassword("");
     
    }
  }
  return (
     <div className="login-container">
    <div className="login-card">
      <h2 className="login-title">Welcome Back</h2>

      <form onSubmit={loginValidation}>
        <InputBoxs placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          error={emailError} />
        

        <InputBoxs placeholder="Password" type="password" value={password}onChange={(e) => setPassword(e.target.value)} error={passwordError}/>
       

        <Button type="submit"  text="Login" />
      </form>

     
       <p className="signup-link">
        Don’t have an account?{" "}
        <Link to="/signup">Create new account</Link>
      </p>
    </div>
    </div>
  )
}

export default Login
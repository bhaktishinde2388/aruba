import React,{useState} from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs'
import Button from '../../components/Button/Button'
import { Link , useNavigate} from 'react-router-dom'
import "./Login.css"
import toast from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();

   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const loginValidation = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoginError("");

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
       const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem("lastLoginUser", JSON.stringify(user));
       toast.success(`Login successful! Welcome, ${user.name}`);
      // setEmail("");
      // setPassword("");

      navigate("/home");

      } else {
        setLoginError("Invalid email or password");
      }
     
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
       
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
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
import React,{useState} from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs.jsx'
import Button from "../../components/Button/Button.jsx"
import { Link } from 'react-router-dom';
import Login from '../Login/Login.jsx';

function Signup() {
  const [gender, setGender] = useState("");
  return (
    <div>Signup
      <InputBoxs type="text" placeholder="Full Name"/>
      <InputBoxs type="email" placeholder="Enter Email"/>
      <InputBoxs type="number" placeholder="Enter Contact Number"/>
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
      <InputBoxs type="password" placeholder="Enter password"/>
      <InputBoxs type="password" placeholder="Confirm Password"/>
  
       <Button text="Signup"/>
       
    <p>
        Already have an account?{" "}
        <Link to="/login">login on existing account</Link>
      </p>
    </div>
    
  )
}

export default Signup
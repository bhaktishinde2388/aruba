import React from 'react'
import InputBoxs from '../../components/InputBoxs/InputBoxs'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

function Login() {
  return (
     <div className="container">
      <h2>Login</h2>

      <form >
        <InputBoxs placeholder="Email" type="email"  />
        

        <InputBoxs placeholder="Password" type="password"/>
       

        <Button text="Login" />
      </form>

     
       <p>
        Don’t have an account?{" "}
        <Link to="/signup">Create new account</Link>
      </p>
    </div>
  )
}

export default Login
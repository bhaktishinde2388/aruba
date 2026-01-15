import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import "./Home.css";

function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const lastLogin = JSON.parse(localStorage.getItem("lastLoginUser"));
    if (lastLogin) {
      setUserName(lastLogin.name);
    }
  }, []);

    const logout = () => {
    localStorage.removeItem("lastLoginUser");
    window.location.reload();
  };

  
  return (
<div className="home-container">
  <div className="home-card">

    <h2 className="home-title">
      {userName ? `Hello, ${userName} 👋` : "Welcome!"}
    </h2>

    <p className="home-subtitle">
      {userName ? "You are logged in successfully" : "Please login or create an account"}
    </p>

    <div className="home-buttons">
          {userName ? (
            <Button text="Logout" onClick={logout} />
          ) : (
            <>
              <Link to="/login">
                <Button text="Login" />
              </Link>
              <Link to="/signup">
                <Button text="Signup" />
              </Link>
            </>
      )}
    </div>

  </div>
</div>

  );
}

export default Home;

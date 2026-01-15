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

  return (
    <div className="home-container">
      <div className="home-card">
        {userName ? (
          <h2 className="greeting">Hello, {userName}! 👋</h2>
        ) : (
          <>
            <h2 className="home-title">Welcome!</h2>
            <div className="home-buttons">
              <Link to="/login">
                <Button text="Login" />
              </Link>
              <Link to="/signup">
                <Button text="Signup" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

import React,{useState} from 'react'
import Signup from './views/Signup/Signup.jsx'
import Login from './views/Login/Login.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  return (
     <>
      {currentPage === 'login' ? (
        <Login goToSignup={() => setCurrentPage('signup')} />
      ) : (
        <Signup goToLogin={() => setCurrentPage('login')} />
      )}
    </>
  )
}

export default App
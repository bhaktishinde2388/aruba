import { Routes, Route } from "react-router-dom";
import Signup from './views/Signup/Signup.jsx'
import Login from './views/Login/Login.jsx'
import Home from "./views/Home/Home.jsx";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
     <>
 <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Toaster position="top-center" />
    </>
  )
}

export default App
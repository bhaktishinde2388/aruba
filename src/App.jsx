import { Routes, Route } from "react-router-dom";
import Signup from './views/Signup/Signup.jsx'
import Login from './views/Login/Login.jsx'

function App() {
  return (
     <>
 <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
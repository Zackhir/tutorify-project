import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from "./pages/Home/Home";
import Lessons from "./Components/Lessons";
import FindTutors from "./Components/FindTutors";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/findtutors" element={<FindTutors />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MusicOutput from './pages/MusicOutput';
// import SuggestionsPage from "./pages/SuggestionsPage";
function App() {
  return (
    <div className=''>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<MusicOutput />} />
        {/* <Route path="/suggestions" element={<SuggestionsPage />} /> */}
      </Routes>
      </Router>
      </div>
  )
}

export default App

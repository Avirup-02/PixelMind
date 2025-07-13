import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
<<<<<<< HEAD
import MusicOutput from './pages/MusicOutput';
// import SuggestionsPage from "./pages/SuggestionsPage";
=======
import Upload from './pages/Upload';
>>>>>>> ed90746a554dfe66416ca063ca0dba063dbd8321
function App() {
  return (
    <div className=''>
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/music" element={<MusicOutput />} />
        {/* <Route path="/suggestions" element={<SuggestionsPage />} /> */}
=======
        <Route path="/upload" element={<Upload />} />
>>>>>>> ed90746a554dfe66416ca063ca0dba063dbd8321
      </Routes>
      </Router>
      </div>
  )
}

export default App

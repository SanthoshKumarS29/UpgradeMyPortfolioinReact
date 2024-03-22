import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import { Route,Routes} from "react-router-dom"
import "./App.css"
import Projects from "./components/Projects"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

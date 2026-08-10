import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import Vorma from './pages/casestudies/Vorma'
import Negar from './pages/casestudies/Negar'
import FarsRoboyar from './pages/casestudies/FarsRoboyar'
import CodeIntelligence from './pages/casestudies/CodeIntelligence'
import Rendanlab from './pages/casestudies/Rendanlab'
import HamidAbbasi from './pages/casestudies/HamidAbbasi'
import SBar from './pages/casestudies/SBar'
import Alpha from './pages/casestudies/Alpha'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div style={{ backgroundColor: '#111111', minHeight: '100vh', color: '#f0efed' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/vorma" element={<Vorma />} />
          <Route path="/projects/negar" element={<Negar />} />
          <Route path="/projects/fars-roboyar" element={<FarsRoboyar />} />
          <Route path="/projects/code-intelligence" element={<CodeIntelligence />} />
          <Route path="/projects/rendanlab" element={<Rendanlab />} />
          <Route path="/projects/hamid-abbasi" element={<HamidAbbasi />} />
          <Route path="/projects/s-bar" element={<SBar />} />
          <Route path="/projects/alpha" element={<Alpha />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

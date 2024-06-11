import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.tsx';
import Skills from './components/Skills/Skills.tsx';
import Experience from './components/Experience/Experience.tsx';
import Projects from './components/Projects/Projects.tsx';
import Contact from './components/Contact/Contact.tsx';
import Home from './components/About/Home.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div className="flex flex-col max-h-screen bg-gray-200">
      <BrowserRouter>
        <NavBar />
        <div className="h-screen flex max-w-screen justify-center items-center m-0 p-0 overflow-hidden ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
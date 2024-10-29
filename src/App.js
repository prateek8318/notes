import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import About from './components/AboutUs';
import Noteform from './components/Noteform';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Noteform />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
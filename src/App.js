import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import {Routes,Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
import Contact from './pages/Contact';

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
        console.log('i resizzed');
      }
    }
    window.addEventListener('resize',hideMenu)
    return() => {
      window.removeEventListener('resize',hideMenu)
    }
  })

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

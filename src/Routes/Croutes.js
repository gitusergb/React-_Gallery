import React from 'react'
import { Routes ,Route } from "react-router-dom";

import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import About from '../Components/About';

const Croutes = () => {
  return (
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/> }  /> 
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} /> 
        </Routes>
  )
}
export default Croutes




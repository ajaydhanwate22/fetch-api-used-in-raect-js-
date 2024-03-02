import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import HireDeveloper from './component/HireDeveloper';
import Blogs from './component/Blogs';
import Contact from './component/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <HireDeveloper />
      <Blogs />
      <Contact />
    </>
  )
}

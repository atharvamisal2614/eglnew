"use client";
import About from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import WhyChooseUs from "./Components/WhyChooseUs";
import { useState, useEffect } from 'react'

export default function Home() {
 
 
 
   const [isClient, setIsClient] = useState(false)
  
   useEffect(() => {
     setIsClient(true)
   }, [])
 
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <WhyChooseUs />
    </>
  );
}

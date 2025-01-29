"use client";
import About from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import TabsWithImages from "./Components/TabsWithImages";
import TestimonialSection from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";
import { useState, useEffect } from 'react'

export default function Home() {
   const [isClient, setIsClient] = useState(false)
   useEffect(() => {
     setIsClient(true)
   }, [])
 
  return (
    <>
      <Slider />
      <About />
      <WhyChooseUs />
      <TabsWithImages />
      <TestimonialSection />
    </>
  );
}

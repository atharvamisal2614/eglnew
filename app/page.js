import About from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
  
      <About />
    </>
  );
}

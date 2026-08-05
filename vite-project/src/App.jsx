import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";


function App() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      <Hero />
        <About />
         <Skills />
           <Experience />
           <Projects />
            <Contact />
            <Footer/>
            <ScrollProgress/>
            

    </div>
  );
}

export default App;

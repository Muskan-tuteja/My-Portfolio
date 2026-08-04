import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

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

    </div>
  );
}

export default App;

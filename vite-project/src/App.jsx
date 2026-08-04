import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar />
            <Hero />

      <section id="home" className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome
        </h1>
      </section>

      <section id="about" className="h-screen"></section>
      <section id="skills" className="h-screen"></section>
      <section id="projects" className="h-screen"></section>
      <section id="experience" className="h-screen"></section>
      <section id="contact" className="h-screen"></section>
    </div>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar />
            <Hero />

      <section
        id="about"
        className="h-screen flex items-center justify-center text-white text-5xl"
      >
        About Section
      </section>

    
    </div>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

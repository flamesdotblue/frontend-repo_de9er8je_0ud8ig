import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(76,29,149,0.25),rgba(0,0,0,0))]" />
      <Header />
      <Hero />
      <Stats />
      <Projects />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 mb-12 text-center text-xs text-white/50">
        Built for dark mode. Glowing UI, minimal noise.
      </footer>
    </div>
  );
}

export default App;

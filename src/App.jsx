import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Collaborations from './components/sections/Collaborations';
import Contact from './components/layout/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ProjectDetail from './components/pages/ProjectDetail';
import useHashRoute from './hooks/useHashRoute';

function App() {
  const route = useHashRoute();

  return (
    <div className="relative min-h-screen bg-bg text-ink font-sans antialiased overflow-x-hidden">
      <CustomCursor />

      {/* Ambient background */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow bg-glow--a" />
        <div className="bg-glow bg-glow--b" />
        <div className="bg-grain" />
      </div>

      <Navbar />
      <main className="relative z-10">
        {route.name === 'project' ? (
          <ProjectDetail slug={route.slug} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Collaborations />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

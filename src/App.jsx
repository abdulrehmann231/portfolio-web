import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/layout/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-primary text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        {/* Skills section visible only on mobile (below md breakpoint), shown after Projects */}
        <section className="md:hidden py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="section-kicker mx-auto mb-4">Tech Stack</div>
              <h2 className="section-title text-3xl font-extrabold mb-4">Skills</h2>
              <div className="section-rule mx-auto" />
            </div>
            <Skills />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

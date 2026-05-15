import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';

const AboutPage = () => {
    return (
        <div className="pt-28">
            <About />
            <Experience />
            {/* Skills section visible only on mobile (below md breakpoint) */}
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
        </div>
    );
};

export default AboutPage;

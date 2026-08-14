import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Code2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Skills from './Skills';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

const Card = ({ children, className = '', i = 0 }) => (
  <motion.div
    variants={fade}
    custom={i}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    className={`card card-hover p-6 md:p-7 ${className}`}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container-page">
        <SectionHeading
          kicker="01 / About"
          title="Turning ideas into shipped software."
          description="I care about clarity, performance, and building things people actually use."
        />

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {/* Bio — spans 2 cols */}
          <Card className="md:col-span-2" i={0}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="accent-ink" />
              <span className="font-mono text-xs uppercase tracking-widest text-faint">The short version</span>
            </div>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Hi, I'm <span className="text-ink font-semibold">Abdul Rehman</span> — a full-stack developer
                who enjoys the whole journey, from designing APIs and databases to crafting smooth,
                thoughtful frontends. I'm currently a third-year Computer Science student at{' '}
                <span className="text-ink font-semibold">FAST NUCES</span>.
              </p>
              <p>
                Lately I've been deep in <span className="text-ink">AI-driven products</span> — building
                RAG-based apps, agentic developer tools, and subscription SaaS platforms with Next.js,
                Node.js, Python and Spring Boot. My focus is always the same: solve a real problem and
                ship it to production.
              </p>
            </div>
          </Card>

          {/* Focus */}
          <Card i={1}>
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={16} className="accent-ink" />
              <span className="font-mono text-xs uppercase tracking-widest text-faint">Currently</span>
            </div>
            <p className="text-ink font-display text-xl font-semibold leading-snug">
              Building AI-native developer tools <span className="accent-ink">@ Gitwit</span>
            </p>
            <p className="mt-3 text-sm text-muted">
              Connecting natural language to real code through GitHub integrations and sandboxed execution.
            </p>
          </Card>

          {/* Education */}
          <Card i={2}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={16} className="accent-ink" />
              <span className="font-mono text-xs uppercase tracking-widest text-faint">Education</span>
            </div>
            <p className="text-ink font-semibold">B.S. Computer Science</p>
            <p className="text-sm text-muted">FAST NUCES · Karachi</p>
            <div className="mt-4 flex items-center gap-4 font-mono text-sm">
              <span className="text-ink">CGPA <span className="accent-ink">3.58</span></span>
              <span className="text-faint">Grad. 2027</span>
            </div>
          </Card>

          {/* Location */}
          <Card i={3}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="accent-ink" />
              <span className="font-mono text-xs uppercase tracking-widest text-faint">Based in</span>
            </div>
            <p className="text-ink font-display text-2xl font-semibold">Karachi, PK</p>
            <p className="mt-2 text-sm text-muted">Open to remote roles worldwide.</p>
          </Card>

          {/* Highlight */}
          <Card i={4}>
            <div className="font-display text-4xl font-bold text-ink">10+</div>
            <p className="mt-2 text-sm text-muted">Full-stack &amp; AI projects shipped to production.</p>
          </Card>

          {/* Skills — full width */}
          <Card className="md:col-span-3" i={5}>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-faint">Tech stack</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <Skills />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

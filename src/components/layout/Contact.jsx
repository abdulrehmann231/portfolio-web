import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        const { name, email, message } = formData;
        const mailtoLink = `mailto:mabdulrehman951@gmail.com?subject=Portfolio contact — ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        window.location.href = mailtoLink;
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 2500);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <section id="contact" className="py-24 md:py-32 relative">
            <div className="container-page">
                <SectionHeading
                    kicker="04 / Contact"
                    title="Let's build something."
                    align="center"
                    description="I'm actively looking for new opportunities. Have a project, a role, or just want to talk AI? Reach out."
                />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className="mt-12 grid lg:grid-cols-5 gap-6"
                >
                    {/* Left info */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <a
                            href="mailto:mabdulrehman951@gmail.com"
                            className="card card-hover p-6 group flex items-center gap-4"
                        >
                            <div className="icon-btn !w-11 !h-11 pointer-events-none">
                                <Mail size={18} />
                            </div>
                            <div className="min-w-0">
                                <div className="font-mono text-xs text-faint uppercase tracking-widest">Email</div>
                                <div className="text-ink font-medium truncate">mabdulrehman951@gmail.com</div>
                            </div>
                            <ArrowUpRight size={16} className="ml-auto text-faint group-hover:text-accentink transition-colors" />
                        </a>

                        <div className="card p-6 flex items-center gap-4">
                            <div className="icon-btn !w-11 !h-11 pointer-events-none">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <div className="font-mono text-xs text-faint uppercase tracking-widest">Location</div>
                                <div className="text-ink font-medium">Karachi, Pakistan · Remote</div>
                            </div>
                        </div>

                        <div className="card p-6 flex-1 flex flex-col justify-between gap-6">
                            <p className="text-muted text-sm leading-relaxed">
                                Prefer socials? I'm most active on GitHub and LinkedIn.
                            </p>
                            <div className="flex gap-3">
                                <a href="https://github.com/abdulrehmann231/" target="_blank" rel="noreferrer" className="icon-btn">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/abdulrehman-nasir-tobaria" target="_blank" rel="noreferrer" className="icon-btn">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-3 card p-6 md:p-8 space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block font-mono text-xs text-faint uppercase tracking-widest mb-2">Name</label>
                                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-mono text-xs text-faint uppercase tracking-widest mb-2">Email</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder="you@email.com" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-mono text-xs text-faint uppercase tracking-widest mb-2">Message</label>
                            <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="input-field resize-none" placeholder="Tell me about your project or role..." />
                        </div>
                        <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'sending' ? 'Opening mail…' : status === 'success' ? 'Message ready!' : (<>Send message <Send size={17} /></>)}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

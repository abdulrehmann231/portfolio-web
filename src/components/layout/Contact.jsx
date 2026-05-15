import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const { name, email, message } = formData;
        const mailtoLink = `mailto:mabdulrehman951@gmail.com?subject=Contact from Portfolio - ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

        window.location.href = mailtoLink;

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setStatus('');
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-kicker mx-auto mb-4">
                        Contact
                    </div>
                    <h2 className="section-title text-3xl md:text-5xl font-extrabold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Let's discuss how I can help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left Column - Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-5"
                    >
                        {/* CTA Card */}
                        <div className="bento-card-accent p-8 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                                <Mail size={28} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Let's work together
                            </h3>
                            <p className="text-neutral-400 mb-6">
                                I'm currently available for freelance projects and full-time opportunities.
                            </p>
                            <a
                                href="mailto:mabdulrehman951@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
                            >
                                <Mail size={18} />
                                Send Email
                            </a>
                        </div>

                        {/* Contact Info Cards */}
                        <a
                            href="mailto:mabdulrehman951@gmail.com"
                            className="bento-card p-5 flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                                <Mail className="text-neutral-700" size={22} />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">Email</p>
                                <p className="font-medium text-neutral-900">mabdulrehman951@gmail.com</p>
                            </div>
                            <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                        </a>

                        <div className="bento-card p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center">
                                <MapPin className="text-neutral-700" size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">Location</p>
                                <p className="font-medium text-neutral-900">Karachi, Pakistan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form onSubmit={handleSubmit} className="bento-card p-8">
                            <h3 className="text-xl font-bold text-neutral-900 mb-6">Send a Message</h3>

                            <div className="grid md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="you@company.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-600 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input-field resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {status === 'sending' ? (
                                    <span>Sending...</span>
                                ) : status === 'success' ? (
                                    <span>Message Sent!</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

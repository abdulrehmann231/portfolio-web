import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

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
        <section id="contact" className="py-20 relative">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="surface rounded-[2rem] p-8 md:p-12 overflow-hidden relative"
                >
                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <div className="section-kicker mb-4">Contact</div>
                            <h2 className="section-title text-3xl md:text-4xl font-extrabold mb-6">Let's Work Together</h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                I'm actively looking for new opportunities. Whether you have a project in mind or just want to discuss the latest in AI, 
                                feel free to reach out!
                            </p>
                            
                            <div className="space-y-6">
                                <a href="mailto:mabdulrehman951@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-slate-900 group transition-colors p-4 surface-strong rounded-2xl hover:translate-y-[-1px]">
                                    <div className="p-3 bg-teal-50 rounded-xl text-teal-700 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <span className="font-medium">mabdulrehman951@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-slate-700 p-4 surface-strong rounded-2xl">
                                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                                        <MapPin size={24} />
                                    </div>
                                    <span className="font-medium">Karachi, Pakistan</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 surface-strong p-8 rounded-[1.75rem] border border-slate-100">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="your@email.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-500 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="input-field resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

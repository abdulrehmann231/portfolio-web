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
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-8 md:p-12 overflow-hidden relative"
                >
                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                                I'm actively looking for new opportunities. Whether you have a project in mind or just want to discuss the latest in AI, 
                                feel free to reach out!
                            </p>
                            
                            <div className="space-y-6">
                                <a href="mailto:mabdulrehman951@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white group transition-colors p-4 glass rounded-xl hover:bg-white/5">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <span className="font-medium">mabdulrehman951@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-gray-300 p-4 glass rounded-xl">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                        <MapPin size={24} />
                                    </div>
                                    <span className="font-medium">Karachi, Pakistan</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 focus:bg-black/30"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 focus:bg-black/30"
                                    placeholder="your@email.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 focus:bg-black/30"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 transform hover:-translate-y-1"
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

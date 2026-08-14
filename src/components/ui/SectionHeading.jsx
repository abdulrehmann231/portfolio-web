import { motion } from 'framer-motion';

const SectionHeading = ({ kicker, title, description, align = 'left' }) => {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      {kicker && <div className={`kicker mb-4 ${centered ? 'justify-center' : ''}`}>{kicker}</div>}
      <h2 className="section-title text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

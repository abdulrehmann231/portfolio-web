import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C#", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Spring Boot", ".NET", "Electron", "FastAPI", "TailwindCSS"] },
  { category: "AI & Databases", items: ["RAG", "YOLO v5", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Groq API", "HuggingFace"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Eureka"] },
];

const Skills = ({ className = "" }) => {
  return (
    <div className={`grid gap-6 ${className}`}>
      {skills.map((skillGroup, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="surface p-6 rounded-2xl hover:translate-y-[-2px] transition-all duration-300 border-l-2 border-l-slate-900"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-4">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full text-sm bg-slate-50 text-slate-700 border border-slate-200">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;

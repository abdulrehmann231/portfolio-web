const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C#', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express', 'Spring Boot', '.NET', 'FastAPI', 'TailwindCSS'] },
  { category: 'AI & Data', items: ['RAG', 'LangChain', 'YOLO v5', 'Groq API', 'HuggingFace', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'Vercel'] },
];

const Skills = ({ className = '' }) => {
  return (
    <div className={`grid sm:grid-cols-2 gap-6 ${className}`}>
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="font-mono text-xs uppercase tracking-widest text-faint mb-3">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

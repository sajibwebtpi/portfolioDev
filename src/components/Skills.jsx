import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills, tools } = portfolioData;

  return (
    <section id="skills" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm text-blue-500 font-medium uppercase tracking-widest mb-3">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Technical skills</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="p-5 rounded-xl bg-dark-700 border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="flex justify-between items-center mb-3">
                <p className="text-base font-medium text-white">{skill.name}</p>
                <p className="text-sm text-blue-400 font-medium">{skill.level}%</p>
              </div>
              <div className="h-1.5 rounded-full bg-white/5">
                <div
                  className="h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-base font-medium text-neutral-300 mb-4">Tools & others</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-neutral-300 text-sm hover:border-blue-500/40 hover:text-blue-400 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

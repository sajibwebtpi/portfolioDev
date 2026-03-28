import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm text-blue-500 font-medium uppercase tracking-widest mb-3">Projects</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Featured projects</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 rounded-2xl bg-dark-700 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-2xl">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg text-sm text-blue-400 border border-blue-500/30 hover:bg-blue-600/10 transition-colors"
                  >
                    Live ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg text-sm text-neutral-400 border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

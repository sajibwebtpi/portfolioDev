import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm text-blue-500 font-medium uppercase tracking-widest mb-3">Education</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Educational background</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mb-12" />

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 ring-4 ring-blue-500/20" />
                {i < education.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
              </div>
              <div className="pb-8 flex-1">
                <div className="p-6 rounded-2xl bg-dark-700 border border-white/5 hover:border-blue-500/20 transition-colors">
                  <p className="text-blue-400 font-medium text-lg mb-1">{edu.degree}</p>
                  <p className="text-white font-display font-semibold text-xl mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-sm text-neutral-500">{edu.period}</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                      {edu.result}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-base leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

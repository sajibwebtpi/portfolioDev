import { portfolioData } from "../data/portfolioData";

const techTags = ["React", "Vue.js", "Laravel", "Tailwind CSS", "JavaScript", "PHP"];

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResume = () => {
    const link = document.createElement("a");
    link.href = personal.resumeUrl;
    link.setAttribute("download", "Abdullah_Rahman_Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center max-w-6xl mx-auto px-6 py-24">
      <div className="w-full">
        {/* Availability badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {personal.availability}
        </div>

        {/* Name */}
        <h1 className="fade-up-2 font-display text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-4">
          {personal.name.split(" ")[0]}<br />
          <span className="text-neutral-500">{personal.name.split(" ")[1]}</span>
        </h1>

        {/* Role */}
        <p className="fade-up-3 text-2xl md:text-3xl text-blue-400 font-display font-medium mb-6">
          {personal.role}
        </p>

        {/* About short */}
        <p className="fade-up-3 text-lg text-neutral-400 max-w-xl leading-relaxed mb-10">
          {personal.about}
        </p>

        {/* Tech tags */}
        <div className="fade-up-3 flex flex-wrap gap-2 mb-10">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="fade-up-3 flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-medium transition-colors"
          >
            View Projects →
          </button>
          <button
            onClick={handleResume}
            className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 text-white text-base transition-colors flex items-center gap-2"
          >
            Download Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 text-white text-base transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Stats */}
        <div className="fade-up-3 flex gap-10 mt-16 pt-10 border-t border-white/5">
          {[
            { value: "2+", label: "Years experience" },
            { value: "10+", label: "Projects built" },
            { value: "5+", label: "Happy clients" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-neutral-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

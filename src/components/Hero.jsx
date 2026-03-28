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
    link.setAttribute("download", "MD_Sajib_Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center max-w-6xl mx-auto px-6 py-24">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ===== LEFT — Content ===== */}
        <div className="flex-1">
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

        {/* ===== RIGHT — Profile Image ===== */}
        <div className="fade-up flex-shrink-0 flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">

            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-110" />

            {/* Rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/40 animate-spin [animation-duration:12s]" />

            {/* Static inner ring */}
            <div className="absolute inset-2 rounded-full border border-white/10" />

            {/* Image */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-neutral-800">
              <img
                src={personal.img}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating dot — top right */}
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

            {/* Floating dot — bottom left */}
            <div className="absolute bottom-6 left-2 w-2 h-2 rounded-full bg-blue-300/60" />

            {/* Open to work badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs text-green-400 whitespace-nowrap shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to work
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  const info = [
    { label: "Name", value: personal.name },
    { label: "Location", value: personal.location },
    { label: "Email", value: personal.email },
    { label: "Phone", value: personal.phone },
  ];

  return (
    <section id="about" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm text-blue-500 font-medium uppercase tracking-widest mb-3">About</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">About me</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">{personal.about}</p>
            <p className="text-neutral-500 leading-relaxed">
              I'm always looking to learn new technologies and improve my skills. Outside of coding, I enjoy exploring design trends and contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {info.map((item) => (
              <div key={item.label} className="p-5 rounded-xl bg-dark-700 border border-white/5">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-base text-white font-medium">{item.value}</p>
              </div>
            ))}
            <div className="col-span-2 p-5 rounded-xl bg-blue-600/10 border border-blue-500/20">
              <p className="text-xs text-blue-400 uppercase tracking-wider mb-2">Availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-base text-green-400 font-medium">{personal.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

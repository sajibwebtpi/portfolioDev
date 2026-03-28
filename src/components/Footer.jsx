import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-white">
          {personal.name.split(" ")[0]}<span className="text-blue-500">.</span>
        </p>
        <p className="text-sm text-neutral-600">
          Built with React + Tailwind CSS · {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="text-sm text-neutral-500 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

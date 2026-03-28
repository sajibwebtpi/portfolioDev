import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { label: "GitHub", value: "github.com/abdullah", href: personal.github },
    { label: "LinkedIn", value: "linkedin.com/in/abdullah", href: personal.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm text-blue-500 font-medium uppercase tracking-widest mb-3">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Get in touch</h2>
        <div className="w-12 h-1 bg-blue-600 rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — feel free to reach out!
            </p>
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-700 border border-white/5 hover:border-blue-500/30 transition-colors group"
                >
                  <span className="text-sm text-neutral-500 uppercase tracking-wider">{item.label}</span>
                  <span className="text-base text-white group-hover:text-blue-400 transition-colors">{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/5 text-white text-base placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/5 text-white text-base placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <input
              type="text" name="subject" value={form.subject} onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/5 text-white text-base placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/5 text-white text-base placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-medium transition-colors self-start"
            >
              Send message →
            </button>
            {sent && (
              <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-base">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

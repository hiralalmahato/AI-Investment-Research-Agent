import { BrainCircuit, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Project */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <BrainCircuit
                className="text-cyan-400"
                size={30}
              />

              <h2 className="text-2xl font-bold text-white">
                AI Investment Research
              </h2>

            </div>

            <p className="text-slate-400 leading-7">
              An AI-powered investment research platform
              built using a Multi-Agent architecture,
              LangGraph, Gemini AI, React and Node.js.
            </p>

          </div>

          {/* Tech Stack */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "LangGraph",
                "Gemini AI",
                "Alpha Vantage",
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-slate-800
                    text-slate-300
                    text-sm
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/hiralalmahato"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/hiralal-mahato"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="mailto:mahatoh360@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
              >
                <Mail size={20} />
                Email
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center">

          <p className="text-slate-500">

            © {currentYear} AI Investment Research Agent • Built with ❤️ using React, LangGraph & Gemini AI

          </p>

        </div>

      </div>

    </footer>
  );
}
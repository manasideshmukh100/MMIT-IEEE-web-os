import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS } from '../data/mockData';
import { Code2, Star, Github, ExternalLink, Cpu, Layers, Sparkles } from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI / ML', 'IoT & Embedded', 'Cloud & HPC', 'Web & OS'];

  const filteredProjects = PROJECTS.filter((proj) => {
    return selectedCategory === 'All' || proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-6 max-w-[1280px] mx-auto relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">
          Ecosystem Projects & Research
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#7c3aed] to-[#2fd9f4] mx-auto rounded-full mb-3 shadow-[0_0_12px_#7c3aed]" />
        <p className="font-body text-[#c2c6d6] text-sm max-w-xl mx-auto">
          Explore student-engineered hardware prototypes, high-performance computing pipelines, and open-source software.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white font-semibold shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                : 'glass-panel text-[#c2c6d6] hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-[#2fd9f4]/40 transition-all duration-300 relative group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 flex items-center gap-1.5">
                  <Layers className="w-3 h-3" /> {project.category}
                </span>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    project.status === 'Deployed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : project.status === 'In Development'
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#2fd9f4] transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-[#adc6ff] mt-0.5 mb-3">{project.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-[#c2c6d6] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-[#c2c6d6] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Row */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-[#8c909f] flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-[#2fd9f4]" /> Lead: {project.lead}
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> {project.stars}
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 text-[#c2c6d6] hover:text-white hover:bg-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[#2fd9f4]/10 text-[#2fd9f4] hover:bg-[#2fd9f4]/20 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

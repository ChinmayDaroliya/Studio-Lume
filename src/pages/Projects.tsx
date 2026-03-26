import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <main className="pt-20">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Portfolio</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
            Selected Work
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg">
            A curated collection of projects spanning residential, commercial, cultural, and urban design.
          </p>
        </motion.div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

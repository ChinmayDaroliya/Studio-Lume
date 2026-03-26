import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="image-reveal aspect-[4/3] mb-5">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-medium group-hover:text-stone transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{project.location}</p>
          </div>
          <span className="text-xs tracking-widest uppercase text-muted-foreground mt-1 shrink-0">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

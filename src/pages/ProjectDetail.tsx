import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-20 section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-widest uppercase">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm tracking-widest uppercase mb-10 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                {project.category} — {project.year}
              </p>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="text-muted-foreground mt-3">{project.location}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="aspect-[16/9] overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            width={1200}
            height={800}
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="font-heading text-2xl md:text-3xl mb-6">The Project</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h3 className="font-heading text-xl md:text-2xl mt-12 mb-4">Design Concept</h3>
              <p className="text-muted-foreground leading-relaxed">{project.concept}</p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Materials & Systems</h3>
              <ul className="space-y-3">
                {project.materials.map((m) => (
                  <li key={m} className="text-foreground border-b border-border pb-3 text-sm">
                    {m}
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4 mt-10">Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Location</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Year</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Type</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="image-reveal aspect-[4/3]">
                <img
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;

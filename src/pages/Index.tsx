import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-1.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern architecture building at golden hour"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-16 md:pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] max-w-4xl">
              Designing Spaces
              <br />
              That Inspire
            </h1>
            <p className="mt-6 text-primary-foreground/80 text-base md:text-lg max-w-lg">
              Architecture rooted in context, shaped by light, and refined through craft.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 mt-8 text-primary-foreground text-sm tracking-widest uppercase border-b border-primary-foreground/40 pb-1 hover:border-primary-foreground transition-colors duration-300"
            >
              View Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
              About the Studio
            </p>
            <h2 className="font-heading text-3xl md:text-5xl leading-tight">
              We believe architecture is the art of organizing space to serve the human spirit.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              Studio Lume is an award-winning practice dedicated to creating buildings and spaces
              that engage with their context, celebrate materiality, and elevate everyday experience.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-foreground text-sm tracking-widest uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Projects */}
      <section className="section-padding pt-0">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Selected Work
              </p>
              <h2 className="font-heading text-3xl md:text-4xl">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="md:hidden mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground section-padding">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl mb-6">Let's Build Something Remarkable</h2>
            <p className="text-primary-foreground/70 mb-10">
              Whether you have a clear vision or just the beginning of an idea, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-primary-foreground/40 px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;

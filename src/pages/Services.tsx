import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Residential Design",
    description:
      "From intimate urban apartments to expansive country estates, we design homes that reflect the unique character of their inhabitants. Every detail is considered — from the way morning light enters a bedroom to how a family gathers at the end of the day.",
  },
  {
    number: "02",
    title: "Commercial Design",
    description:
      "We create workspaces, retail environments, and hospitality venues that perform commercially while enriching the experience of everyone who enters. Our commercial projects balance brand expression with human comfort.",
  },
  {
    number: "03",
    title: "Interior Design",
    description:
      "Our interiors practice works in concert with our architecture, ensuring that the quality of space extends to every surface, fixture, and furnishing. We curate materials and objects that age beautifully and feel right to the touch.",
  },
  {
    number: "04",
    title: "Urban Planning",
    description:
      "At the scale of neighborhoods and districts, we shape environments that foster community, sustainability, and urban vitality. Our master plans balance density with openness, commerce with culture.",
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">What We Do</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
            Services
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg">
            A full spectrum of architectural services, from first sketch to final detail.
          </p>
        </motion.div>
      </section>

      <section className="section-padding pt-0">
        <div className="space-y-0">
          {services.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 0.1}>
              <div className="border-t border-border py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-1">
                  <span className="text-muted-foreground text-sm font-heading">{service.number}</span>
                </div>
                <div className="md:col-span-3">
                  <h2 className="font-heading text-2xl md:text-3xl">{service.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl mb-6">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8">
              Every great project begins with a conversation. Tell us about your vision and we'll
              explore how we can bring it to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Services;

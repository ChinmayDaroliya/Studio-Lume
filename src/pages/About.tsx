import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">About</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
            Architecture as a discipline of care
          </h1>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <div className="max-w-lg">
              <h2 className="font-heading text-2xl md:text-3xl mb-8">Our Philosophy</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
               <p>
                  We approach every project as a learning process — understanding the site, the
                  context, and the people who will interact with the space. Each design is
                  developed through careful observation and exploration rather than applying a
                  fixed style.
                </p>

                <p>
                  The work includes academic projects ranging from residential design concepts
                  to small-scale public spaces. The focus remains on simplicity, functionality,
                  and creating spaces that are both practical and visually balanced.
                </p>

                <p>
                  Studio Lume was created as a student-led initiative to present design ideas,
                  coursework, and conceptual projects. It reflects an ongoing journey of
                  learning, experimentation, and developing a personal architectural approach.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-8 text-center">
              {[
            { number: "8+", label: "Academic Projects" },
            { number: "2", label: "Design Competitions" },
            { number: "3", label: "Studio Works" },
            { number: "2024", label: "Established" },
              ].map((stat) => (
                <div key={stat.label} className="py-8">
                  <div className="font-heading text-4xl md:text-5xl font-light">{stat.number}</div>
                  <div className="text-muted-foreground text-xs tracking-widest uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-secondary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection>
            <div className="image-reveal aspect-[4/5] max-w-md">
              <img
                src={founderImg}
                alt="Marcus Hale, Founder & Principal Architect"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="max-w-lg">
  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Founder</p>
  <h2 className="font-heading text-3xl md:text-4xl mb-2">Priyansh Vyas</h2>
  <p className="text-muted-foreground text-sm mb-8">Architecture Student & Founder</p>
  
  <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Priyansh Vyas is an architecture student and the founder of Studio Lume, a conceptual design
          studio created as part of his academic exploration in architecture and spatial design.
        </p>

        <p>
          Currently pursuing his degree in architecture, Priyansh focuses on developing thoughtful and
          functional design solutions through academic projects. His work reflects a strong interest in
          minimalism, user-centric spaces, and contemporary architectural practices.
        </p>

        <p>
          Studio Lume serves as a platform to showcase his academic projects, design concepts, and
          creative ideas, with an emphasis on simplicity, clarity, and purposeful design.
        </p>

        <p>
          "I believe architecture is not just about structures, but about creating spaces that feel
          meaningful and intuitive to the people who experience them."
        </p>
      </div>
    </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;

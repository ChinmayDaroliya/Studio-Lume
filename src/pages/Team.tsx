import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <main className="pt-20">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Team</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
            Studio Lume Team
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg">
            Meet the talented individuals powering Studio Lume, from senior leadership to early-career interns.
          </p>
        </motion.div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.article
  key={member.id}
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="rounded-2xl border border-border/50 p-6 hover:shadow-lg transition-shadow bg-background"
>
  {/* 👇 IMAGE */}
  <div className="mb-4 flex justify-center">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full object-cover"
    />
  </div>

  <div className="mb-4 text-center">
    <p className="text-xs tracking-widest uppercase text-muted-foreground">
      {member.level}
    </p>
    <h2 className="text-xl font-semibold mt-1">{member.name}</h2>
    <p className="text-sm text-muted-foreground">{member.title}</p>
  </div>

  <p className="text-sm leading-relaxed text-muted-foreground mb-4 text-center">
    {member.bio}
  </p>

  <div className="text-center">
    <a
      href={`mailto:${member.email}`}
      className="text-xs uppercase tracking-widest text-primary hover:underline"
    >
      {member.email}
    </a>
  </div>
</motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;

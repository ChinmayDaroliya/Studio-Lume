import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Contact</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
            Let's Talk
          </h1>
        </motion.div>
      </section>

      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-10">
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Studio</h3>
                <p className="text-foreground leading-relaxed">
                  Silver Palace Appartment, <br />
                  Udaipur , Rajasthan <br />
                  
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Email</h3>
                <a href="mailto:hello@archivestudio.com" className="text-foreground hover:text-muted-foreground transition-colors">
                  priyanshvyasbnr@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Phone</h3>
                <p className="text-foreground">+91 6378416959</p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Social</h3>
                <div className="flex gap-6 text-foreground text-sm">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Instagram</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">LinkedIn</a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Pinterest</a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9777.423829176096!2d73.7148488986961!3d24.60106001598278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5bc593ce4cf%3A0xc7dcad41b04b855f!2sSilver%20Palace!5e0!3m2!1sen!2sin!4v1774521321964!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Lume Location"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;

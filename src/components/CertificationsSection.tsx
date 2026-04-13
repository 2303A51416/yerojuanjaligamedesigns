import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Prompt Engineering", issuer: "Infosys Springboard · Apr 2026" },
  { title: "Probability and Statistics using Python", issuer: "Infosys Springboard · Mar 2025" },
  { title: "Introduction to Natural Language Processing", issuer: "Infosys Springboard · Sep 2024" },
  { title: "Introduction to Robotic Process Automation", issuer: "Infosys Springboard · Sep 2024" },
  { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard · Sep 2024" },
];

export function CertificationsSection() {
  return (
    <section id="certs" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Verified certifications from Infosys Springboard across AI, NLP, and more.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl glow-border bg-card/40 backdrop-blur-sm"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

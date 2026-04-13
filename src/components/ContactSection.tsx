import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Interested in collaborating on a game project or want to chat about game design? Reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:yerrojuanjali@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-xl glow-border glow-border-hover bg-card/50 backdrop-blur-sm transition-all duration-500 w-full sm:w-auto"
          >
            <Mail size={20} className="text-primary" />
            <span className="text-sm text-foreground">yerrojuanjali@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yeroju-anjali-40b107300/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl glow-border glow-border-hover bg-card/50 backdrop-blur-sm transition-all duration-500 w-full sm:w-auto"
          >
            <Linkedin size={20} className="text-primary" />
            <span className="text-sm text-foreground">LinkedIn Profile</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm"
        >
          <MapPin size={14} />
          <span>Hanmakonda, Telangana, India</span>
        </motion.div>
      </div>
    </section>
  );
}

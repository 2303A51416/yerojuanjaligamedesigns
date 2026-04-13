import { motion } from "framer-motion";
import { Cpu, Palette, Code, Layers, Lightbulb, Cog } from "lucide-react";

const skills = [
  { icon: Layers, title: "Unity3D", desc: "3D & 2D game development, physics, animation systems" },
  { icon: Code, title: "Programming", desc: "Java, Python, SQL, C# — clean game logic & systems" },
  { icon: Palette, title: "Game Design", desc: "Mechanics, level design, player experience, balancing" },
  { icon: Cpu, title: "AI & ML", desc: "AI-powered features, adaptive gameplay, smart NPCs" },
  { icon: Lightbulb, title: "UI/UX Design", desc: "Intuitive game interfaces, HUD design, menus" },
  { icon: Cog, title: "Web Tech", desc: "HTML, CSS, JavaScript — web-based games & portfolios" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and techniques I wield to bring game worlds to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl glow-border glow-border-hover bg-card/50 backdrop-blur-sm transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <skill.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import huntressImg from "@/assets/project-huntress.jpg";
import spaceshooterImg from "@/assets/project-spaceshooter.jpg";
import angrybirdImg from "@/assets/project-angrybird.jpg";
import tictactoeImg from "@/assets/project-tictactoe.jpg";

const projects = [
  {
    title: "The Last Huntress",
    subtitle: "3D Game",
    description: "An atmospheric 3D survival RPG set in a post-apocalyptic wilderness. Features dynamic combat, exploration, and a rich narrative-driven experience.",
    image: huntressImg,
    tags: ["Unity3D", "3D Design", "Game Mechanics", "Narrative"],
    featured: true,
  },
  {
    title: "Space Shooter",
    subtitle: "2D Arcade",
    description: "Fast-paced arcade space shooter with intense boss battles, power-ups, and procedurally increasing difficulty.",
    image: spaceshooterImg,
    tags: ["Unity3D", "2D Design", "Arcade", "VFX"],
  },
  {
    title: "Angry Bird Clone",
    subtitle: "2D Physics",
    description: "A physics-based puzzle game with slingshot mechanics, destructible environments, and creative level design.",
    image: angrybirdImg,
    tags: ["Unity3D", "Physics", "Level Design", "2D Art"],
  },
  {
    title: "TicTacToe",
    subtitle: "2D Strategy",
    description: "A sleek, neon-styled TicTacToe game with AI opponent and multiplayer modes, featuring polished UI and animations.",
    image: tictactoeImg,
    tags: ["Unity3D", "AI Logic", "UI/UX", "Multiplayer"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Game Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of game design and development work, from immersive 3D worlds to addictive 2D experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative rounded-xl overflow-hidden glow-border glow-border-hover bg-card transition-all duration-500 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className={`${project.featured ? "md:flex" : ""}`}>
                <div className={`overflow-hidden ${project.featured ? "md:w-3/5" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`p-6 md:p-8 flex flex-col justify-center ${project.featured ? "md:w-2/5" : ""}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

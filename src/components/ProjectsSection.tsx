import { motion } from "framer-motion";
import huntressImg from "@/assets/project-huntress.jpg";
import sonicImg from "@/assets/project-sonic.jpg";
import puzzleImg from "@/assets/project-puzzle.jpg";
import echolearnImg from "@/assets/project-echolearn.jpg";

const projects = [
  {
    title: "The Last Huntress",
    subtitle: "3D Action Game",
    description: "Designed and developed a 3D action game in Unity featuring immersive gameplay mechanics, level design, character controls, and cinematic UI — showcasing advanced game design skills.",
    image: huntressImg,
    tags: ["Unity3D", "3D Design", "Game Mechanics", "Cinematic UI"],
    featured: true,
  },
  {
    title: "2D Sonic Head Mania",
    subtitle: "2D Platformer",
    description: "Fast-paced 2D action game inspired by classic Sonic gameplay built in Unity — implemented physics, collision detection, sprite animations, and progressive level design.",
    image: sonicImg,
    tags: ["Unity3D", "2D Design", "Physics", "Published"],
  },
  {
    title: "Puzzle Game & Tic Tac Toe",
    subtitle: "3D Puzzle / Strategy",
    description: "3D Puzzle Game with custom level logic and intuitive UX. 3D Tic Tac Toe with win/draw detection, C# scripting, and clean UI — both built independently in Unity.",
    image: puzzleImg,
    tags: ["Unity3D", "C#", "Level Design", "UI/UX"],
  },
  {
    title: "Echo Learn — AI Voice Notes",
    subtitle: "AI Application",
    description: "AI-powered application that converts voice input into summarized notes using speech recognition and NLP. Combines voice processing with intelligent text summarization.",
    image: echolearnImg,
    tags: ["AI", "NLP", "Speech Recognition", "Academic"],
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of game design, development, and AI-powered applications.
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
                    width={1024}
                    height={640}
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

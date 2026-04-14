import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import huntressImg from "@/assets/project-huntress.jpg";
import tlhWorld from "@/assets/tlh-world.jpeg";
import tlhGameplay from "@/assets/tlh-gameplay.jpeg";
import sonicImg from "@/assets/project-sonic.jpg";
import puzzleImg from "@/assets/project-puzzle.jpg";
import echolearnImg from "@/assets/project-echolearn.jpg";

const huntressImages = [huntressImg, tlhWorld, tlhGameplay];

const otherProjects = [
  {
    title: "2D Sonic Head Mania",
    subtitle: "2D Platformer",
    description:
      "Fast-paced 2D action game inspired by classic Sonic gameplay — implemented physics, collision detection, sprite animations, and progressive level design.",
    image: sonicImg,
    tags: ["Unity3D", "2D Design", "Physics", "Published"],
  },
  {
    title: "Puzzle Game & Tic Tac Toe",
    subtitle: "3D Puzzle / Strategy",
    description:
      "3D Puzzle Game with custom level logic and intuitive UX. 3D Tic Tac Toe with win/draw detection, C# scripting, and clean UI.",
    image: puzzleImg,
    tags: ["Unity3D", "C#", "Level Design", "UI/UX"],
  },
  {
    title: "Echo Learn — AI Voice Notes",
    subtitle: "AI Application",
    description:
      "AI-powered application that converts voice input into summarized notes using speech recognition and NLP.",
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HuntressGallery() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % huntressImages.length);
  const prev = () =>
    setCurrent(
      (p) => (p - 1 + huntressImages.length) % huntressImages.length
    );

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={huntressImages[current]}
          alt={`The Last Huntress screenshot ${current + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {huntressImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of game design, development, and AI-powered applications.
          </p>
        </motion.div>

        {/* ── Featured: The Last Huntress ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 relative rounded-2xl overflow-hidden bg-card border-2 border-primary/20 shadow-[0_0_60px_-15px] shadow-primary/15"
        >
          {/* Featured badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
            <Star size={12} className="fill-current" />
            Featured Project
          </div>

          <div className="md:flex">
            <div className="md:w-3/5">
              <HuntressGallery />
            </div>
            <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-accent" />
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  3D Action Game
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Last Huntress
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Designed and developed a 3D action game in Unity featuring immersive
                gameplay mechanics, expansive open-world level design, character
                controls with fluid animations, and cinematic UI — showcasing
                advanced game design and world-building skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Unity3D", "3D Design", "Game Mechanics", "Cinematic UI", "Open World", "Level Design"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  3 Screenshots
                </span>
                <span>·</span>
                <span>Unity Engine</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other Projects ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden glow-border glow-border-hover bg-card transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2 block">
                  {project.subtitle}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "Plataforma E-Commerce",
      description:
        "Una plataforma de comercio electrónico completa construida con Next.js, con gestión de inventario en tiempo real, integración con Stripe y un CMS headless para gestión de contenido.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
      github: "#",
      live: "#",
      image: "ecommerce",
    },
    {
      title: "Dashboard de IA",
      description:
        "Un panel de análisis para modelos de IA/ML, con métricas en tiempo real, versionado de modelos y visualizaciones interactivas para monitorear el rendimiento del modelo.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      github: "#",
      live: "#",
      image: "dashboard",
    },
    {
      title: "App de Redes Sociales",
      description:
        "Una plataforma social en tiempo real con funciones como mensajería en vivo, compartir historias y feed de contenido algorítmico. Construida con enfoque en rendimiento y accesibilidad.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
      github: "#",
      live: "#",
      image: "social",
    },
  ];

  const otherProjects = [
    {
      title: "Widget del Clima",
      description: "Un hermoso widget del clima con pronósticos basados en ubicación e íconos animados.",
      tech: ["React", "OpenWeather API", "CSS"],
    },
    {
      title: "Gestor de Tareas",
      description: "App de gestión de tareas estilo Kanban con arrastrar y soltar, etiquetas y colaboración en equipo.",
      tech: ["Vue.js", "Vuex", "Firebase"],
    },
    {
      title: "Plantilla de Portfolio",
      description: "Una plantilla de portfolio personalizable para desarrolladores con modo oscuro y animaciones.",
      tech: ["Next.js", "Framer Motion", "MDX"],
    },
    {
      title: "Gestor de Snippets",
      description: "Guarda, organiza y comparte fragmentos de código con resaltado de sintaxis y etiquetas.",
      tech: ["React", "Monaco Editor", "Supabase"],
    },
    {
      title: "Reproductor de Música",
      description: "Un reproductor de música inspirado en Spotify con gestión de playlists y visualizaciones de audio.",
      tech: ["React", "Web Audio API", "Zustand"],
    },
    {
      title: "Plataforma de Blog",
      description: "Una plataforma de blog minimalista con soporte markdown y optimización SEO.",
      tech: ["Astro", "MDX", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-3xl font-display font-bold">Proyectos</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className="relative aspect-video rounded-lg overflow-hidden group"
                  data-hover
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/40 via-cosmic-blue/40 to-cosmic-cyan/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-foreground/20">
                      {project.image}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Proyecto Destacado</p>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <div className="glass rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 text-xs font-mono text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    className="text-foreground hover:text-primary transition-colors"
                    data-hover
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-foreground hover:text-primary transition-colors"
                    data-hover
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold">Otros Proyectos Destacados</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="glass rounded-lg p-6 card-hover group"
              data-hover
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-primary" size={40} />
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

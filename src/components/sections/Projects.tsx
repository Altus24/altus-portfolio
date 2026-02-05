import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const featuredProjects = [
    {
      title: t("projects.aguaraTitle"),
      description: t("projects.aguaraDesc"),
      tech: ["Next.js", "Tailwind"],
      github: "https://github.com/Altus24/Aaguara-Veterinaria",
      live: "https://www.aguaraveterinariaadomicilio.com/",
      image: "/images/projects/aguara.webp",
    },
    {
      title: t("projects.biotechTitle"),
      description: t("projects.biotechDesc"),
      tech: ["React", "Next.js", "Tailwind"],
      github: "https://github.com/Altus24/biotech-sistemas",
      live: "https://biotech-sistemas.com/",
      image: "/images/projects/biotech.webp",
    },

  ];

  // const otherProjects = [
  //   {
  //     title: "Widget del Clima",
  //     description: "Un hermoso widget del clima con pronósticos basados en ubicación e íconos animados.",
  //     tech: ["React", "OpenWeather API", "CSS"],
  //     image: "/images/projects/weather.svg",
  //   },
  //   
  // ];

  return (
    <section id="projects" className=" relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-3xl font-display font-bold">{t("projects.title")}</h2>
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
              className={`grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? "md:text-right" : ""
                }`}
            >
              <div
                className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""
                  }`}
              >
                <div
                  className="relative  rounded-lg overflow-hidden group"
                  data-hover
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/40 via-cosmic-blue/40 to-cosmic-cyan/40" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""
                  }`}
              >
                <p className="text-primary font-mono text-sm mb-2">{t("projects.featured")}</p>
                <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
                <div className="glass rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 text-xs font-mono text-muted-foreground ${index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""
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
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-display font-bold">Otros Proyectos</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="glass rounded-lg overflow-hidden card-hover group"
              data-hover
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cosmic-violet/30 via-cosmic-blue/30 to-cosmic-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm rounded-full p-2"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm rounded-full p-2"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
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
              </div>
            </motion.div>
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default Projects;

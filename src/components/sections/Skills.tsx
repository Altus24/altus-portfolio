import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Three.js", level: 75 },
      ],
    },
    {
      title: t("skills.styling"),
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "CSS/SASS", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "Styled Components", level: 80 },
      ],
    },
    {
      title: t("skills.tools"),
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Webpack/Vite", level: 80 },
        { name: "Testing", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-mono">02.</span>
          <h2 className="text-3xl font-display font-bold">{t("skills.title")}</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass rounded-xl p-6 card-hover"
              data-hover
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-gradient">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    className="flex items-center py-2 px-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

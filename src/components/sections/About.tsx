import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-3xl font-display font-bold">{t("about.title")}</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t("about.description1")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.description2")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.description3")}
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "React"].map(
                (tech, i) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="relative group" data-hover>
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative overflow-hidden rounded-lg border-2 border-primary/50">
                <div className="aspect-square bg-gradient-to-br from-cosmic-violet/30 via-cosmic-blue/30 to-cosmic-cyan/30 flex items-center justify-center">
                  <div className="text-8xl font-display font-bold text-gradient">AI</div>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="about" className=" relative" ref={ref}>
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

        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-2 md:order-1 md:flex-1 max-w-2xl"
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

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2 md:flex-shrink-0"
          >
            <div className="relative group max-w-sm mx-auto md:mx-0" data-hover>
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative overflow-hidden rounded-lg border-2 border-primary/50">
                <img
                  src="/about.webp"
                  alt="Aldana Ingrassia"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

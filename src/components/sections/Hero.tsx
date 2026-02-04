import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-primary font-mono text-sm mb-6"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
  className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 relative text-gradient "
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 1.2 }}
>
  Aldana Ingrassia.

  {/* Partículas orbitando */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(12)].map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 120 + (i % 3) * 40;
      return (
        <motion.span
          key={i}
          className="absolute w-1 h-2 bg-primary rounded-full opacity-100 blur-sm"
          animate={{
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
          style={{
            left: "50%",
            top: "50%",
          }}
        />
      );
    })}
  </div>
</motion.h1>

          <motion.h2
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-muted-foreground mb-8"
          >
            {t("hero.role")}
          </motion.h2>

          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-12"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm rounded-lg glow-effect hover:shadow-hover transition-all"
              data-hover
            >
              {t("hero.viewWork")}
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-all"
              data-hover
            >
              {t("hero.contactMe")}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        data-hover
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;

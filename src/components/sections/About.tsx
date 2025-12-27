import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-3xl font-display font-bold">Sobre Mí</h2>
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
              ¡Hola! Soy Aldana, una desarrolladora frontend apasionada que ama convertir problemas 
              complejos en diseños simples, hermosos e intuitivos. Mi camino en el desarrollo web 
              comenzó en 2018, y desde entonces, he tenido el privilegio de trabajar en 
              <span className="text-primary"> startups</span>, 
              <span className="text-accent"> agencias</span> y 
              <span className="text-secondary"> grandes corporaciones</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque principal actualmente es construir productos accesibles e inclusivos 
              y experiencias digitales. Disfruto creando cosas que viven en internet, 
              ya sean sitios web, aplicaciones o cualquier cosa intermedia.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "GraphQL"].map(
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

          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

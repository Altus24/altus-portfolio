import { motion } from "framer-motion";

const Footer = () => {
  // Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-muted-foreground"
        >
          <p>
            Diseñado y Desarrollado por{" "}
            <span className="text-primary">Aldana Ingrassia</span>
          </p>
          
          {/* Aquí usamos la variable dinámica */}
          <p>© {currentYear} Todos los derechos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
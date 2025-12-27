import { motion } from "framer-motion";

const Footer = () => {
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
            Designed & Built by{" "}
            <span className="text-primary">Aldana Ingrassia</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available for work
          </p>
          <p>© 2024 All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

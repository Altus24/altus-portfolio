import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:aldana@ejemplo.com", label: "Email" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te responderé pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-3xl font-display font-bold">Contacto</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">Trabajemos juntos</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Actualmente estoy abierta a nuevas oportunidades y colaboraciones. Ya sea que tengas 
              una pregunta, una idea de proyecto, o simplemente quieras saludar, mi bandeja de entrada 
              siempre está abierta.
            </p>

            <div className="flex gap-4 mb-8">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  data-hover
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <div className="glass rounded-lg p-6">
              <p className="text-sm font-mono text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:aldana@ejemplo.com"
                className="text-foreground hover:text-primary transition-colors"
                data-hover
              >
                aldana@ejemplo.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-mono text-sm rounded-lg glow-effect hover:shadow-hover transition-all flex items-center justify-center gap-2"
                data-hover
              >
                <Send size={18} />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

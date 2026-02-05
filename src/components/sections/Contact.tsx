import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { t } = useTranslation();

  const socials = [
    { icon: Github, href: "https://github.com/Altus24", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aldanaingrassia/", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:aldu.ing@gmail.com", label: "Email" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `*Nuevo mensaje desde el portfolio*%0A%0A👤 *Nombre:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A💬 *Mensaje:*%0A${formData.message}`;

    // Número de WhatsApp (sin el +)
    const whatsappNumber = "5492616541624";

    // Crear la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');

    toast.success(t("contact.successMessage"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className=" relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-3xl font-display font-bold">{t("contact.title")}</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">{t("contact.subtitle")}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("contact.description")}
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
              <p className="text-sm font-mono text-muted-foreground mb-2">{t("contact.emailLabel")}</p>
              <a
                href="mailto:aldu.ing@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
                data-hover
              >
                aldu.ing@gmail.com
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
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono text-sm resize-none"
                  placeholder={t("contact.messagePlaceholder")}
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
                {t("contact.sendMessage")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

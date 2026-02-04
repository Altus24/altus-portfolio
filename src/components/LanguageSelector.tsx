import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Icon } from "@iconify/react"; // Asegúrate de tener @iconify/react instalado

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  // Icono de bandera circular según el idioma actual
  const flagIcon =
    language === "es" ? "circle-flags:es" : "circle-flags:us-betsy-ross";

  // Código del idioma en mayúsculas (ES / US)
  const languageCode = language === "es" ? "ES" : "US";

  // Nombre completo del idioma opuesto para accesibilidad
  const oppositeLanguage = language === "es" ? "English" : "Español";

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm font-mono rounded hover:bg-primary/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Cambiar a ${oppositeLanguage} / Switch to ${oppositeLanguage}`}
    >
      {/* Bandera circular */}
      <span className="text-2xl" aria-hidden="true">
        <Icon icon={flagIcon} />
      </span>

      {/* Código del idioma */}
      <span className="tracking-wider">{languageCode}</span>
    </motion.button>
  );
}
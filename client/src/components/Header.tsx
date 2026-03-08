import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Обо мне", href: "#about" },
    { name: "Направления", href: "#platforms" },
    { name: "Как проходят уроки", href: "#format" },
    { name: "Почему IT?", href: "#why" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <div className="bg-primary/10 p-2 rounded-xl">
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl text-foreground">
            IT-Репетитор
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="px-6 py-2.5 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Записаться
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border p-4 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium p-2 text-foreground/80 hover:bg-primary/5 rounded-xl hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={scrollToContact}
              className="w-full py-3 mt-2 bg-primary text-white font-semibold rounded-xl shadow-md"
            >
              Записаться на урок
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

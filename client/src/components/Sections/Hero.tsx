import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="blob-shape bg-primary/20 w-[500px] h-[500px] -top-20 -right-20"></div>
      <div className="blob-shape bg-secondary/20 w-[400px] h-[400px] bottom-0 -left-20" style={{ animationDelay: '2s' }}></div>
      <div className="blob-shape bg-accent/20 w-[300px] h-[300px] top-40 left-1/3" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-sm border border-primary/10 text-primary font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>Для детей и подростков</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance mb-6">
              Откройте мир <span className="text-gradient">программирования</span> для вашего ребенка
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed">
              Индивидуальные онлайн-занятия, где мы не просто пишем код, а учимся мыслить логически, создавать собственные игры и сайты.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                Начать обучение
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground text-lg font-bold rounded-2xl shadow-md shadow-black/5 border border-border/50 hover:bg-gray-50 transition-all duration-300"
              >
                Узнать больше
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span>Первый урок<br/>со скидкой</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <span className="font-bold text-lg">3+</span>
                </div>
                <span>Раза в неделю =<br/>Специальная цена</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* happy kid learning to code */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Ребенок увлеченно учится программировать" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-12 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎮</div>
                <div>
                  <div className="font-bold font-display">Roblox & Scratch</div>
                  <div className="text-xs text-muted-foreground">Игровое обучение</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-12 bg-white p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">💻</div>
                <div>
                  <div className="font-bold font-display">Web-разработка</div>
                  <div className="text-xs text-muted-foreground">HTML, CSS, JS</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

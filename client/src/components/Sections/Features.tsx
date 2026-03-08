import { motion } from "framer-motion";
import { Smile, Target, MessageCircle, HeartHandshake, Lightbulb, PenTool } from "lucide-react";

export function Features() {
  const features = [
    { icon: <Smile className="w-6 h-6" />, title: "Игровой формат", desc: "Учимся играя, без скучных лекций" },
    { icon: <Target className="w-6 h-6" />, title: "Пошаговое объяснение", desc: "Сложные темы простым языком" },
    { icon: <MessageCircle className="w-6 h-6" />, title: "Связь с родителями", desc: "Отчеты о прогрессе и зонах роста" },
    { icon: <HeartHandshake className="w-6 h-6" />, title: "Доверительная атмосфера", desc: "Ребенок не боится ошибаться" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Осознанное обучение", desc: "Понимаем зачем нужна каждая строчка кода" },
    { icon: <PenTool className="w-6 h-6" />, title: "Собственные проекты", desc: "Создаем портфолио с первых уроков" },
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Что я предлагаю</h2>
          <p className="text-primary-foreground/80 text-lg">Каждое занятие продумано до мелочей для максимальной пользы и интереса</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                {feat.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{feat.title}</h3>
              <p className="text-primary-foreground/80">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

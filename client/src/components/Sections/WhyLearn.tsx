import { motion } from "framer-motion";
import { Brain, Wrench, Calculator, Palette, MonitorSmartphone, Trophy } from "lucide-react";

export function WhyLearn() {
  const benefits = [
    { title: "Логическое мышление", desc: "Умение разбивать сложные задачи на простые шаги.", icon: <Brain className="w-8 h-8" />, color: "bg-blue-100 text-blue-600" },
    { title: "Решение проблем", desc: "Учит анализировать и не бояться ошибок в коде и жизни.", icon: <Wrench className="w-8 h-8" />, color: "bg-orange-100 text-orange-600" },
    { title: "Математика", desc: "Заметное улучшение навыков через практическое применение.", icon: <Calculator className="w-8 h-8" />, color: "bg-purple-100 text-purple-600" },
    { title: "Творчество", desc: "Развивает креативность при создании собственных проектов.", icon: <Palette className="w-8 h-8" />, color: "bg-pink-100 text-pink-600" },
    { title: "Цифровая грамотность", desc: "Подготовка ребенка к успешному будущему в IT-мире.", icon: <MonitorSmartphone className="w-8 h-8" />, color: "bg-cyan-100 text-cyan-600" },
    { title: "Уверенность", desc: "Повышение самооценки за счет видимых результатов труда.", icon: <Trophy className="w-8 h-8" />, color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Почему стоит начать изучать программирование</h2>
          <p className="text-lg text-foreground/70">Это не просто модный навык, а фундаментальная база для развития мозга вашего ребенка.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl border border-border/50 hover:shadow-lg hover:border-transparent transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

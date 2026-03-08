import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      value: "3+ лет",
      label: "успешной практики",
      color: "bg-primary/10"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      value: "1500+",
      label: "проведенных занятий",
      color: "bg-secondary/10"
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      value: "100%",
      label: "индивидуальный подход",
      color: "bg-accent/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Обо мне и моем подходе</h2>
          <p className="text-lg text-foreground/70">
            Я помогаю детям не просто изучать программирование, а понимать, как оно работает, 
            и применять знания на практике. Создаем игры, сайты и интерактивные проекты в понятной 
            и комфортной для ребенка форме.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-20 h-20 mx-auto rounded-2xl ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-display font-bold mb-2 text-foreground">{stat.value}</div>
              <div className="text-foreground/60 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

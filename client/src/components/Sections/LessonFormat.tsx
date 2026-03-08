import { motion } from "framer-motion";
import { Clock, Play, BookOpen, MessageSquare, CheckCircle2 } from "lucide-react";

export function LessonFormat() {
  const steps = [
    { time: "3-5 минут", title: "Приветствие и настрой", desc: "Обсуждаем цели и план занятия, создаем позитивный настрой.", icon: <Play className="w-5 h-5" />, color: "bg-blue-500" },
    { time: "5-10 минут", title: "Разбор домашнего задания", desc: "Проверяем успехи, отвечаем на возникшие вопросы.", icon: <CheckCircle2 className="w-5 h-5" />, color: "bg-green-500" },
    { time: "30-40 минут", title: "Новая тема и практика", desc: "Пишем код, создаем проекты, применяем теорию в деле.", icon: <BookOpen className="w-5 h-5" />, color: "bg-primary" },
    { time: "3-5 минут", title: "Обсуждение", desc: "Выдаем новое ДЗ и проговариваем возможные сложности.", icon: <MessageSquare className="w-5 h-5" />, color: "bg-secondary" },
    { time: "3-5 минут", title: "Итоги и рефлексия", desc: "Проверяем понимание, обсуждаем впечатления от урока.", icon: <Clock className="w-5 h-5" />, color: "bg-accent" },
  ];

  return (
    <section id="format" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white rounded-full shadow-sm border border-border text-primary font-bold mb-6">
            <Clock className="w-5 h-5" />
            <span>Длительность: 50 минут</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Структура идеального урока</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] sm:left-[50%] top-0 bottom-0 w-1 bg-border rounded-full transform sm:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 ${
                  i % 2 === 0 ? 'sm:flex-row-reverse text-left sm:text-right' : 'text-left'
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full pl-16 sm:pl-0">
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 hover:shadow-xl transition-shadow duration-300">
                    <div className={`text-sm font-bold mb-2 ${step.color.replace('bg-', 'text-')}`}>{step.time}</div>
                    <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.desc}</p>
                  </div>
                </div>

                {/* Icon in Center */}
                <div className="absolute sm:relative left-0 sm:left-auto flex-shrink-0 w-14 h-14 rounded-full border-4 border-slate-50 z-10 text-white flex items-center justify-center shadow-lg transform transition-transform hover:scale-110" style={{ backgroundColor: `var(--${step.color.replace('bg-', '')})`, ...((step.color.includes('blue') || step.color.includes('green')) ? { backgroundColor: step.color === 'bg-blue-500' ? '#3b82f6' : '#22c55e'} : {}) }}>
                  {/* Tailwind arbitrary fallback for standard colors if variables missing, though custom vars are safer. Setting class directly works in Tailwind */}
                  <div className={`absolute inset-0 rounded-full ${step.color}`}></div>
                  <div className="relative z-10">{step.icon}</div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

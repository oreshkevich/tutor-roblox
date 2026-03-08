import { motion } from "framer-motion";
import { Monitor, Gamepad2, Blocks } from "lucide-react";

export function Platforms() {
  const platforms = [
    {
      id: "scratch",
      title: "Scratch",
      description: "Идеальный старт для самых младших. Изучаем базовые концепции алгоритмов, создавая яркие анимации и 2D-игры из визуальных блоков.",
      icon: <Blocks className="w-10 h-10" />,
      color: "from-orange-400 to-amber-500",
      shadow: "shadow-orange-500/20",
      age: "7-10 лет"
    },
    {
      id: "roblox",
      title: "Roblox Studio (Lua)",
      description: "Создание полноценных 3D-миров и игр. Учимся писать настоящий код на языке Lua, проектировать уровни и монетизировать проекты.",
      icon: <Gamepad2 className="w-10 h-10" />,
      color: "from-red-500 to-rose-600",
      shadow: "shadow-red-500/20",
      age: "10-14 лет"
    },
    {
      id: "web",
      title: "Web-разработка",
      description: "HTML, CSS и JavaScript. Учимся верстать стильные сайты, делать их интерактивными и готовимся к реальным IT-профессиям.",
      icon: <Monitor className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/20",
      age: "12+ лет"
    }
  ];

  return (
    <section id="platforms" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Направления обучения</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Программы адаптируются под возраст и уровень ученика, начиная от визуального кодирования и заканчивая профессиональными языками.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-[2rem] p-8 shadow-xl ${platform.shadow} border border-border/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-10 rounded-bl-[100px] -z-0 group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} text-white flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                {platform.icon}
              </div>
              
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-bold text-gray-600 mb-4">
                {platform.age}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{platform.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

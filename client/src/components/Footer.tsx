import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl">
              IT-Репетитор
            </span>
          </div>

          <div className="text-white/60 text-sm text-center md:text-right">
            <p>Онлайн-репетитор по программированию для детей и подростков.</p>
            <p className="mt-2">© {new Date().getFullYear()} Все права защищены.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

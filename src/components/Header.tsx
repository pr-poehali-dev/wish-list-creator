import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-xl font-bold">Мои Мечты</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('wishes')} className="text-sm font-medium hover:text-primary transition-colors">
              Желания
            </button>
            <button onClick={() => scrollToSection('achieved')} className="text-sm font-medium hover:text-primary transition-colors">
              Достигнутое
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
            Связаться
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

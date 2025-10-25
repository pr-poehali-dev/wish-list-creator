import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroProps {
  totalWishes: number;
  achievedCount: number;
  progressPercent: number;
}

const Hero = ({ totalWishes, achievedCount, progressPercent }: HeroProps) => {
  const scrollToWishes = () => {
    const element = document.getElementById('wishes');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Визуализируй. Мечтай. Достигай.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Каждая мечта заслуживает быть увиденной. Здесь собраны мои желания, цели и достижения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToWishes} className="text-lg">
              Посмотреть желания
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Связаться
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">{totalWishes}</div>
              <div className="text-sm text-muted-foreground">Желаний</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">{achievedCount}</div>
              <div className="text-sm text-muted-foreground">Достигнуто</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-primary mb-2">{Math.round(progressPercent)}%</div>
              <div className="text-sm text-muted-foreground">Прогресс</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
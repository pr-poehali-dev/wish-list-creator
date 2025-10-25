import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WishCard from "@/components/WishCard";
import ContactForm from "@/components/ContactForm";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const initialWishes = [
    {
      id: 1,
      title: "Путешествие в Японию",
      description: "Увидеть сакуру, посетить древние храмы и погрузиться в культуру",
      image: "https://cdn.poehali.dev/projects/1862deec-fa9b-4687-b7ff-58c573149475/files/084e9f4d-2dcd-49bd-8aad-2d4b975385ad.jpg",
      category: "Путешествия",
      achieved: false
    },
    {
      id: 2,
      title: "Выучить игру на гитаре",
      description: "Освоить базовые аккорды и сыграть любимые песни",
      image: "https://cdn.poehali.dev/projects/1862deec-fa9b-4687-b7ff-58c573149475/files/fabec3df-d60b-4f43-8900-8e086dbf1f2f.jpg",
      category: "Хобби",
      achieved: true
    },
    {
      id: 3,
      title: "Написать книгу",
      description: "Создать художественное произведение и опубликовать",
      image: "https://cdn.poehali.dev/projects/1862deec-fa9b-4687-b7ff-58c573149475/files/4be3e77a-abe7-4b0d-a134-74f27dac03ab.jpg",
      category: "Творчество",
      achieved: false
    },
    {
      id: 4,
      title: "Марафон 42 км",
      description: "Пробежать полный марафон и преодолеть себя",
      image: "/placeholder.svg",
      category: "Спорт",
      achieved: true
    },
    {
      id: 5,
      title: "Свой бизнес",
      description: "Запустить собственный проект и помогать людям",
      image: "/placeholder.svg",
      category: "Карьера",
      achieved: false
    },
    {
      id: 6,
      title: "Выучить испанский",
      description: "Свободно говорить на испанском языке",
      image: "/placeholder.svg",
      category: "Образование",
      achieved: true
    }
  ];

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wishes');
    return saved ? JSON.parse(saved) : initialWishes;
  });

  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  const toggleAchieved = (id: number) => {
    setWishes(wishes.map(wish => 
      wish.id === id ? { ...wish, achieved: !wish.achieved } : wish
    ));
  };

  const achievedCount = wishes.filter(w => w.achieved).length;
  const progressPercent = (achievedCount / wishes.length) * 100;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero 
        totalWishes={wishes.length}
        achievedCount={achievedCount}
        progressPercent={progressPercent}
      />
      
      <section id="wishes" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Мои Желания</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Визуализация помогает мне двигаться к целям. Каждая карточка — это шаг к мечте.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishes.map((wish) => (
              <WishCard key={wish.id} {...wish} onToggle={() => toggleAchieved(wish.id)} />
            ))}
          </div>
        </div>
      </section>

      <section id="achieved" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Достигнутое</h2>
            <p className="text-lg text-muted-foreground">
              Каждое достижение — это повод гордиться собой
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg animate-scale-in">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Общий прогресс</span>
                <span className="text-2xl font-bold text-primary">{achievedCount} из {wishes.length}</span>
              </div>
              <Progress value={progressPercent} className="h-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wishes.filter(w => w.achieved).map((wish) => (
                <div key={wish.id} className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{wish.title}</h3>
                    <p className="text-sm text-muted-foreground">{wish.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Мои Мечты. Визуализируй свои цели и достигай их.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
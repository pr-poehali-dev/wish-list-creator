import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за интерес. Свяжусь с вами в ближайшее время.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-lg text-muted-foreground">
            Есть вопросы или предложения? Буду рад общению!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
          <div>
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Ваше сообщение"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-32"
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Отправить сообщение
            <Icon name="Send" className="ml-2" size={18} />
          </Button>
        </form>

        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="icon">
            <Icon name="Github" size={20} />
          </Button>
          <Button variant="outline" size="icon">
            <Icon name="Linkedin" size={20} />
          </Button>
          <Button variant="outline" size="icon">
            <Icon name="Mail" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

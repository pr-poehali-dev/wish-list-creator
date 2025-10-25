import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WishCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  achieved?: boolean;
}

const WishCard = ({ title, description, image, category, achieved = false }: WishCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in">
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {achieved && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary text-primary-foreground">✨ Достигнуто</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <Badge variant="secondary" className="mb-3">{category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default WishCard;

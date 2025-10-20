import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  imageUrl?: string;
  readTime?: string;
  slug?: string;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  categoryColor = "primary",
  imageUrl,
  readTime = "5 min read",
  slug = "#",
}: ArticleCardProps) => {
  return (
    <Link to={slug}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 h-full">
        {imageUrl && (
          <div className="overflow-hidden aspect-video">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        <CardHeader className="space-y-2">
          <Badge className={`w-fit bg-${categoryColor}/10 text-${categoryColor} border-${categoryColor}/20`}>
            {category}
          </Badge>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readTime}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ArticleCard;

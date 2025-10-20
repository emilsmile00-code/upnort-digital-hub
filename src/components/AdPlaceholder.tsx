import { Card } from "@/components/ui/card";

interface AdPlaceholderProps {
  size?: "banner" | "square" | "skyscraper";
  className?: string;
}

const AdPlaceholder = ({ size = "banner", className = "" }: AdPlaceholderProps) => {
  const sizeClasses = {
    banner: "h-24 w-full",
    square: "h-64 w-64",
    skyscraper: "h-96 w-40",
  };

  return (
    <Card className={`${sizeClasses[size]} ${className} bg-muted/50 border-dashed border-2 flex items-center justify-center`}>
      <p className="text-muted-foreground text-sm font-medium">Ad Space</p>
    </Card>
  );
};

export default AdPlaceholder;

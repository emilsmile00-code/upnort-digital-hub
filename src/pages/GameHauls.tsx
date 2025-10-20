import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Gamepad2 } from "lucide-react";

const GameHauls = () => {
  const articles = [
    {
      title: "The Future of Cloud Gaming: Is It Finally Here?",
      excerpt: "Exploring how 5G and edge computing are revolutionizing the gaming industry.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "Top 10 Indie Games That Deserve Your Attention",
      excerpt: "Hidden gems from independent developers that offer unique gaming experiences.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
      readTime: "8 min read",
    },
    {
      title: "Esports Championship Highlights: Record-Breaking Finals",
      excerpt: "Recap of the most intense competitive gaming moments from this season's championships.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "Next-Gen Console Comparison: Which Should You Buy?",
      excerpt: "Breaking down specs, exclusives, and value to help you make the right choice.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&auto=format&fit=crop",
      readTime: "10 min read",
    },
    {
      title: "Virtual Reality Gaming in 2025: What's New",
      excerpt: "The latest VR headsets and games that are pushing the boundaries of immersion.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "Mobile Gaming Revenue Surpasses PC and Console Combined",
      excerpt: "Analyzing the explosive growth of mobile gaming and what it means for the industry.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="gradient-gaming py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">GameHauls</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your source for gaming news, esports updates, and gameplay analysis
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <AdPlaceholder size="banner" className="mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>

          <aside className="lg:w-80 space-y-6">
            <AdPlaceholder size="square" />
            <AdPlaceholder size="square" />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameHauls;

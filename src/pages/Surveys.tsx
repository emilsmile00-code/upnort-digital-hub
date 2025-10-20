import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Gift } from "lucide-react";

const Surveys = () => {
  const articles = [
    {
      title: "5 Legitimate Survey Sites That Actually Pay in 2025",
      excerpt: "Skip the scams and discover verified platforms where you can earn real money.",
      category: "Surveys & Earn",
      categoryColor: "earn",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "Passive Income Apps: Which Ones Are Worth Your Time",
      excerpt: "A comprehensive review of apps that let you earn while doing almost nothing.",
      category: "Surveys & Earn",
      categoryColor: "earn",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "Cashback Strategies: Maximize Your Online Shopping Rewards",
      excerpt: "Expert tips for stacking rewards and earning the most from your purchases.",
      category: "Surveys & Earn",
      categoryColor: "earn",
      imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "Gig Economy Guide: Flexible Ways to Boost Your Income",
      excerpt: "From delivery apps to freelance platforms, explore your earning options.",
      category: "Surveys & Earn",
      categoryColor: "earn",
      imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="gradient-earn py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Gift className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">Surveys & Earn</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover legitimate ways to earn money online
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

export default Surveys;

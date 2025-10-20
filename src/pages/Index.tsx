import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const featuredArticles = [
    {
      title: "The Future of Cloud Gaming: Is It Finally Here?",
      excerpt: "Exploring how 5G and edge computing are revolutionizing the gaming industry and making high-end gaming accessible to everyone.",
      category: "GameHauls",
      categoryColor: "gaming",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop",
      readTime: "6 min read",
      slug: "/gamehauls",
    },
    {
      title: "DeFi 2.0: What's Next for Decentralized Finance",
      excerpt: "Breaking down the latest innovations in DeFi protocols, yield farming strategies, and the evolution of crypto lending.",
      category: "Crypto & Web3",
      categoryColor: "crypto",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      readTime: "8 min read",
      slug: "/crypto",
    },
    {
      title: "Top Streaming Releases This Month You Can't Miss",
      excerpt: "From blockbuster sequels to indie darlings, here's what's dominating screens this month across all major platforms.",
      category: "Movies",
      categoryColor: "movies",
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
      readTime: "5 min read",
      slug: "/movies",
    },
    {
      title: "5 Legitimate Survey Sites That Actually Pay in 2025",
      excerpt: "Skip the scams and discover verified platforms where you can earn real money by sharing your opinions online.",
      category: "Surveys & Earn",
      categoryColor: "earn",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      readTime: "7 min read",
      slug: "/surveys",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
        <img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
            Welcome to UpNort
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
            Your digital hub for trending topics in gaming, crypto, entertainment, and online earnings
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/gamehauls">
              <Button size="lg" className="gap-2 gradient-gaming text-white border-0">
                Explore Gaming <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/crypto">
              <Button size="lg" variant="outline" className="gap-2">
                Discover Crypto <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AdPlaceholder size="banner" className="mb-12" />

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Featured Articles</h2>
            <Link to="/gamehauls">
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        <AdPlaceholder size="banner" className="mb-16" />

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 gradient-gaming rounded-full" />
              Latest in Gaming
            </h2>
            <div className="space-y-4">
              <ArticleCard
                title="New Battle Royale Takes the Gaming World by Storm"
                excerpt="This indie developer just launched a game that's challenging the giants of the genre."
                category="GameHauls"
                categoryColor="gaming"
                readTime="4 min read"
                slug="/gamehauls"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 gradient-crypto rounded-full" />
              Crypto Updates
            </h2>
            <div className="space-y-4">
              <ArticleCard
                title="Bitcoin Halving: What It Means for Investors"
                excerpt="Understanding the mechanics and potential impact of the upcoming Bitcoin halving event."
                category="Crypto & Web3"
                categoryColor="crypto"
                readTime="6 min read"
                slug="/crypto"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">Start Earning Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover legitimate ways to earn money online through surveys, offers, and more
          </p>
          <Link to="/offerwall">
            <Button size="lg" variant="secondary" className="gap-2">
              Visit Offerwall <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;

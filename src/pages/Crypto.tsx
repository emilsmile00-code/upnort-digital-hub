import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Coins } from "lucide-react";

const Crypto = () => {
  const articles = [
    {
      title: "DeFi 2.0: What's Next for Decentralized Finance",
      excerpt: "Breaking down the latest innovations in DeFi protocols and yield farming strategies.",
      category: "Crypto & Web3",
      categoryColor: "crypto",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      readTime: "8 min read",
    },
    {
      title: "NFT Market Recovery: Signs of a New Bull Run",
      excerpt: "Analyzing the latest trends and what they mean for digital art collectors.",
      category: "Crypto & Web3",
      categoryColor: "crypto",
      imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "Layer 2 Solutions: Scaling Ethereum's Future",
      excerpt: "Comparing the top Layer 2 networks and their impact on transaction costs.",
      category: "Crypto & Web3",
      categoryColor: "crypto",
      imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "Blockchain Gaming: Play-to-Earn Models Explained",
      excerpt: "How blockchain technology is revolutionizing the gaming economy.",
      category: "Crypto & Web3",
      categoryColor: "crypto",
      imageUrl: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format&fit=crop",
      readTime: "9 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="gradient-crypto py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Coins className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">Crypto & Web3</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Stay updated on blockchain, DeFi, and cryptocurrency trends
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

export default Crypto;

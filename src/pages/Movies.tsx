import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Film } from "lucide-react";

const Movies = () => {
  const articles = [
    {
      title: "Top Streaming Releases This Month You Can't Miss",
      excerpt: "From blockbuster sequels to indie darlings, here's what's dominating screens.",
      category: "Movies",
      categoryColor: "movies",
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "Behind the Scenes: How CGI is Changing Cinema",
      excerpt: "Exploring the cutting-edge technology bringing impossible scenes to life.",
      category: "Movies",
      categoryColor: "movies",
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop",
      readTime: "8 min read",
    },
    {
      title: "Oscar Predictions: Who Will Take Home Gold This Year",
      excerpt: "Our expert analysis of the top contenders across all major categories.",
      category: "Movies",
      categoryColor: "movies",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "The Rise of International Cinema in Hollywood",
      excerpt: "How global storytelling is reshaping American entertainment.",
      category: "Movies",
      categoryColor: "movies",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="gradient-movies py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Film className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">Movies & Entertainment</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your guide to films, streaming, and pop culture
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

export default Movies;

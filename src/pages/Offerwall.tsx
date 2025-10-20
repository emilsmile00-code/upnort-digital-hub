import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, DollarSign, Gift, Star, TrendingUp, Award } from "lucide-react";
import AdPlaceholder from "@/components/AdPlaceholder";

const Offerwall = () => {
  const offers = [
    {
      title: "Complete Survey Bundle",
      description: "Answer 5 quick surveys and earn instant rewards",
      reward: "$5.00",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Download & Try App",
      description: "Install our partner app and use for 3 days",
      reward: "$3.50",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      title: "Watch Video Series",
      description: "Watch 10 sponsored videos",
      reward: "$2.00",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Sign Up for Free Trial",
      description: "Start a free trial with our premium partner",
      reward: "$10.00",
      icon: Award,
      color: "text-purple-500",
    },
    {
      title: "Complete Shopping Task",
      description: "Make a purchase through our partner store",
      reward: "$7.50",
      icon: Gift,
      color: "text-pink-500",
    },
    {
      title: "Refer a Friend",
      description: "Invite friends and earn when they sign up",
      reward: "$5.00",
      icon: Zap,
      color: "text-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">Offerwall</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Complete offers, surveys, and tasks to earn real rewards
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AdPlaceholder size="banner" className="mb-12" />

        <div className="bg-card border border-border rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Earning Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-muted-foreground mb-2">Total Earned</p>
              <p className="text-4xl font-black text-primary">$0.00</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Completed Offers</p>
              <p className="text-4xl font-black text-secondary">0</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-2">Available Rewards</p>
              <p className="text-4xl font-black text-accent">12</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Available Offers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className={`w-8 h-8 ${offer.color}`} />
                    <span className="text-2xl font-black text-primary">{offer.reward}</span>
                  </div>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Start Offer</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <AdPlaceholder size="banner" />
      </div>

      <Footer />
    </div>
  );
};

export default Offerwall;

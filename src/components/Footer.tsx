import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                UpNort
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your digital hub for trending topics in technology, gaming, entertainment, crypto, and online earnings.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Sections</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/gamehauls" className="hover:text-foreground transition-colors">GameHauls</Link></li>
              <li><Link to="/crypto" className="hover:text-foreground transition-colors">Crypto & Web3</Link></li>
              <li><Link to="/movies" className="hover:text-foreground transition-colors">Movies & Entertainment</Link></li>
              <li><Link to="/surveys" className="hover:text-foreground transition-colors">Surveys & Earn</Link></li>
              <li><Link to="/offerwall" className="hover:text-foreground transition-colors">Offerwall</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">For Creators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/auth" className="hover:text-foreground transition-colors">Creator Login</Link></li>
              <li><Link to="/advertise" className="hover:text-foreground transition-colors">Advertise With Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UpNort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

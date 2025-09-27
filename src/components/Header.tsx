import { Search, Menu, User, Heart, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-card-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              WheelHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/browse" className="text-foreground hover:text-primary transition-colors">
              Browse
            </a>
            <a href="/compare" className="text-foreground hover:text-primary transition-colors">
              Compare
            </a>
            <a href="/tools" className="text-foreground hover:text-primary transition-colors">
              Tools
            </a>
            <a href="/showrooms" className="text-foreground hover:text-primary transition-colors">
              Showrooms
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md w-full mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search bikes, scooters, EVs..."
                className="pl-10 border-card-border focus:ring-primary"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="cta" size="sm" className="hidden md:flex">
              Sell Vehicle
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-card-border">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search vehicles..."
                  className="pl-10 border-card-border"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="/" className="text-foreground hover:text-primary py-2">
                  Home
                </a>
                <a href="/browse" className="text-foreground hover:text-primary py-2">
                  Browse
                </a>
                <a href="/compare" className="text-foreground hover:text-primary py-2">
                  Compare
                </a>
                <a href="/tools" className="text-foreground hover:text-primary py-2">
                  Tools
                </a>
                <a href="/showrooms" className="text-foreground hover:text-primary py-2">
                  Showrooms
                </a>
              </nav>
              <Button variant="cta" size="sm">
                Sell Vehicle
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
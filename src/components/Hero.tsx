import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Shield, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Two-Wheeler
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover, compare, and buy from thousands of bikes, scooters, and EVs
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                <Input
                  placeholder="Search by brand, model, or type..."
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>
              <Button variant="cta" size="lg" className="md:w-auto">
                Search Vehicles
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-white/80">Vehicles Listed</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Shield className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-white/80">Verified Dealers</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <Star className="h-8 w-8 text-accent" />
              <div className="text-left">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-white/80">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
      </div>
    </section>
  );
};

export default Hero;
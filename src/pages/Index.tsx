import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleGrid from "@/components/VehicleGrid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, MapPin, TrendingUp, Shield, Users, Star, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-vehicles.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-hero text-white overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-accent bg-clip-text text-transparent block">
                Two-Wheeler
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover, compare, and buy from thousands of bikes, scooters, and EVs
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="px-8">
                Browse Vehicles
              </Button>
              <Button variant="hero" size="lg" className="px-8">
                Compare Models
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50K+</div>
                <div className="text-white/80 text-sm">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-white/80 text-sm">Dealers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.8★</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <VehicleGrid title="Featured Vehicles" limit={6} />

      {/* Tools Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Tools & Features</h2>
            <p className="text-muted-foreground text-lg">
              Make informed decisions with our comprehensive tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">EMI Calculator</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Calculate monthly payments for your dream vehicle
              </p>
              <Button variant="ghost" size="sm" className="text-primary">
                Try Now <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Price Trends</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Track price changes and get the best deals
              </p>
              <Button variant="ghost" size="sm" className="text-primary">
                View Trends <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Find Dealers</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Locate authorized dealers and showrooms near you
              </p>
              <Button variant="ghost" size="sm" className="text-primary">
                Find Now <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Insurance</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get comprehensive insurance quotes instantly
              </p>
              <Button variant="ghost" size="sm" className="text-primary">
                Get Quote <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose WheelHub?</h2>
            <p className="text-muted-foreground text-lg">
              India's most trusted two-wheeler marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Millions</h3>
              <p className="text-muted-foreground">
                Over 5 million happy customers have found their perfect vehicle through our platform
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Verified</h3>
              <p className="text-muted-foreground">
                All dealers and vehicles are thoroughly verified for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Experience</h3>
              <p className="text-muted-foreground">
                From search to purchase, we ensure the smoothest buying experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Ride?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers who found their dream vehicle with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="px-8">
              Start Browsing
            </Button>
            <Button variant="hero" size="lg" className="px-8">
              Sell Your Vehicle
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

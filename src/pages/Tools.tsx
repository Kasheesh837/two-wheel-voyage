import Header from "@/components/Header";
import EMICalculator from "@/components/EMICalculator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, MapPin, Shield, Fuel, Wrench } from "lucide-react";

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vehicle Tools & Calculators</h1>
          <p className="text-xl text-white/90">
            Smart tools to help you make informed decisions about your two-wheeler purchase
          </p>
        </div>
      </div>

      {/* EMI Calculator */}
      <section className="py-16 bg-background">
        <EMICalculator />
      </section>

      {/* Other Tools */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Helpful Tools</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for a smart vehicle purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-accent w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Fuel className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fuel Cost Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate monthly fuel expenses and compare running costs between different vehicles
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Get instant insurance quotes and compare policies from top insurers
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-accent w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resale Value Estimator</h3>
              <p className="text-muted-foreground mb-4">
                Check the current market value of your vehicle for selling or trading
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service Center Locator</h3>
              <p className="text-muted-foreground mb-4">
                Find authorized service centers and spare parts dealers near you
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon  
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-accent w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance Cost Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Estimate yearly maintenance costs and plan your vehicle budget
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loan Eligibility Check</h3>
              <p className="text-muted-foreground mb-4">
                Check your loan eligibility and get pre-approved offers from banks
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Assistance?</h2>
          <p className="text-xl mb-8 text-white/90">
            Our vehicle experts are here to help you make the best choice
          </p>
          <Button variant="cta" size="lg" className="px-8">
            Talk to Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Tools;

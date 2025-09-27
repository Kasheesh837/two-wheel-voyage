import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Fuel, Zap, Users, Gauge, Star } from "lucide-react";
import { useState } from "react";

interface CompareVehicle {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  fuelType: string;
  mileage: string;
  seating: number;
  rating: number;
  engineCapacity: string;
  maxPower: string;
  maxTorque: string;
  fuelTank: string;
  weight: string;
  wheelbase: string;
}

const mockVehicles: CompareVehicle[] = [
  {
    id: "1",
    name: "CBR 650R",
    brand: "Honda",
    price: "₹8.88 Lakh",
    image: "/api/placeholder/300/200",
    fuelType: "Petrol",
    mileage: "22 km/l",
    seating: 2,
    rating: 4.5,
    engineCapacity: "649cc",
    maxPower: "95 bhp",
    maxTorque: "64 Nm",
    fuelTank: "15.4L",
    weight: "208 kg",
    wheelbase: "1450 mm"
  },
  {
    id: "2",
    name: "KTM 390 Duke",
    brand: "KTM",
    price: "₹2.87 Lakh",
    image: "/api/placeholder/300/200",
    fuelType: "Petrol",
    mileage: "25 km/l",
    seating: 1,
    rating: 4.4,
    engineCapacity: "373cc",
    maxPower: "43 bhp",
    maxTorque: "37 Nm",
    fuelTank: "13.4L",
    weight: "167 kg",
    wheelbase: "1367 mm"
  }
];

const Compare = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<CompareVehicle[]>(mockVehicles);

  const removeVehicle = (id: string) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== id));
  };

  const addVehicle = () => {
    // In a real app, this would open a vehicle selection modal
    console.log("Add vehicle modal would open here");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Compare Vehicles</h1>
          <p className="text-white/90">
            Compare specifications, prices, and features side by side
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {selectedVehicles.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Gauge className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Start Comparing</h2>
              <p className="text-muted-foreground mb-6">
                Select vehicles to see a detailed side-by-side comparison
              </p>
              <Button variant="cta" onClick={addVehicle}>
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle to Compare
              </Button>
            </div>
          </div>
        ) : (
          // Comparison Table
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Vehicle Cards Header */}
              <div className="grid gap-6 mb-8" style={{ gridTemplateColumns: `repeat(${Math.min(selectedVehicles.length + 1, 4)}, 1fr)` }}>
                {selectedVehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="p-4 relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                      onClick={() => removeVehicle(vehicle.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.name}`}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    
                    <h3 className="font-semibold text-lg mb-1">
                      {vehicle.brand} {vehicle.name}
                    </h3>
                    
                    <div className="text-2xl font-bold text-primary mb-2">
                      {vehicle.price}
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{vehicle.rating}</span>
                    </div>
                    
                    <Badge className="w-fit">
                      {vehicle.fuelType === "Electric" ? (
                        <Zap className="h-3 w-3 mr-1" />
                      ) : (
                        <Fuel className="h-3 w-3 mr-1" />
                      )}
                      {vehicle.fuelType}
                    </Badge>
                  </Card>
                ))}
                
                {selectedVehicles.length < 4 && (
                  <Card className="p-4 border-dashed border-2 border-muted-foreground/30 flex items-center justify-center">
                    <Button variant="ghost" onClick={addVehicle} className="flex-col h-full">
                      <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
                      <span className="text-muted-foreground">Add Vehicle</span>
                    </Button>
                  </Card>
                )}
              </div>

              {/* Specifications Comparison */}
              <Card className="overflow-hidden">
                <div className="bg-muted px-6 py-4">
                  <h2 className="text-xl font-semibold">Detailed Specifications</h2>
                </div>
                
                <div className="divide-y divide-border">
                  {/* Engine Specs */}
                  <ComparisonSection title="Engine & Performance">
                    <ComparisonRow
                      label="Engine Capacity"
                      values={selectedVehicles.map(v => v.engineCapacity)}
                    />
                    <ComparisonRow
                      label="Max Power"
                      values={selectedVehicles.map(v => v.maxPower)}
                    />
                    <ComparisonRow
                      label="Max Torque"
                      values={selectedVehicles.map(v => v.maxTorque)}
                    />
                    <ComparisonRow
                      label="Mileage"
                      values={selectedVehicles.map(v => v.mileage)}
                    />
                  </ComparisonSection>

                  {/* Physical Specs */}
                  <ComparisonSection title="Dimensions & Weight">
                    <ComparisonRow
                      label="Fuel Tank Capacity"
                      values={selectedVehicles.map(v => v.fuelTank)}
                    />
                    <ComparisonRow
                      label="Kerb Weight"
                      values={selectedVehicles.map(v => v.weight)}
                    />
                    <ComparisonRow
                      label="Wheelbase"
                      values={selectedVehicles.map(v => v.wheelbase)}
                    />
                    <ComparisonRow
                      label="Seating Capacity"
                      values={selectedVehicles.map(v => `${v.seating} seater`)}
                    />
                  </ComparisonSection>
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {selectedVehicles.map((vehicle) => (
                  <Button key={vehicle.id} variant="cta">
                    Book Test Drive - {vehicle.brand} {vehicle.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ComparisonSectionProps {
  title: string;
  children: React.ReactNode;
}

const ComparisonSection = ({ title, children }: ComparisonSectionProps) => (
  <div className="px-6 py-4">
    <h3 className="font-semibold text-lg mb-4 text-primary">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

interface ComparisonRowProps {
  label: string;
  values: string[];
}

const ComparisonRow = ({ label, values }: ComparisonRowProps) => (
  <div className="grid gap-4" style={{ gridTemplateColumns: '200px 1fr' }}>
    <div className="font-medium text-muted-foreground">{label}</div>
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${values.length}, 1fr)` }}>
      {values.map((value, index) => (
        <div key={index} className="font-medium">
          {value}
        </div>
      ))}
    </div>
  </div>
);

export default Compare;
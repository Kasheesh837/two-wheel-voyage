import VehicleCard from "./VehicleCard";

// Mock data for vehicles
const mockVehicles = [
  {
    id: "1",
    name: "CBR 650R",
    brand: "Honda",
    price: "₹8.88 Lakh",
    originalPrice: "₹9.50 Lakh",
    image: "/api/placeholder/400/300",
    fuelType: "Petrol" as const,
    mileage: "22 km/l",
    seating: 2,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "Ather 450X",
    brand: "Ather",
    price: "₹1.49 Lakh",
    image: "/api/placeholder/400/300",
    fuelType: "Electric" as const,
    mileage: "116 km/charge",
    seating: 2,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "3",
    name: "Activa 6G",
    brand: "Honda",
    price: "₹72,000",
    image: "/api/placeholder/400/300",
    fuelType: "Petrol" as const,
    mileage: "60 km/l",
    seating: 2,
    rating: 4.6,
    reviews: 245,
  },
  {
    id: "4",
    name: "KTM 390 Duke",
    brand: "KTM",
    price: "₹2.87 Lakh",
    image: "/api/placeholder/400/300",
    fuelType: "Petrol" as const,
    mileage: "25 km/l",
    seating: 1,
    rating: 4.4,
    reviews: 156,
  },
  {
    id: "5",
    name: "iQube Electric",
    brand: "TVS",
    price: "₹1.08 Lakh",
    image: "/api/placeholder/400/300",
    fuelType: "Electric" as const,
    mileage: "75 km/charge",
    seating: 2,
    rating: 4.1,
    reviews: 67,
  },
  {
    id: "6",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    price: "₹1.84 Lakh",
    image: "/api/placeholder/400/300",
    fuelType: "Petrol" as const,
    mileage: "35 km/l",
    seating: 2,
    rating: 4.7,
    reviews: 312,
    isUsed: true,
    location: "Mumbai, Maharashtra"
  },
];

interface VehicleGridProps {
  title?: string;
  limit?: number;
}

const VehicleGrid = ({ title = "Featured Vehicles", limit }: VehicleGridProps) => {
  const vehiclesToShow = limit ? mockVehicles.slice(0, limit) : mockVehicles;

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground">
            Discover the best deals on two-wheelers from trusted dealers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesToShow.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>

        {limit && mockVehicles.length > limit && (
          <div className="text-center mt-8">
            <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Vehicles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleGrid;
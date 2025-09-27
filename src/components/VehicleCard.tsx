import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Fuel, Zap, Users, Star } from "lucide-react";
import { useState } from "react";

interface VehicleCardProps {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  fuelType: "Petrol" | "Electric" | "Hybrid";
  mileage: string;
  seating: number;
  rating: number;
  reviews: number;
  isUsed?: boolean;
  location?: string;
}

const VehicleCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  fuelType,
  mileage,
  seating,
  rating,
  reviews,
  isUsed = false,
  location
}: VehicleCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getFuelIcon = () => {
    switch (fuelType) {
      case "Electric":
        return <Zap className="h-4 w-4" />;
      case "Hybrid":
        return <Zap className="h-4 w-4" />;
      default:
        return <Fuel className="h-4 w-4" />;
    }
  };

  const getFuelColor = () => {
    switch (fuelType) {
      case "Electric":
        return "bg-green-100 text-green-800 border-green-200";
      case "Hybrid":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-orange-100 text-orange-800 border-orange-200";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group border border-card-border">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/90 hover:bg-white"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {isUsed && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
              Used
            </Badge>
          )}
          <Badge className={`${getFuelColor()} border`}>
            <div className="flex items-center space-x-1">
              {getFuelIcon()}
              <span>{fuelType}</span>
            </div>
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {brand} {name}
          </h3>
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        {/* Specs */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{seating} seater</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-primary">{price}</div>
            {originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button variant="vehicle" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="cta" size="sm" className="flex-1">
            Test Drive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
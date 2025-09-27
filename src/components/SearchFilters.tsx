import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface FilterProps {
  onFiltersChange?: (filters: any) => void;
}

const SearchFilters = ({ onFiltersChange }: FilterProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: "",
    fuelType: "",
    mileage: "",
    year: "",
    location: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    if (value && !activeFilters.includes(`${key}:${value}`)) {
      setActiveFilters([...activeFilters, `${key}:${value}`]);
    }
    
    onFiltersChange?.(newFilters);
  };

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters(activeFilters.filter(filter => filter !== filterToRemove));
    const [key] = filterToRemove.split(':');
    const newFilters = { ...filters, [key]: "" };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    const clearFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as any);
    setFilters(clearFilters);
    onFiltersChange?.(clearFilters);
  };

  return (
    <div className="bg-card border-b border-card-border">
      <div className="container mx-auto px-4 py-4">
        {/* Main Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
          <Select onValueChange={(value) => handleFilterChange("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bikes">Bikes</SelectItem>
              <SelectItem value="scooters">Scooters</SelectItem>
              <SelectItem value="evs">Electric Vehicles</SelectItem>
              <SelectItem value="used">Used Vehicles</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange("brand", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="yamaha">Yamaha</SelectItem>
              <SelectItem value="bajaj">Bajaj</SelectItem>
              <SelectItem value="tvs">TVS</SelectItem>
              <SelectItem value="hero">Hero</SelectItem>
              <SelectItem value="royal-enfield">Royal Enfield</SelectItem>
              <SelectItem value="ktm">KTM</SelectItem>
              <SelectItem value="ather">Ather</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange("priceRange", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50000">Under ₹50K</SelectItem>
              <SelectItem value="50000-100000">₹50K - ₹1L</SelectItem>
              <SelectItem value="100000-200000">₹1L - ₹2L</SelectItem>
              <SelectItem value="200000-500000">₹2L - ₹5L</SelectItem>
              <SelectItem value="500000+">Above ₹5L</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => handleFilterChange("fuelType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="petrol">Petrol</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Location"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="border-card-border"
          />

          <Button
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center space-x-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Advanced</span>
          </Button>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 p-4 bg-muted rounded-lg">
            <Select onValueChange={(value) => handleFilterChange("mileage", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Mileage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20-30">20-30 km/l</SelectItem>
                <SelectItem value="30-50">30-50 km/l</SelectItem>
                <SelectItem value="50+">50+ km/l</SelectItem>
                <SelectItem value="electric">Electric Range</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleFilterChange("year", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="older">Older</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Min Price (₹)"
              type="number"
              className="border-card-border"
            />

            <Input
              placeholder="Max Price (₹)"
              type="number"
              className="border-card-border"
            />
          </div>
        )}

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
            {activeFilters.map((filter) => {
              const [key, value] = filter.split(':');
              return (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <span>{key}: {value}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-destructive hover:text-destructive"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
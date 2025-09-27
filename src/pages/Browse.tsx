import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import VehicleGrid from "@/components/VehicleGrid";
import { Button } from "@/components/ui/button";
import { Grid, List, SortAsc } from "lucide-react";
import { useState } from "react";

const Browse = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-primary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Browse Vehicles</h1>
          <p className="text-white/90">
            Find your perfect two-wheeler from our extensive collection
          </p>
        </div>
      </div>

      {/* Filters */}
      <SearchFilters />

      {/* Results Header */}
      <div className="bg-card border-b border-card-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Showing 1,234 vehicles
              </h2>
              <p className="text-sm text-muted-foreground">
                Based on your search criteria
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-card-border rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary"
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="mileage">Best Mileage</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              {/* View Toggle */}
              <div className="flex border border-card-border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none border-l"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <VehicleGrid title="" />

      {/* Load More */}
      <div className="py-12 text-center">
        <Button variant="outline" size="lg" className="px-8">
          Load More Vehicles
        </Button>
      </div>
    </div>
  );
};

export default Browse;
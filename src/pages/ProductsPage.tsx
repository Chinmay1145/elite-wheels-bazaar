
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, allProducts } from "@/data/products";
import { Product } from "@/contexts/CartContext";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { formatCurrency } from "@/utils/formatters";

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 200000000]); // 0 to 20 crore
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Get all available brands
  const allBrands = Array.from(new Set(allProducts.map(product => product.brand)));

  // Load products based on category
  useEffect(() => {
    let categoryProducts: Product[] = [];
    
    if (category === "all") {
      categoryProducts = [...allProducts];
    } else if (category === "supercar" || category === "superbike" || category === "luxury") {
      categoryProducts = getProductsByCategory(category);
    } else {
      // Default to all products if category is not recognized
      categoryProducts = [...allProducts];
    }
    
    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
    
    // Reset filters when category changes
    setSearchQuery("");
    setSortBy("default");
    setPriceRange([0, 200000000]);
    setSelectedBrands([]);
  }, [category]);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by brands
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting by featured status or ID
        result.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, sortBy, priceRange, selectedBrands]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const getCategoryTitle = () => {
    switch (category) {
      case "supercar":
        return "Supercars";
      case "superbike":
        return "Superbikes";
      case "luxury":
        return "Luxury Cars";
      default:
        return "All Vehicles";
    }
  };

  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  return (
    <div className="container-custom mx-auto py-8">
      <h1 className="section-heading">{getCategoryTitle()}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar filters */}
        <div className="col-span-1 space-y-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block mb-2 text-sm font-medium">
                Search
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-sm mb-2">Price Range</h4>
              <div className="px-2">
                <Slider
                  min={minPrice}
                  max={maxPrice}
                  step={100000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-6"
                />
                <div className="flex justify-between text-sm">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
              </div>
            </div>
            
            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium text-sm mb-2">Brands</h4>
              <div className="space-y-2">
                {allBrands.map((brand) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              className="w-full py-2 text-sm text-center text-primary hover:text-primary/80 transition-colors"
              onClick={() => {
                setSearchQuery("");
                setPriceRange([minPrice, maxPrice]);
                setSelectedBrands([]);
                setSortBy("default");
              }}
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="col-span-1 lg:col-span-3">
          {/* Sorting and results count */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} vehicles
            </p>
            <div className="flex items-center space-x-2 w-full sm:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger aria-label="Sort by">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

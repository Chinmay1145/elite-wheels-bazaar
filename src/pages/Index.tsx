
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  const categories = [
    {
      name: "Supercars",
      description: "Experience unparalleled performance and engineering mastery with our collection of the world's most exclusive supercars.",
      image: "/placeholder.svg",
      link: "/products/supercar",
    },
    {
      name: "Superbikes",
      description: "Feel the adrenaline rush with our selection of cutting-edge superbikes that push the boundaries of two-wheeled performance.",
      image: "/placeholder.svg",
      link: "/products/superbike",
    },
    {
      name: "Luxury Cars",
      description: "Indulge in ultimate comfort and prestige with our curated selection of the finest luxury automobiles.",
      image: "/placeholder.svg",
      link: "/products/luxury",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Exceptional Vehicles for Exceptional Lives"
          subtitle="Explore our collection of the world's finest supercars, superbikes, and luxury vehicles."
        />

        {/* Featured Products */}
        <section className="container-custom mx-auto py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-heading">Featured Vehicles</h2>
            <Link to="/products/all">
              <Button variant="link" className="group">
                View all 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} featured />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-accent/10 py-16">
          <div className="container-custom mx-auto">
            <h2 className="section-heading text-center mb-12">Explore Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-muted overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Link to={category.link}>
                      <Button variant="outline" className="w-full">
                        Browse {category.name}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="container-custom mx-auto py-16">
          <h2 className="section-heading text-center mb-12">Why Choose Elite Wheels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Vehicles</h3>
              <p className="text-muted-foreground">Every vehicle in our collection is 100% authentic with verified history and documentation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">Our payment process is highly secure with multiple verification steps to ensure safe transactions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
              <p className="text-muted-foreground">We offer premium delivery services across India with specialized transportation for luxury vehicles.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

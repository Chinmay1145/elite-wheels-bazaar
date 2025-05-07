
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
  buttonText = "Explore Collection",
  buttonLink = "/products/supercar"
}) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom mx-auto">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white animate-slide-in">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 animate-slide-in">
              {subtitle}
            </p>
            <div className="mt-8 animate-slide-in">
              <Link to={buttonLink}>
                <Button size="lg" className="font-medium">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const NavBar: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container-custom mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl md:text-2xl font-bold">
            <span className="text-primary">Elite</span>
            <span>Wheels</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products/supercar" className="font-medium hover:text-primary transition-colors">
            Supercars
          </Link>
          <Link to="/products/superbike" className="font-medium hover:text-primary transition-colors">
            Superbikes
          </Link>
          <Link to="/products/luxury" className="font-medium hover:text-primary transition-colors">
            Luxury
          </Link>
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 flex items-center justify-center px-1">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="font-medium p-2 hover:bg-accent/20 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products/supercar" 
            className="font-medium p-2 hover:bg-accent/20 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Supercars
          </Link>
          <Link 
            to="/products/superbike" 
            className="font-medium p-2 hover:bg-accent/20 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Superbikes
          </Link>
          <Link 
            to="/products/luxury" 
            className="font-medium p-2 hover:bg-accent/20 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Luxury
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

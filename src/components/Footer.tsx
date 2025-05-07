
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card mt-16">
      <div className="container-custom mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-heading text-xl font-bold">
                <span className="text-primary">Elite</span>
                <span>Wheels</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Premium automotive excellence. Supercars, superbikes, and luxury vehicles delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/supercar" className="text-muted-foreground hover:text-primary transition-colors">
                  Supercars
                </Link>
              </li>
              <li>
                <Link to="/products/superbike" className="text-muted-foreground hover:text-primary transition-colors">
                  Superbikes
                </Link>
              </li>
              <li>
                <Link to="/products/luxury" className="text-muted-foreground hover:text-primary transition-colors">
                  Luxury Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Luxury Lane, Mumbai</li>
              <li>Maharashtra, India</li>
              <li>contact@elitewheels.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Elite Wheels. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="text-muted-foreground text-sm">
              Payment Methods:
            </span>
            <span className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-muted rounded text-xs">Visa</span>
              <span className="px-2 py-1 bg-muted rounded text-xs">Mastercard</span>
              <span className="px-2 py-1 bg-muted rounded text-xs">UPI</span>
              <span className="px-2 py-1 bg-muted rounded text-xs">Net Banking</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

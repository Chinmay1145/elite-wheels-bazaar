
import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/utils/formatters";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={`product-card flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <p className="font-bold text-lg">{formatCurrency(product.price)}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <span className={product.stock > 0 ? "text-green-600 dark:text-green-400 text-sm" : "text-red-600 dark:text-red-400 text-sm"}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { formatCurrency } from "@/utils/formatters";
import { getProductById, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(parseInt(productId));
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(getRelatedProducts(foundProduct));
      }
    }
    // Reset state on product change
    setQuantity(1);
    setIsWishlisted(false);
  }, [productId]);

  if (!product) {
    return (
      <div className="container-custom mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4 mb-8">The product you are looking for does not exist.</p>
        <Link to="/">
          <Button>Return to home</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container-custom mx-auto py-8">
      <div className="mb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <Link to={`/products/${product.category}`} className="text-sm font-medium text-muted-foreground hover:text-primary">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}s
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-sm font-medium text-foreground">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-muted rounded-lg overflow-hidden h-[400px] md:h-[500px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-block bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold mr-2">
              {product.category}
            </span>
            <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-semibold">
              {product.brand}
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mt-1 mb-4">
            <p className="text-2xl font-bold">{formatCurrency(product.price)}</p>
            <p className="ml-4 text-sm text-muted-foreground">
              {product.stock > 0 
                ? `${product.stock} in stock` 
                : "Currently out of stock"}
            </p>
          </div>

          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 mb-6">
            {Object.entries(product.specs).slice(0, 6).map(([key, value]) => (
              <div key={key} className="bg-muted/50 p-3 rounded">
                <p className="text-xs text-muted-foreground">{key}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex border rounded-md">
              <button 
                onClick={decrementQuantity} 
                className="px-3 py-1 border-r"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                onClick={incrementQuantity} 
                className="px-3 py-1 border-l"
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              className="flex-1" 
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWishlist}
              className={isWishlisted ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              {isWishlisted ? "Wishlisted" : "Wishlist"}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="features">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="p-4 bg-card rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="specifications" className="p-4 bg-card rounded-lg">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="delivery" className="p-4 bg-card rounded-lg">
            <h3 className="text-xl font-bold mb-4">Delivery & Returns</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Delivery Information</h4>
                <p className="text-muted-foreground">All vehicles are delivered via specialized transport services. Delivery time varies depending on your location and the vehicle's current location. You will be contacted to arrange a suitable delivery date.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Return Policy</h4>
                <p className="text-muted-foreground">We offer a 3-day inspection period after delivery. If you find any undisclosed issues, you can return the vehicle for a full refund minus the delivery costs. Please note that all returns must be approved by our customer service team.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Warranty</h4>
                <p className="text-muted-foreground">All vehicles come with manufacturer warranty where applicable. Extended warranty options are available for purchase.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="section-heading">Related Vehicles</h2>
        <div className="product-grid">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

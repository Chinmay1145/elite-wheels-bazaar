
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "@/utils/formatters";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash, ChevronLeft, ChevronRight } from "lucide-react";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const proceedToCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container-custom mx-auto py-12">
        <h1 className="section-heading">Your Cart</h1>
        <div className="text-center py-16">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some vehicles to your cart and come back here to complete your purchase.</p>
          <Link to="/">
            <Button>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom mx-auto py-12">
      <h1 className="section-heading">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-card rounded-lg shadow overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b">
              <div className="col-span-6 font-medium">Product</div>
              <div className="col-span-2 font-medium text-center">Price</div>
              <div className="col-span-2 font-medium text-center">Quantity</div>
              <div className="col-span-2 font-medium text-center">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.product.id} className="border-b last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                  {/* Product */}
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className="bg-muted h-20 w-20 rounded-md shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <Link to={`/product/${item.product.id}`} className="font-medium hover:text-primary transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="hidden md:inline-flex items-center text-sm text-red-500 hover:text-red-700 transition-colors mt-1"
                      >
                        <Trash className="h-3 w-3 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price - Mobile */}
                  <div className="md:hidden flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price:</span>
                    <span className="font-medium">{formatCurrency(item.product.price)}</span>
                  </div>

                  {/* Desktop Price */}
                  <div className="hidden md:block col-span-2 text-center">
                    {formatCurrency(item.product.price)}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
                    <span className="text-sm text-muted-foreground md:hidden">Quantity:</span>
                    <div className="flex border rounded-md">
                      <button
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 border-r"
                        aria-label="Decrease quantity"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 border-l"
                        disabled={item.quantity >= item.product.stock}
                        aria-label="Increase quantity"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Total - Mobile */}
                  <div className="md:hidden flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total:</span>
                    <span className="font-medium">{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>

                  {/* Desktop Total */}
                  <div className="hidden md:block col-span-2 text-center font-medium">
                    {formatCurrency(item.product.price * item.quantity)}
                  </div>

                  {/* Mobile Remove Button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center"
                    >
                      <Trash className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Actions */}
          <div className="flex justify-between items-center mt-6">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
            <Button variant="outline" onClick={clearCart} className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-span-1">
          <div className="bg-card rounded-lg shadow p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Taxes</span>
                <span className="font-medium">{formatCurrency(cartTotal * 0.18)}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(cartTotal * 1.18)}</span>
                </div>
                <span className="text-xs text-muted-foreground">Includes 18% GST</span>
              </div>
            </div>
            
            <Button onClick={proceedToCheckout} className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

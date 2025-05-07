
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const CheckoutSuccessPage = () => {
  useEffect(() => {
    // Trigger confetti when component mounts
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Launch confetti from both sides
      confetti({
        particleCount,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { y: 0.6 }
      });
      
      confetti({
        particleCount,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { y: 0.6, x: 1 }
      });
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  const orderNumber = `EW-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  
  return (
    <div className="container-custom mx-auto py-12 text-center">
      <div className="max-w-md mx-auto bg-card rounded-lg shadow-xl p-8 border">
        <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been confirmed and is now being processed.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Date:</span>
            <span className="font-medium">{orderDate}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          You will receive an email confirmation with details of your order and tracking information.
        </p>

        <div className="space-y-4">
          <Link to="/">
            <Button variant="default" className="w-full">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/profile/orders">
            <Button variant="outline" className="w-full">
              View Order Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;

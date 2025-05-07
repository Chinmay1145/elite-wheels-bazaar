
import { Product } from "../contexts/CartContext";

const products: Product[] = [
  // SUPERCARS
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    category: "supercar",
    price: 75000000, // ₹7.5 crore
    image: "/placeholder.svg",
    brand: "Ferrari",
    description: "The Ferrari SF90 Stradale is the most powerful Ferrari road car ever built. This plug-in hybrid Ferrari features a turbocharged V8 engine and three electric motors, generating a combined output of 1,000 CV.",
    features: [
      "1,000 CV hybrid powertrain",
      "0-100 km/h in 2.5 seconds",
      "Top speed of 340 km/h",
      "All-wheel drive system",
      "8-speed dual-clutch transmission"
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
      power: "1,000 CV",
      torque: "800 Nm",
      transmission: "8-speed DCT",
      drive: "All-wheel drive"
    },
    stock: 3
  },
  {
    id: 2,
    name: "Lamborghini Aventador SVJ",
    category: "supercar",
    price: 85000000, // ₹8.5 crore
    image: "/placeholder.svg",
    brand: "Lamborghini",
    description: "The Aventador SVJ represents the pinnacle of Lamborghini's naturally aspirated V12 engine technology and innovative aerodynamics, including the patented ALA 2.0 system.",
    features: [
      "6.5L naturally aspirated V12 engine",
      "770 CV and 720 Nm torque",
      "0-100 km/h in 2.8 seconds",
      "Top speed over 350 km/h",
      "ALA 2.0 active aerodynamics"
    ],
    specs: {
      engine: "6.5L Naturally Aspirated V12",
      power: "770 CV",
      torque: "720 Nm",
      transmission: "7-speed ISR",
      drive: "All-wheel drive"
    },
    stock: 2
  },
  {
    id: 3,
    name: "Bugatti Chiron",
    category: "supercar",
    price: 190000000, // ₹19 crore
    image: "/placeholder.svg",
    brand: "Bugatti",
    description: "The Bugatti Chiron is the world's most powerful, fastest, most luxurious and most exclusive production super sports car.",
    features: [
      "8.0L quad-turbo W16 engine",
      "1,500 horsepower and 1,600 Nm torque",
      "0-100 km/h in 2.4 seconds",
      "Limited top speed of 420 km/h",
      "Carbon fiber monocoque"
    ],
    specs: {
      engine: "8.0L Quad-Turbo W16",
      power: "1,500 HP",
      torque: "1,600 Nm",
      transmission: "7-speed DCT",
      drive: "All-wheel drive"
    },
    stock: 1
  },
  {
    id: 4,
    name: "McLaren 765LT",
    category: "supercar",
    price: 45000000, // ₹4.5 crore
    image: "/placeholder.svg",
    brand: "McLaren",
    description: "The McLaren 765LT is the latest in the legendary line of 'Longtail' McLarens. It incorporates all the renowned LT attributes, including reduced weight, track-focused dynamics, and optimized aerodynamics.",
    features: [
      "4.0L twin-turbo V8 engine",
      "765 PS and 800 Nm torque",
      "0-100 km/h in 2.8 seconds",
      "Top speed of 330 km/h",
      "25% increased downforce over the 720S"
    ],
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "765 PS",
      torque: "800 Nm",
      transmission: "7-speed SSG",
      drive: "Rear-wheel drive"
    },
    stock: 4
  },
  {
    id: 5,
    name: "Porsche 911 GT2 RS",
    category: "supercar",
    price: 35000000, // ₹3.5 crore
    image: "/placeholder.svg",
    brand: "Porsche",
    description: "The Porsche 911 GT2 RS is the most powerful 911 ever built, featuring a twin-turbocharged flat-six engine and rear-wheel drive layout, making it the ultimate track-focused 911.",
    features: [
      "3.8L twin-turbo flat-six engine",
      "700 HP and 750 Nm torque",
      "0-100 km/h in 2.8 seconds",
      "Top speed of 340 km/h",
      "Magnesium roof and carbon fiber components"
    ],
    specs: {
      engine: "3.8L Twin-Turbo Flat-Six",
      power: "700 HP",
      torque: "750 Nm",
      transmission: "7-speed PDK",
      drive: "Rear-wheel drive"
    },
    stock: 5
  },
  
  // SUPERBIKES
  {
    id: 6,
    name: "Ducati Panigale V4 R",
    category: "superbike",
    price: 7000000, // ₹70 lakh
    image: "/placeholder.svg",
    brand: "Ducati",
    description: "The Ducati Panigale V4 R represents the maximum expression of Ducati's racing DNA. Technology directly derived from MotoGP makes this the closest thing to a competition bike legal for road use.",
    features: [
      "998cc Desmosedici Stradale R engine",
      "221 HP (234 HP with racing exhaust)",
      "0-100 km/h in 2.9 seconds",
      "Top speed over 300 km/h",
      "Aerodynamic winglets derived from MotoGP"
    ],
    specs: {
      engine: "998cc V4",
      power: "221 HP",
      torque: "112 Nm",
      weight: "172 kg",
      frame: "Aluminum alloy front frame"
    },
    stock: 8
  },
  {
    id: 7,
    name: "BMW M 1000 RR",
    category: "superbike",
    price: 4500000, // ₹45 lakh
    image: "/placeholder.svg",
    brand: "BMW",
    description: "The first M model from BMW Motorrad. The BMW M 1000 RR is derived directly from professional racing technology, delivering an elite-level performance bike for the highest demands.",
    features: [
      "999cc inline four-cylinder engine",
      "212 HP at 14,500 rpm",
      "Carbon fiber winglets",
      "M brakes and M carbon wheels",
      "Sophisticated electronics package with six riding modes"
    ],
    specs: {
      engine: "999cc Inline Four",
      power: "212 HP",
      torque: "113 Nm",
      weight: "192 kg",
      frame: "Aluminum bridge frame"
    },
    stock: 6
  },
  {
    id: 8,
    name: "Kawasaki Ninja H2R",
    category: "superbike",
    price: 7200000, // ₹72 lakh
    image: "/placeholder.svg",
    brand: "Kawasaki",
    description: "The track-only Kawasaki Ninja H2R features a supercharged engine that produces an astonishing 310 horsepower, making it the most powerful production motorcycle in the world.",
    features: [
      "998cc supercharged inline four-cylinder engine",
      "310 HP with ram air",
      "Top speed over 400 km/h",
      "Aerodynamic carbon fiber bodywork",
      "Track use only (not street legal)"
    ],
    specs: {
      engine: "998cc Supercharged Inline Four",
      power: "310 HP",
      torque: "165 Nm",
      weight: "216 kg",
      frame: "Trellis, high-tensile steel"
    },
    stock: 3
  },
  {
    id: 9,
    name: "Aprilia RSV4 Factory",
    category: "superbike",
    price: 2700000, // ₹27 lakh
    image: "/placeholder.svg",
    brand: "Aprilia",
    description: "The Aprilia RSV4 Factory is the pinnacle of Aprilia's superbike technology, featuring a powerful V4 engine and sophisticated electronics system developed from their MotoGP experience.",
    features: [
      "1099cc V4 engine",
      "217 HP at 13,000 rpm",
      "Aerodynamic wings integrated into the fairing",
      "Öhlins Smart EC 2.0 semi-active suspension",
      "Brembo Stylema brake calipers"
    ],
    specs: {
      engine: "1099cc V4",
      power: "217 HP",
      torque: "125 Nm",
      weight: "184 kg",
      frame: "Aluminum dual beam chassis"
    },
    stock: 5
  },
  {
    id: 10,
    name: "Honda CBR1000RR-R Fireblade SP",
    category: "superbike",
    price: 2300000, // ₹23 lakh
    image: "/placeholder.svg",
    brand: "Honda",
    description: "Directly inspired by the RC213V MotoGP machine, the Fireblade SP represents the sharpest blade in Honda's CBR range, designed with unwavering focus on circuit performance.",
    features: [
      "1000cc inline four-cylinder engine",
      "214 HP at 14,500 rpm",
      "Öhlins NPX Smart-EC semi-active suspension",
      "Brembo Stylema brake calipers",
      "Winglets for improved aerodynamic stability"
    ],
    specs: {
      engine: "1000cc Inline Four",
      power: "214 HP",
      torque: "113 Nm",
      weight: "201 kg",
      frame: "Aluminum diamond frame"
    },
    stock: 7
  },
  
  // LUXURY CARS
  {
    id: 11,
    name: "Rolls-Royce Phantom",
    category: "luxury",
    price: 95000000, // ₹9.5 crore
    image: "/placeholder.svg",
    brand: "Rolls-Royce",
    description: "The Rolls-Royce Phantom is the pinnacle of luxury motoring, representing the ultimate symbol of wealth and status. This eighth-generation Phantom continues a legacy that dates back to 1925.",
    features: [
      "6.75L twin-turbo V12 engine",
      "Starlight headliner with 1,340 hand-woven fiber optic lights",
      "Whisper-quiet cabin with over 130kg of sound insulation",
      "Hand-crafted interior with the finest materials",
      "Bespoke customization options"
    ],
    specs: {
      engine: "6.75L Twin-Turbo V12",
      power: "563 HP",
      torque: "900 Nm",
      transmission: "8-speed automatic",
      drive: "Rear-wheel drive"
    },
    stock: 2
  },
  {
    id: 12,
    name: "Bentley Continental GT",
    category: "luxury",
    price: 45000000, // ₹4.5 crore
    image: "/placeholder.svg",
    brand: "Bentley",
    description: "The Bentley Continental GT represents the perfect fusion of luxury grand touring and exhilarating performance, handcrafted in England with the finest attention to detail.",
    features: [
      "6.0L twin-turbocharged W12 engine",
      "Rotating dashboard display with three different fascias",
      "Diamond-in-diamond quilted leather interior",
      "Bentley Dynamic Ride 48V active anti-roll system",
      "Naim premium audio system"
    ],
    specs: {
      engine: "6.0L Twin-Turbo W12",
      power: "626 HP",
      torque: "900 Nm",
      transmission: "8-speed dual-clutch",
      drive: "All-wheel drive"
    },
    stock: 4
  },
  {
    id: 13,
    name: "Mercedes-Maybach S-Class",
    category: "luxury",
    price: 35000000, // ₹3.5 crore
    image: "/placeholder.svg",
    brand: "Mercedes-Maybach",
    description: "The Mercedes-Maybach S-Class represents the ultimate in luxury sedans, with exceptional rear-passenger comfort and the latest technological innovations from Mercedes-Benz.",
    features: [
      "4.0L bi-turbo V8 engine with EQ Boost",
      "Executive rear seats with massage function",
      "Burmester 4D surround sound system",
      "MBUX Interior Assistant with gesture control",
      "Active ambient lighting with 64 colors"
    ],
    specs: {
      engine: "4.0L Bi-Turbo V8",
      power: "496 HP",
      torque: "700 Nm",
      transmission: "9-speed automatic",
      drive: "All-wheel drive"
    },
    stock: 5
  },
  {
    id: 14,
    name: "Range Rover Autobiography",
    category: "luxury",
    price: 30000000, // ₹3 crore
    image: "/placeholder.svg",
    brand: "Land Rover",
    description: "The Range Rover Autobiography represents the pinnacle of luxury SUVs, combining unparalleled off-road capability with sophisticated design and luxury comfort features.",
    features: [
      "5.0L supercharged V8 engine",
      "Semi-aniline leather seats with 24-way adjustment",
      "Executive Class Comfort-Plus rear seats",
      "Terrain Response 2 with automatic mode",
      "Meridian™ Signature Sound System"
    ],
    specs: {
      engine: "5.0L Supercharged V8",
      power: "565 HP",
      torque: "700 Nm",
      transmission: "8-speed automatic",
      drive: "All-wheel drive"
    },
    stock: 6
  },
  {
    id: 15,
    name: "Aston Martin DB11",
    category: "luxury",
    price: 40000000, // ₹4 crore
    image: "/placeholder.svg",
    brand: "Aston Martin",
    description: "The Aston Martin DB11 combines breathtaking design with potent performance and refined grand touring characteristics, continuing the legendary DB lineage.",
    features: [
      "5.2L twin-turbo V12 engine",
      "Hand-crafted interior with Bridge of Weir leather",
      "Aeroblade™ virtual spoiler for increased downforce",
      "360-degree camera system with parking sensors",
      "Bang & Olufsen BeoSound audio system"
    ],
    specs: {
      engine: "5.2L Twin-Turbo V12",
      power: "630 HP",
      torque: "700 Nm",
      transmission: "8-speed automatic",
      drive: "Rear-wheel drive"
    },
    stock: 3
  }
];

// Generate more products to reach 50 items
const generateMoreProducts = (): Product[] => {
  const baseProducts = [...products];
  const moreProducts: Product[] = [];
  
  // Generate additional products based on the existing ones
  for (let i = 16; i <= 50; i++) {
    const baseProd = baseProducts[(i - 16) % baseProducts.length];
    const yearVariant = 2022 + (i % 3);
    
    moreProducts.push({
      ...baseProd,
      id: i,
      name: `${baseProd.name} ${yearVariant} Edition`,
      price: Math.round(baseProd.price * (1 + (i % 5) / 10)), // Slight price variation
      description: `${yearVariant} Edition. ${baseProd.description}`,
      stock: 2 + (i % 5)
    });
  }
  
  return [...baseProducts, ...moreProducts];
};

export const allProducts = generateMoreProducts();

// Filter products by category
export const getProductsByCategory = (category: "supercar" | "superbike" | "luxury"): Product[] => {
  return allProducts.filter(product => product.category === category);
};

// Get product by ID
export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

// Get related products (same category, different ID)
export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

// Get featured products (one from each category)
export const getFeaturedProducts = (): Product[] => {
  const featuredIds = [1, 6, 11]; // One from each category
  return allProducts.filter(product => featuredIds.includes(product.id));
};

export default allProducts;

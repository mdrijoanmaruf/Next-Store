// Mock product data - in a real app, this would be in a database
let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "/api/placeholder/300/200",
    details: "Premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals."
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 299.99,
    image: "/api/placeholder/300/200",
    details: "Advanced smartwatch with heart rate monitoring, GPS tracking, water resistance, and 7-day battery life. Compatible with both iOS and Android devices."
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for better workspace setup",
    price: 79.99,
    image: "/api/placeholder/300/200",
    details: "Adjustable aluminum laptop stand that improves posture and workspace ergonomics. Compatible with laptops from 10-17 inches."
  },
  {
    id: 4,
    name: "Wireless Mouse",
    description: "Precision wireless mouse with long battery life",
    price: 49.99,
    image: "/api/placeholder/300/200",
    details: "Ergonomic wireless mouse with precision tracking, customizable buttons, and 6-month battery life. Perfect for productivity and gaming."
  }
];

export async function GET() {
  return Response.json(products);
}

export async function POST(request) {
  try {
    const newProduct = await request.json();
    const product = {
      id: products.length + 1,
      ...newProduct,
      image: "/api/placeholder/300/200"
    };
    products.push(product);
    return Response.json(product, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Failed to create product" }, { status: 500 });
  }
}

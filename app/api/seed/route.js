import clientPromise from '../../../lib/mongodb';

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    details: "Premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    details: "Advanced smartwatch with heart rate monitoring, GPS tracking, water resistance, and 7-day battery life. Compatible with both iOS and Android devices.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for better workspace setup",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop",
    details: "Adjustable aluminum laptop stand that improves posture and workspace ergonomics. Compatible with laptops from 10-17 inches.",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Wireless Mouse",
    description: "Precision wireless mouse with long battery life",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1563297007-b760fdc82be2?w=300&h=200&fit=crop",
    details: "Ergonomic wireless mouse with precision tracking, customizable buttons, and 6-month battery life. Perfect for productivity and gaming.",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('products');
    
    // Clear existing products
    await collection.deleteMany({});
    
    // Insert sample products
    const result = await collection.insertMany(sampleProducts);
    
    return Response.json({ 
      message: `Successfully seeded ${result.insertedCount} products`,
      count: result.insertedCount 
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return Response.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}

import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('products');
    
    const products = await collection.find({}).toArray();
    
    // Convert MongoDB _id to id for frontend compatibility
    const formattedProducts = products.map(product => ({
      ...product,
      id: product._id.toString(),
      _id: undefined
    }));
    
    return Response.json(formattedProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('products');
    
    const newProduct = await request.json();
    
    // Add timestamp and default image if not provided
    const productToInsert = {
      ...newProduct,
      image: newProduct.image || "/api/placeholder/300/200",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(productToInsert);
    
    // Return the created product with id
    const createdProduct = {
      ...productToInsert,
      id: result.insertedId.toString(),
      _id: undefined
    };
    
    return Response.json(createdProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return Response.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    // Validate if id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid product ID" }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('products');
    
    const product = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }
    
    // Convert MongoDB _id to id for frontend compatibility
    const formattedProduct = {
      ...product,
      id: product._id.toString(),
      _id: undefined
    };
    
    return Response.json(formattedProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    return Response.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

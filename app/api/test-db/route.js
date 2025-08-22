import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Test the connection
    await db.admin().ping();
    
    const collections = await db.listCollections().toArray();
    const stats = await db.stats();
    
    return Response.json({
      status: 'Connected to MongoDB',
      database: process.env.MONGODB_DB,
      collections: collections.map(col => col.name),
      dbSize: Math.round(stats.dataSize / 1024) + ' KB'
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return Response.json({
      status: 'Failed to connect to MongoDB',
      error: error.message
    }, { status: 500 });
  }
}

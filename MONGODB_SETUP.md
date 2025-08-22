# MongoDB Setup Instructions

## Step 1: Replace Database Credentials
You need to replace the placeholder values in your `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.0ykpaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Replace:
- `<db_username>` with your actual MongoDB Atlas username
- `<db_password>` with your actual MongoDB Atlas password

## Step 2: Seed the Database
After updating the credentials, you can seed the database with sample products in two ways:

### Option 1: Using the API endpoint
Visit: `http://localhost:3001/api/seed` (POST request)

### Option 2: Using the command line
Run: `npm run seed`

## Step 3: Test the Integration
1. Visit `http://localhost:3001/products` to see products from MongoDB
2. Login and go to `http://localhost:3001/dashboard/add-product` to add new products
3. Products will be stored in your MongoDB Atlas cluster

## Database Schema
Products are stored with the following structure:
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  details: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

The API automatically converts MongoDB's `_id` to `id` for frontend compatibility.

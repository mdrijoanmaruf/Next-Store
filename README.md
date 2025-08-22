# Next-Store

A modern product store built with Next.js 15 (App Router) and NextAuth.js. Features public and protected pages, Google/social and demo credential login, product listing, product details, and a protected dashboard for adding products.

## Features
- Landing page with hero, highlights, navbar, and footer
- Login with Google or demo credentials (NextAuth.js)
- Public product list and details pages
- Protected dashboard to add products
- Route handlers for mock backend
- Theme toggle (light/dark)
- Toast notifications and loading spinners

## Setup & Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/mdrijoanmaruf/Next-Store.git
   cd Next-Store/my-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local` and set your credentials:
     ```env
     NEXTAUTH_SECRET=your-secret-key
     NEXTAUTH_URL=http://localhost:3000
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.0ykpaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     MONGODB_DB=nextstore
     ```
   - Replace `<username>` and `<password>` with your MongoDB Atlas credentials
   - For demo login, use:
     - Email: `demo@example.com`
     - Password: `password`
4. **Seed the database (optional):**
   ```sh
   npm run seed
   ```
   Or visit `http://localhost:3001/api/seed` (POST request) to add sample products.

5. **Run the development server:**
   ```sh
   npm run dev
   ```
6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Route Summary

| Route                      | Description                                      | Auth Required |
|----------------------------|--------------------------------------------------|--------------|
| `/`                        | Landing page (Navbar, Hero, Highlights, Footer)  | No           |
| `/login`                   | Login page (Google & demo credentials)           | No           |
| `/products`                | Product list page                                | No           |
| `/products/[id]`           | Product details page                             | No           |
| `/dashboard/add-product`   | Add product form (protected)                     | Yes          |
| `/api/products`            | Route handler for product list/add               | No           |
| `/api/products/[id]`       | Route handler for product details                | No           |
| `/api/auth/[...nextauth]`  | NextAuth.js authentication API                   | No           |
| `/api/seed`                | Seed database with sample products               | No           |
| `/api/test-db`             | Test MongoDB connection                          | No           |

## License
MIT

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowLeft, Star, Heart, Share2 } from 'lucide-react';

async function getProduct(id) {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/products/${id}`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Product not found');
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/products"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-500 text-9xl">
                {product.name.includes('Headphones') && '🎧'}
                {product.name.includes('Watch') && '⌚'}
                {product.name.includes('Stand') && '💻'}
                {product.name.includes('Mouse') && '🖱️'}
                {!product.name.match(/(Headphones|Watch|Stand|Mouse)/) && '📱'}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-transparent hover:border-blue-500 cursor-pointer transition-colors"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">(4.8)</span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">124 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </span>
                <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                  17% OFF
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
              {product.details && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  {product.details}
                </p>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Premium build quality and materials
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Advanced technology and features
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Excellent customer support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  1-year warranty included
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Heart className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Share2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              
              <button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-4 px-6 rounded-lg transition-colors">
                Buy Now
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white">Shipping & Returns</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>• Free shipping on orders over $100</p>
                <p>• 30-day return policy</p>
                <p>• Ships within 2-3 business days</p>
                <p>• Express delivery available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for related products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Related Product {i}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold">$99.99</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

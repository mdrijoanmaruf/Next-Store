import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <ShoppingBag className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the product you&apos;re looking for. It might have been removed or doesn&apos;t exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
          
          <div className="block">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

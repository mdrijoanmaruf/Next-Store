import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-9xl mb-4">😕</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            404 - Product Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

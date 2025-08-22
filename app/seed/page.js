'use client';

import { useState } from 'react';

export default function SeedPage() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [result, setResult] = useState(null);

  const seedDatabase = async () => {
    setIsSeeding(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Database Seeder
        </h1>
        
        <button
          onClick={seedDatabase}
          disabled={isSeeding}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors disabled:cursor-not-allowed"
        >
          {isSeeding ? 'Seeding...' : 'Seed Database'}
        </button>
        
        {result && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <pre className="text-sm text-gray-900 dark:text-white">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

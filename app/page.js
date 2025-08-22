import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductHighlights from './components/ProductHighlights';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductHighlights />
      </main>
      <Footer />
    </div>
  );
}

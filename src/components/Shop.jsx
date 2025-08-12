import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('products')
        .select('*');
      
      if (error) {
        console.error('Error fetching products:', error);
        setError('Hiba a termékek betöltése közben.');
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const categories = [
    { id: 'all', name: 'Minden' },
    { id: 'tees', name: 'Pólók' },
    { id: 'hoodies', name: 'Pulóverek' },
    { id: 'jackets', name: 'Felsőruházat' },
    { id: 'hats', name: 'Fejfedők' },
    { id: 'accessories', name: 'Kiegészítők' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return <div className="text-center py-20 text-white">Termékek betöltése...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-glow">
            Bolt
          </h1>
          <p className="text-xl text-gray-300">
            Böngéssz a legújabb kollekciónkban
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="glassmorphism rounded-lg p-4 group">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                {product.status === 'sold-out' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ELFOGYOTT</span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-white font-semibold mb-1">{product.name}</h3>
                <p className="text-purple-400 font-bold">{product.price}</p>

                <button
                  className={`w-full mt-4 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    product.status === 'sold-out'
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                  }`}
                  disabled={product.status === 'sold-out'}
                >
                  {product.status === 'sold-out' ? 'Elfogyott' : 'Kosárba'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
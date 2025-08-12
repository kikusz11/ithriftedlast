import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="glassmorphism rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Maradj naprakész
          </h2>
          <p className="text-gray-300 mb-6">
            A jövőbeli hírekkel és kiadásokkal kapcsolatos információkért iratkozz fel a levelezőlistánkra.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Add meg az e-mail címed"
                className="w-full px-4 py-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-300 transition-colors duration-200"
                required
              />
            </div>

            <label className="flex items-start space-x-3 text-sm text-gray-300">
              <input
                type="checkbox"
                className="mt-1 rounded border-purple-400 text-purple-400 focus:ring-purple-300"
                required
              />
              <span>
                Megértettem, hogy bármikor leiratkozhatok
              </span>
            </label>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              {isSubscribed ? 'Feliratkozva!' : 'Feliratkozás'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

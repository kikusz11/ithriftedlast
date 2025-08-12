import React from 'react';

const Contact = () => {
  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wider">Kapcsolat</h1>
        <p className="text-lg text-center mb-12 text-gray-300">
          Kérdésed van, vagy visszajelzést szeretnél adni? Töltsd ki az alábbi űrlapot.
        </p>

        <div className="glassmorphism-dark p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Név</label>
                <input type="text" id="name" name="name" placeholder="A neved" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                <input type="email" id="email" name="email" placeholder="a.neved@pelda.com" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Tárgy</label>
              <input type="text" id="subject" name="subject" placeholder="Miről van szó?" className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Üzenet</label>
              <textarea id="message" name="message" rows="5" placeholder="Az üzeneted..." className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            </div>

            <div className="mt-8 text-center">
              <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Üzenet küldése
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center text-gray-400">
            <h2 className="text-2xl font-bold mb-4">Elérhetőségeink</h2>
            <p>Supreme Dummy Kft.</p>
            <p>Lila utca 123, Web City, 90210</p>
            <p>E-mail: kapcsolat@supremedummy.com</p>
            <p>Telefon: (123) 456-7890</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
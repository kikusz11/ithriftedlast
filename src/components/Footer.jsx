import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="glassmorphism-dark border-t border-purple-400 border-opacity-30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SUPREME</h3>
            <p className="text-gray-400">
              Supreme. A Supreme hivatalos weboldala. Alapítva 1994. NYC.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Bolt
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Hírek
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kövess minket</h4>
            <p className="text-gray-400 mb-4">
              us.supreme.com
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-400 border-opacity-30 text-center">
          <p className="text-gray-400">
            © 2024 Supreme. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

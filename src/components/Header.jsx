import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  const handleSignOut = async () => {
    await signOut();
    setIsProfileMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  const ProfileMenu = () => (
    <div ref={profileMenuRef} className="relative">
      <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-purple-400 transition-colors duration-200">
          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
        </svg>
      </button>
      {isProfileMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Profilom</Link>
          <Link to="/orders" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Rendeléseim</Link>
          <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Beállítások</Link>
          <button onClick={handleSignOut} className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Kijelentkezés</button>
        </div>
      )}
    </div>
  );

  return (
    <header className="glassmorphism-dark fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-wider">
              SUPREME
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-white hover:text-purple-400 transition-colors duration-200">Bolt</Link>
            <Link to="/contact" className="text-white hover:text-purple-400 transition-colors duration-200">Kapcsolat</Link>
            {user ? <ProfileMenu /> : <Link to="/auth" className="text-white hover:text-purple-400 transition-colors duration-200">Bejelentkezés</Link>}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/shop" className="block px-3 py-2 text-white hover:text-purple-400">Bolt</Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:text-purple-400">Kapcsolat</Link>
              {user ? (
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <Link to="/profile" className="block px-3 py-2 text-white hover:text-purple-400">Profilom</Link>
                  <Link to="/orders" className="block px-3 py-2 text-white hover:text-purple-400">Rendeléseim</Link>
                  <Link to="/settings" className="block px-3 py-2 text-white hover:text-purple-400">Beállítások</Link>
                  <button onClick={handleSignOut} className="w-full text-left block px-3 py-2 text-white hover:text-purple-400">Kijelentkezés</button>
                </div>
              ) : (
                <Link to="/auth" className="block px-3 py-2 text-white hover:text-purple-400">Bejelentkezés</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

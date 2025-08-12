import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact.jsx';
import Footer from './components/Footer';
import Shop from './components/Shop';
import AuthPage from './pages/auth/AuthPage';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import Settings from './pages/user/Settings';

const HomePage = () => (
  <main className="flex-grow flex flex-col justify-center items-center text-center">
    <h1 className="text-5xl font-bold mb-4">A bolt jelenleg zárva</h1>
    <p className="text-xl">Látogass vissza később!</p>
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-glow">
          Az online bolt zárva
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
          Webáruházunk jelenleg zárva tart, és hamarosan újra megnyílik a 
          <span className="text-purple-400"> 2025 Őszi/Téli kollekcióval</span>.
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Supreme. A Supreme hivatalos weboldala. Alapítva 1994. NYC.
        </p>
        <div className="glassmorphism rounded-lg p-6 max-w-md mx-auto">
          <p className="text-white text-lg">
            Maradj velünk az exkluzív és limitált kiadásokért
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

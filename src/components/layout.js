import PropTypes from 'prop-types';
import React from 'react';
import { Hero } from './hero';
import { Footer } from './footer';
import { Steps } from './steps';
import { Pricing } from './pricing';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <Hero/>

      <main className='flex-1 w-full max-w-5xl mx-auto md:px-8'>
        {children}
      </main>

      <Steps/>

      <Pricing/>

      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

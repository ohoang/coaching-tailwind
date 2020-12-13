import React from 'react';
import { ReactModal } from './modal';


export const Hero = () => (
  <div className="py-20 relative bg-red-700 overflow-hidden">
    <div className="md:container md:mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20">
        <div className="bg-red-700 text-white">
          <p className="text-2xl mt-8 mb-2 font-extrabold text-black">Learn Approach</p>
          <p className="text-4xl font-bold tracking-wider leading-10">{`The No-Bullshit`.toUpperCase()}</p>
          <p className="text-4xl font-bold mb-4 tracking-wider leading-10">{`way to meet women`.toUpperCase()}</p>
          <p className="mb-8 font-bold tracking-wide">
            Learn Approach is an in-person Weekend Bootcamp
            program designed to help you meet more women.
          </p>
          <p className="mb-8 font-light font-lato">
            Designed for individuals who want to confidently take risks,
            stand out, and position themselves for the best possible outcomes and meet more women.
            Become a fearless man who can confidently talk to any woman starting today.
          </p>
          <ReactModal darkMode='true'/>
        </div>
        <div className="bg-gray-800">2</div>
      </div>
    </div>
  </div>
);
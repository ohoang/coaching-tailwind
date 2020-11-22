import React from 'react';

export const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="grid grid-cols-2">
      <div className="bg-red-600 text-white">
        <p className="text-2xl mt-8 mb-2 text-black font-bold">Learn Approach</p>
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
        <button
          className="
            rounded
            bg-gray-900
            hover:bg-gray-800
            border-white
            border-2
            text-white
            py-2
            px-4
            mb-4
            w-6/12
          "
        >
          Enroll Now
        </button>
      </div>
      <div className="bg-gray-800">2</div>
    </div>
  </div>
);
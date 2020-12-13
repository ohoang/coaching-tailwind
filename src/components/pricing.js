import React from 'react';
import { EnrollButton } from './button';
import { ReactModal } from './modal';

export const Pricing = () => (
  <div className='container mx-auto px-4 py-24'>
    <header className='text-center mb-16'>
    <p className='
      mb-4
      text-3xl
      font-extrabold
    '>Training Options</p>
      <p className='leading-normal text-grey-dark md:w-1/2 md:mx-auto'>
        <span className='font-bold'>Learn Approach</span> is the ability to do, say, or take action on the things you believe in without being stopped by fears of judgement, embarrassment, rejection, or failure.
      </p>
    </header>

    <div className='lg:flex lg:items-center lg:-mx-2'>

      <div className='mb-4 lg:mb-0 lg:w-1/3 lg:px-2'>
        <div className='text-center border border-grey-light p-10 rounded'>
          <h2 className='text-lg mb-4'>1-on-1 Approaching</h2>
          <div className='mb-6'>
            <span className='block text-5xl pb-2'>$88</span>
            <span className='text-sm text-grey'>Minumum 2 hours</span>
          </div>
          <div className='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 mb-10'>
            I accompany you and help you overcome your social anxiety by approaching and talking to women.
          </div>
          <ul className='text-grey leading-loose list-reset mb-6'>
            {/* <li>Personalized/Custom Coaching</li> */}
            {/* <li>Instruction, guidance, and provide feedback</li> */}
            <li>Someone by your side infield</li>
            <li>2hr session of infield Daygame</li>
            <li>Provide instant personalized feedback</li>
          </ul>
          <EnrollButton/>
        </div>
      </div>

      <div className='mb-4 lg:mb-0 lg:w-1/3 lg:px-2'>
        <div className='text-center border border-grey-light p-10 lg:py-16 rounded lg:shadow-lg'>
          <h2 className='text-lg mb-4'>Weekend Bootcamp</h2>
          <div className='mb-6'>
            <span className='block text-5xl pb-2'>$989</span>
            <span className='text-sm text-grey'>2 Days</span>
          </div>
          <div className='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 mb-10'>
            Real-world, authentic interactions all day long! Designed to cut years off your learning curve meeting women.
          </div>
          <ul className='text-grey-dark leading-loose list-reset mb-6'>
            <li>2 full days of theory and technique</li>
            <li>6hrs+ of infield Daygame</li>
            <li>Post-training advice, follow-up, and support</li>
          </ul>
          <ReactModal/>
        </div>
      </div>

      <div className='mb-4 lg:mb-0 lg:w-1/3 lg:px-2'>
        <div className='text-center border border-grey-light p-10 rounded'>
          <h2 className='text-lg mb-4'>6-Week Transformation</h2>
          <div className='mb-6'>
            <span className='block text-5xl pb-2'>$9,698</span>
            <span className='text-sm text-grey'>6 Weeks</span>
          </div>
          <div className='block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6 mb-10'>
            I give you the instruction, guidance, and hold you accountable to get unstuck and improve your dating/relationships.
          </div>
          <ul className='text-grey leading-loose list-reset mb-6'>
            <li>Breathe, eat, and live Daygame together</li>
            <li>Plenty of infield Daygame</li>
            <li>Hold you accountable (weekly)</li>
          </ul>
          <ReactModal/>
        </div>
      </div>
    </div>
  </div>
);

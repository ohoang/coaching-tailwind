import React from 'react';
import { ReactModal } from './modal';


export const Footer = () => (
  <div className="py-20 relative bg-red-700 overflow-hidden">
    <div className="md:container md:mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 mx-10">
        <div className="bg-red-700 text-white">
          <p className="text-2xl mb-2 font-extrabold text-black">Learn Approach</p>
          <p className="text-4xl font-bold mb-4 tracking-wider leading-10">{`Transform Yourself`.toUpperCase()}</p>
          <p className="mb-8 font-bold tracking-wide">
            It starts with you to save yourself from medicoray.
            The only reason why you aren&rsquo;t dating more women is because
            you&rsquo;re doing nothing to make change.
          </p>
          <ul className="mb-8 font-light list-disc list-inside">
            <li className="mb-2">Doctors won&rsquo;t make you healthy.</li>
            <li className="mb-2">Nutritionists won&rsquo;t make you slim.</li>
            <li className="mb-2">Teachers won&rsquo;t make you smart.</li>
            <li className="mb-2">Gurus won&rsquo;t make you calm.</li>
            <li className="mb-2">Mentors won&rsquo;t make you rich.</li>
            <li className="mb-2">Trainers won&rsquo;t make you fit.</li>
            <li className="mb-2">Ultimately, you have to take responsibility to save yourself.</li>
          </ul>

          <ReactModal darkMode='true'/>
        </div>
        <div className="bg-gray-800">2</div>
      </div>
    </div>
  </div>
);
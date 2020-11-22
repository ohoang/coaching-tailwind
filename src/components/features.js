import React from 'react';
import data from './featuresData';
export const Features = () => (
  <div>
    <p className="
      mt-10
      mb-4
      text-3xl
      font-extrabold
      text-center
    ">
      Learning to Cold Approach will help you
    </p>
    <div className="grid grid-cols-3 gap-8">
      {data.map((item => <div key={item}>{item}</div>))}
    </div>
  </div>
);

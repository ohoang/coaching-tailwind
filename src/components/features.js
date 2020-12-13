import React from 'react';
import data from './featuresData';

export const Features = ({showTitle = true}) => (
  <div className={showTitle ? "my-20" : "mt-10 mb-20"}>
    {showTitle && <p className="
      mb-10
      text-3xl
      font-extrabold
      text-center
    ">
      Learning to Cold Approach will help you
    </p>}
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
      {data.map((item => (
        <div key={item} className="flex flex-row items-center gap-2">
          <span className='text-green-500 text-2xl font-bold'>&#10003;</span>
          <p className="text-sm font-bold">{item}</p>
        </div>
      )))}
    </div>
  </div>
);

import React from 'react';
import { Presenter } from './presenter';
import { ReactModal } from './modal';
import data from './featuresData';

export const Steps = () => (
  <div className="pb-20 relative bg-black overflow-hidden">
    <div className="md:container md:mx-auto text-white">
      <Presenter title="Day One - Take Action" theme="dark" />
      <div className="pt-20 text-center">
        <p className="
          mb-4
        text-red-700
          font-bold
        ">
          First Day Sample:
        </p>
        <p className="
          mb-4
          text-3xl
          font-extrabold
        ">
          Here’s what you’ll learn
        </p>
        <div className="w-6/12 mx-auto">
          <p className="mb-12">
            Going out and taking action on your own.
          </p>
        </div>
        <div className="sm:w-full md:w-2/4	mx-auto mb-10">
          {data.map((item, index) => {
            let curr = index + 1;
            if (curr !== 12) {
              return (
                <div className="flex flex-col pb-10 ml-10" key={item}>
                  <p className="text-lg	font-bold pb-5 text-left">
                    <span className="text-red-700">Skill #{curr}</span>&nbsp;
                    {item}
                  </p>
                </div>
              )
            } else {
              return null;
            }
          })}
        </div>
        <div className="w-4/12 mx-auto">
          <ReactModal/>
        </div>
      </div>
    </div>

  </div>
);

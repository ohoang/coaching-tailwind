import React from 'react';
import PropTypes from 'prop-types';

export const Presenter = ({ title, theme }) => (
  <div className="mx-auto mt-20">
    <div className="w-4/6	mx-auto text-center">
      <p className="mb-4 text-1xl text-red-600 font-bold">Learn Approach</p>
      <p className={`
        mb-10
        ${theme === "dark" ? 'text-white' : 'text-black'}
        text-3xl
        font-bold
        leading-10
      `}>
        {title}
      </p>
    </div>
    <div className="md:w-auto bg-gray-900">
      <img src="https://www.placecage.com/960/350" className="mx-auto"/>
    </div>
  </div>
);

Presenter.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string
}
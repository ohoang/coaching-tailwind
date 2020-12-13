import React from 'react';
import PropTypes from 'prop-types';
import { openPopupWidget } from 'react-calendly';

export const EnrollButton = ({ label = 'Schedule Session' }) => {
  const handleClick = () => openPopupWidget({ url: 'https://calendly.com/learnapproach' });

  return (
    <button
      onClick={() => handleClick()}
      target='_blank'
      rel='noreferrer'
      className='
        text-sm
        tracking-wide
        uppercase
        inline-block
        bg-white
        hover:bg-red-600
        border-2
        border-red-500
        text-red-500
        hover:text-white
        font-bold
        w-full
        p-3
        rounded
        no-underline
      '
    >
      {label}
    </button>
  )
};

EnrollButton.PropTypes = {
  label: PropTypes.string
};

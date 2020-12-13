import React from 'react';
import DatePicker from './datePicker';

export const Form = () => {
  return (
    <div className='p-10 bg-white w-full'>
      <h1 className='text-xl font-semibold'>Join the Learn Approach Waitlist 👋, <span className='font-normal'>please fill in your information below.</span></h1>
      <form className='mt-6'>

        <div className="mb-2">
          <fieldset className="flex border-0">
            <legend className="block text-xs font-semibold text-gray-600 uppercase mb-2">
            Learn Approach Training Option(s)
            </legend>
            <label className="block text-gray-700 mb-2 mr-8">
              <input className="mr-2 leading-tight" type="radio" name="group"/>
              <span className="text-sm">
              Weekend Bootcamp
              </span>
            </label>
            <label className="block text-gray-700 mb-2 ml-8">
              <input className="mr-2 leading-tight" type="radio"name="group"/>
              <span className="text-sm">
              6-Week Transformation
              </span>
            </label>
          </fieldset>
        </div>

        <DatePicker/>

        <div className='flex justify-between gap-3'>
          <span className='w-1/2'>
            <label htmlhtmlFor='firstname' className='block text-xs font-semibold text-gray-600 uppercase'>Firstname</label>
            <input id='firstname' type='text' name='firstname' placeholder='John' autoComplete='given-name' className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' required />
          </span>
          <span className='w-1/2'>
            <label htmlhtmlFor='lastname' className='block text-xs font-semibold text-gray-600 uppercase'>Lastname</label>
            <input id='lastname' type='text' name='lastname' placeholder='Doe' autoComplete='family-name' className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' required />
          </span>
        </div>

        <label htmlhtmlFor='email' className='block mt-2 text-xs font-semibold text-gray-600 uppercase'>E-mail</label>
        <input id='email' type='email' name='email' placeholder='john.doe@company.com' autoComplete='email' className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner' required />

        <button type='submit' className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'>
          Join Waitlist
        </button>
      </form>
    </div>
  );
};

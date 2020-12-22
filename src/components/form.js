import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './datePicker';
import moment from 'moment';

function encode(data) {
  const encoded = Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
  console.log({encoded});
  return encoded;
}

export const Form = ({ course }) => {
  const [formValues, setFormValues] = React.useState({ course });
  const [startDate, setStartDate] = React.useState(moment().add(1, 'weeks').isoWeekday(6));
  const [endDate, setEndDate] = React.useState('');

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValues })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleDatesChange = (dates) => {
    setStartDate(dates.startDate);
    setEndDate(dates.endDate)
  }

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }
  const handleSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  return (
    <div className='p-10 bg-white w-full'>
      <h1 className='text-xl font-semibold'>Join the Learn Approach Waitlist 👋, <span className='font-normal'>please fill in your information below.</span></h1>

      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact">
        <div className='mb-2'>
          <fieldset className='flex border-0'>
            <legend className='block text-xs font-semibold text-gray-600 uppercase mb-2'>
            Learn Approach Training Option(s)
            </legend>
            <label className='block text-gray-700 mb-2 mr-8'>
              <input
                type='radio'
                value='bootcamp'
                defaultChecked={formValues.course === 'bootcamp'}
                onChange={handleSelect}
                className='mr-2 leading-tight'
                name='course'
              />
              <span className='text-sm'>
                Weekend Bootcamp
              </span>
            </label>
            <label className='block text-gray-700 mb-2 ml-8'>
              <input
                type='radio'
                value='6week'
                defaultChecked={formValues.course === '6week'}
                onChange={handleSelect}
                className='mr-2 leading-tight'
                name='course'
              />
              <span className='text-sm'>
                6-Week Transformation
              </span>
            </label>
          </fieldset>
        </div>

        <DatePicker
          handleDatesChange={handleDatesChange}
          startDate={startDate}
          endDate={endDate}
        />

        <div className='flex justify-between gap-3 mt-6'>
          <span className='w-1/2'>
            <label
              htmlhtmlFor='firstname'
              className='block text-xs font-semibold text-gray-600 uppercase'
            >
              Firstname
            </label>
            <input
              onChange={handleChange}
              value={formValues.firstname}
              type='text'
              name='firstname'
              placeholder='John'
              autoComplete='given-name'
              className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              required
            />
          </span>
          <span className='w-1/2'>
            <label
              htmlhtmlFor='lastname'
              className='block text-xs font-semibold text-gray-600 uppercase'
            >
              Lastname
            </label>
            <input
              onChange={handleChange}
              value={formValues.lastname}
              type='text'
              name='lastname'
              placeholder='Doe'
              autoComplete='family-name'
              className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
              required
            />
          </span>
        </div>

        <label
          htmlhtmlFor='email'
          className='block mt-2 text-xs font-semibold text-gray-600 uppercase'
        >
          E-mail
        </label>
        <input
          onChange={handleChange}
          value={formValues.email}
          type='email'
          name='mail'
          placeholder='john.doe@company.com'
          autoComplete='email'
          className='block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner'
          required
        />
        <button
          type='submit'
          className='w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none'
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
};


Form.propTypes = {
  course: PropTypes.string
}

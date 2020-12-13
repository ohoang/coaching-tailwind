import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';

const DatePicker = () => {
  const [focus, setFocus] = React.useState(START_DATE);
  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState('');

  // const handleFocusChange = focusedInput => setFocus(focusedInput);
  const handleDatesChange = (dates) => {
    console.log(dates)
    setStartDate(dates.startDate);
    setEndDate(dates.endDate)
  }

  const isDayBlocked = (day) => {

    const d = moment.weekdays(day.weekday());

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return weekdays.some(wd => wd === d);
  }

  return (
    <div className='my-10'>
    <DayPickerRangeController
      startDate={startDate}
      endDate={endDate}
      onDatesChange={handleDatesChange}
      focusedInput={focus}
      isDayBlocked={isDayBlocked}
      endDateOffset={(day) => day.add(1, 'days')}
      onFocusChange={(f) => {
        setFocus(!f ? START_DATE : f);
      }}
    />
    </div>
  )
}

export default DatePicker


import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';

const DatePicker = ({ handleDatesChange, startDate, endDate }) => {
  const [focus, setFocus] = React.useState(START_DATE);

  const isDayBlocked = (day) => {

    const d = moment.weekdays(day.weekday());

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return weekdays.some(wd => wd === d);
  }

  return (
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
  )
}

DatePicker.propTypes = {
  handleDatesChange: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string
}

export default DatePicker

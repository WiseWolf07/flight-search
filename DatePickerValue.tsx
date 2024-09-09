'use client'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs   
 } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';   


const DatePickerValue: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>   

        <DatePicker
          label="Start Date"
          defaultValue={dayjs('2022-04-17')}
        />
        <DatePicker
          label="End Date"
          value={value}
          onChange={(newValue) => setValue(newValue as Dayjs | null)}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DatePickerValue;
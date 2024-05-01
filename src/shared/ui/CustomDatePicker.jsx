import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import UserInput from './UserInput'
import { useState } from 'react'
import 'dayjs/locale/ru'

const CustomDatePicker = (field) => {
  console.log('222', Date.now())

  const [open, setOpen] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        {...field}
        id={field.id}
        format="DD.MM.YYYY"
        open={open}
        onClose={() => setOpen(false)}
        slots={{ textField: UserInput }}
        slotProps={{
          openPickerIcon: { sx: { display: 'none' } },
          textField: {
            placeholder: '',
            onClick: () => {
              setOpen(true)
            },
          },
          popper: {
            onBlur: () => {
              setOpen(false)
            },
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default CustomDatePicker

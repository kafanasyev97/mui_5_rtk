import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import UserInput from './UserInput'
import { useState } from 'react'

const CustomDatePicker = () => {
  const [open, setOpen] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
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

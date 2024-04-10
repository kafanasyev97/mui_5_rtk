// import React from 'react'
// import TextField from '@mui/material/TextField'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import 'dayjs/locale/ru'
// import UserInput from './UserInput'
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

// const DateField = () => {
//   const [selectedDate, setSelectedDate] = React.useState(null)

//   const handleDateChange = (date) => {
//     setSelectedDate(date)
//   }
//   return (
//     <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
//       <DatePicker />
//     </LocalizationProvider>
//   )
// }

// export default DateField

// import React from 'react'
// import TextField from '@mui/material/TextField'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import Popover from '@mui/material/Popover'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { DesktopDatePicker } from '@mui/x-date-pickers'

// function CustomDatePicker() {
//   const [selectedDate, setSelectedDate] = React.useState(null)
//   const [anchorEl, setAnchorEl] = React.useState(null)

//   const handleDateChange = (date) => {
//     setSelectedDate(date)
//     handleClose()
//   }

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   const open = Boolean(anchorEl)
//   const id = open ? 'simple-popover' : undefined

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <TextField
//           id="date-picker"
//           onClick={handleClick}
//           value={selectedDate ? selectedDate.toLocaleDateString() : ''}
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//         >
//           <DatePicker
//             value={selectedDate}
//             onChange={handleDateChange}
//             renderInput={(params) => (
//               <TextField {...params} variant="standard" />
//             )}
//           />
//         </Popover>
//       </div>
//     </LocalizationProvider>
//   )
// }

// export default CustomDatePicker

import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Popover from '@mui/material/Popover'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import 'dayjs/locale/ru'
import UserInput from './UserInput'

const DateField = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null)

  const formatSecondsToDate = (seconds) => {
    const date = new Date(seconds)

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  }

  const handleDateChange = (date) => {
    const formattedDate = formatSecondsToDate(date)

    setSelectedDate(formattedDate)
    handleClose()
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
      <div>
        <TextField
          id="date-picker"
          onClick={handleClick}
          value={selectedDate || ''}
        />
        <UserInput onClick={handleClick} value={selectedDate || ''} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <DateCalendar onChange={handleDateChange} />
        </Popover>
      </div>
    </LocalizationProvider>
  )
}

export default DateField

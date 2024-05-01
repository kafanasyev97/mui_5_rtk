import { TextField } from '@mui/material'

const UserInput = (field) => {
  return (
    <TextField
      {...field}
      id={field.id}
      type="text"
      variant="outlined"
      sx={{
        '& .MuiInputBase-input': {
          color: '#495057',
        },

        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ced4da',
          transition:
            'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
        },

        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ced4da',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
          },
        borderRadius: '0.25rem',
      }}
    />
  )
}

export default UserInput

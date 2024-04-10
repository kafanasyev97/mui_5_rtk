import { Button } from '@mui/material'

const UserButton = ({ title, bgColor, bgColorHover, bgBorderColor }) => {
  return (
    <Button
      variant="contained"
      sx={{
        border: '1px solid transparent',
        backgroundColor: bgColor,
        padding: '0.375rem 0.75rem',
        color: '#fff',
        '&:hover': {
          backgroundColor: bgColorHover,
          borderColor: bgBorderColor,
        },
      }}
    >
      {title}
    </Button>
  )
}

export default UserButton

import { Button } from '@mui/material'

const UserButton = ({
  title,
  bgColor,
  bgColorHover,
  bgBorderColor,
  width = '',
  type = 'button',
  handleClick = () => {},
}) => {
  console.log('ss', width)

  return (
    <Button
      type={type}
      onClick={handleClick}
      variant="contained"
      sx={{
        fontSize: '13px',
        width: width,
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

import { Button } from '@mui/material'

const UserButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        border: '1px solid transparent',
        backgroundColor: '#28a745',
        padding: '0.375rem 0.75rem',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#218838',
          borderColor: '#1e7e34',
        },
      }}
    >
      Добавить пользователя
    </Button>
  )
}

export default UserButton

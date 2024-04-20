import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../app/redux'

const useDeleteUser = (id) => {
  const [deleteUser] = useDeleteUserMutation()
  const navigate = useNavigate()

  const handleDeleteUser = async () => {
    const isConfirmed = window.confirm(
      'Вы уверены, что хотите удалить этот элемент?'
    )
    if (isConfirmed) {
      await deleteUser(id)
      navigate('/user/index')
    }
  }

  return { handleDeleteUser }
}

export { useDeleteUser }

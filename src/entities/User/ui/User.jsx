import { Link } from 'react-router-dom'
import png from '../../../shared/images/user-placeholder.png'
import { useDeleteUser } from '../../../shared/hooks/useDeleteUser'
import viewSvg from '../images/view.svg'
import editSvg from '../images/edit.svg'
import deleteSvg from '../images/delete.svg'

const User = ({
  id,
  username,
  email,
  birthdate,
  favorite_food_ids,
  photo_id,
  foods,
}) => {
  const { handleDeleteUser } = useDeleteUser(id)

  const photoUrl = photo_id
    ? `https://tasks.tizh.ru/file/get?id=${photo_id}`
    : png

  const foodsList = () => {
    if (!foods) return
    if (favorite_food_ids.length === 1 && favorite_food_ids[0] === '') return
    const list = favorite_food_ids.map((food) => {
      if (!food || food.includes(',')) return 'Не корректный ID еды'
      return foods[food]
    })
    return list.join(', ')
  }

  return (
    <>
      <td>{id}</td>
      <td>
        <img className="user-img" src={photoUrl} alt="user" />
      </td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{birthdate}</td>
      <td>{foodsList()}</td>
      <td>
        <Link to={`/user/view/${id}`}>
          <img src={viewSvg} alt="view" />
        </Link>

        <Link to={`/user/update/${id}`}>
          <img src={editSvg} alt="edit" />
        </Link>

        <img
          style={{ cursor: 'pointer', width: '14px' }}
          onClick={handleDeleteUser}
          src={deleteSvg}
          alt="delete"
        />
      </td>
    </>
  )
}

export default User

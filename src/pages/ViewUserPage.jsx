import { Link, useParams } from 'react-router-dom'
import UserButton from '../shared/UserButton'
import { useDeleteUser } from '../features/useDeleteUser'
import { useGetUser } from '../features/useGetUser'

const ViewUserPage = () => {
  const params = useParams()

  const { handleDeleteUser } = useDeleteUser(params.id)
  const user = useGetUser(params.id)

  if (!user) return null

  const { data, photoUrl, defValueFoods } = user
  console.log('444', data)

  const userFoodsList = (foodsList) => {
    if (foodsList.length === 0) return 'Не корректный ID еды'
    const foodsNameList = foodsList.map((item) => item.label)
    return foodsNameList.join(', ')
  }

  return (
    <div className="container">
      <nav className="nav-block">
        <ol className="nav-ol">
          <li>
            <a href="#">Главная</a>
          </li>
          <li className="lol">
            <a href="#">Пользователи</a>
          </li>
        </ol>
      </nav>
      <div>
        <Link to={`/user/update/${params.id}`}>
          <UserButton
            handleClick={() => console.log('2222')}
            title="Изменить"
            bgColor="#007bff"
            bgColorHover="#0069d9"
            bgBorderColor="#0062cc"
          />
        </Link>
        <Link to="#">
          <UserButton
            handleClick={handleDeleteUser}
            title="Удалить"
            bgColor="#dc3545"
            bgColorHover="#c82333"
            bgBorderColor="#bd2130"
          />
        </Link>
      </div>
      <table className="table-view">
        <tr>
          <th className="th-view">ID</th>
          <td className="td-view">{data.id}</td>
        </tr>
        <tr>
          <th className="th-view">Имя</th>
          <td className="td-view">{data.username}</td>
        </tr>
        <tr>
          <th className="th-view">Email</th>
          <td className="td-view">{data.email}</td>
        </tr>
        <tr>
          <th className="th-view">Дата рождения</th>
          <td className="td-view">{data.birthdate}</td>
        </tr>
        <tr>
          <th className="th-view">Любимая еда</th>
          <td className="td-view">{userFoodsList(defValueFoods)}</td>
        </tr>
        <tr>
          <th className="th-view">Фото</th>
          <td className="td-view">
            <img className="user-img" src={photoUrl} alt="" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default ViewUserPage

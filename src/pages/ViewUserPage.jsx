import { Link } from 'react-router-dom'
import png from '../shared/images/user-placeholder.png'

const ViewUserPage = () => {
  const user = {
    id: 22,
    username: 'gera',
    email: 'asd@mail.ru',
    birthdate: '12.12.12',
    favorite_food_ids: [1, 2],
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
        <Link to="/user/update/93">Изменить</Link>
        <Link to="#">Удалить</Link>
      </div>
      <table className="table-view">
        <tr>
          <th className="th-view">ID</th>
          <td className="td-view">{user.id}</td>
        </tr>
        <tr>
          <th className="th-view">Имя</th>
          <td className="td-view">{user.name}</td>
        </tr>
        <tr>
          <th className="th-view">Email</th>
          <td className="td-view">{user.email}</td>
        </tr>
        <tr>
          <th className="th-view">Дата рождения</th>
          <td className="td-view">{user.birthdate}</td>
        </tr>
        <tr>
          <th className="th-view">Любимая еда</th>
          <td className="td-view">{[...user.favorite_food_ids]}</td>
        </tr>
        <tr>
          <th className="th-view">Фото</th>
          <td className="td-view">
            <img className="user-img" src={png} alt="" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default ViewUserPage

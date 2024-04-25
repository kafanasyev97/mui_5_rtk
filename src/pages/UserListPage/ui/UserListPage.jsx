import { Link } from 'react-router-dom'
import UserButton from '../../../shared/ui/UserButton'
import UsersTable from './UsersTable'

const UserListPage = () => {
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
      <p>
        <Link to="/user/create">
          <UserButton
            title="Добавить пользователя"
            bgColor="#28a745"
            bgColorHover="#218838"
            bgBorderColor="#1e7e34"
          />
        </Link>
      </p>
      <UsersTable />
    </div>
  )
}

export default UserListPage

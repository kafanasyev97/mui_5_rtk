import { Link } from 'react-router-dom'
import UserButton from '../../../shared/ui/UserButton'
import UsersTable from './UsersTable'
import NavigationHistory from '../../../widgets/NavigationHistory/NavigationHistory'
import './UserListPage.scss'

const UserListPage = () => {
  return (
    <div className="container">
      <NavigationHistory />
      <p>
        <Link to="/user/create">
          <UserButton
            width="212.2px"
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

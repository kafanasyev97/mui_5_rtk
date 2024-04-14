import { useGetFoodsListQuery, useGetUserListQuery } from '../app/redux'
import { Link } from 'react-router-dom'
import UserButton from '../shared/UserButton'
import UserInput from '../shared/UserInput'
import DateField from '../shared/DateField'
import User from '../entities/User'
import InputStartPage from '../shared/InputStartPage'

const UserListPage = () => {
  const { data = [] } = useGetUserListQuery()
  const foods = useGetFoodsListQuery()

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
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Фото</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Дата рождения</th>
            <th>Любимая еда</th>
          </tr>
          <tr>
            <th></th>
            <th>
              <UserInput />
            </th>
            <th></th>
            <th style={{ width: '200px' }}>
              <UserInput />
            </th>
            <th style={{ width: '200px' }}>
              <UserInput />
            </th>
            <th>
              <DateField />
            </th>
            <th>
              <InputStartPage foods={foods.data} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <User
                  id={user.id}
                  username={user.username}
                  email={user.email}
                  birthdate={user.birthdate}
                  favorite_food_ids={user.favorite_food_ids}
                  photo_id={user.photo_id}
                  foods={foods.data}
                />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserListPage

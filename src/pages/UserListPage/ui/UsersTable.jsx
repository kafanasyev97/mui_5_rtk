import UserInput from '../../../shared/ui/UserInput'
import InputStartPage from '../../../shared/ui/InputStartPage'
import User from '../../../entities/User/ui/User'
import { useGetFoodsListQuery, useGetUserListQuery } from '../../../app/redux'
import { users, foodList } from '../../../defaultValues'
import CustomDatePicker from '../../../shared/ui/CustomDatePicker'

const UsersTable = () => {
  // const { data = [] } = useGetUserListQuery()  API
  const data = users

  // const foods = useGetFoodsListQuery() API

  return (
    <table className="main-table">
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
          <th className="main-table__input">
            <UserInput />
          </th>
          <th className="main-table__input">
            <UserInput />
          </th>
          <th className="main-table__date-picker">
            <CustomDatePicker />
          </th>
          <th>
            {/* <InputStartPage foods={foods.data} />  */} {/* API */}
            <InputStartPage foods={foodList} />
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
                // foods={foods.data}  {/* API */}
                foods={foodList}
              />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UsersTable

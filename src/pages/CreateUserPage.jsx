import { useCreateUserMutation, useGetFoodsListQuery } from '../app/redux'
import CreateFormUser from '../shared/CreateForm'

const CreateUserPage = () => {
  const [addUser, { isError }] = useCreateUserMutation()
  const foods = useGetFoodsListQuery()
  const foodsData = foods.data

  const foodsList = []

  for (const food in foodsData) {
    foodsList.push({ id: food, label: foodsData[food] })
  }

  const user = {
    username: 'gera',
    email: 'asd@mail.ru',
    birthdate: '12.12.12',
  }

  const handleCreateUser = async () => {
    await addUser(user).unwrap()
  }

  return (
    <div>
      {/* <p>Create</p>
      <button onClick={handleCreateUser}>Click me</button> */}
      <div className="container">
        <div className="user-form">
          <CreateFormUser foodsList={foodsList} />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

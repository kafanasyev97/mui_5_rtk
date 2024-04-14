import { useGetFoodsListQuery } from '../app/redux'
import CreateFormUser from '../shared/CreateForm'

const CreateUserPage = () => {
  const foods = useGetFoodsListQuery()
  const foodsData = foods.data

  const foodsList = []

  for (const food in foodsData) {
    foodsList.push({ id: food, label: foodsData[food] })
  }

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <CreateFormUser foodsList={foodsList} />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

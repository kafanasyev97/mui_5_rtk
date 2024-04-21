import { useParams } from 'react-router-dom'
import {
  useGetFoodsListQuery,
  useUpdateUserMutation,
  useGetUserQuery,
} from '../app/redux'
import UpdateFormUser from '../shared/UpdateForm'

const UpdateUserPage = () => {
  const { id } = useParams()

  const [updateUser] = useUpdateUserMutation(id)

  const foods = useGetFoodsListQuery()
  const { data = [], isLoading } = useGetUserQuery(id)

  if (isLoading) return null

  const foodsData = foods.data

  const foodsList = []

  for (const food in foodsData) {
    foodsList.push({ id: food, label: foodsData[food] })
  }

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <UpdateFormUser userData={data} foodsList={foodsList} />
        </div>
      </div>
    </div>
  )
}

export default UpdateUserPage

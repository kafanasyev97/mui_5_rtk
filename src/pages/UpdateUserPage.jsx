import { useParams } from 'react-router-dom'
import {
  useGetFoodsListQuery,
  useUpdateUserMutation,
  useGetUserQuery,
} from '../app/redux'
import UpdateFormUser from '../shared/UpdateForm'
import { useGetUser } from '../features/useGetUser'

const UpdateUserPage = () => {
  const { id } = useParams()

  const user = useGetUser(id)

  if (!user) return null

  const { data, photoUrl, foodsList, defValueFoods } = user
  console.log('444', data)

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <UpdateFormUser
            defValueFoods={defValueFoods}
            photoUrl={photoUrl}
            userData={data}
            foodsList={foodsList}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateUserPage

import { useParams } from 'react-router-dom'
import UpdateFormUser from '../../widgets/FormUpdate/UpdateForm'
import { useGetUser } from '../../shared/hooks/useGetUser'

const UpdateUserPage = () => {
  const { id } = useParams()

  const user = useGetUser(id)

  if (!user) return null

  const { data, photoUrl, foodsList, defValueFoods } = user

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

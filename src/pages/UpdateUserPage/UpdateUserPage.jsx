import { useParams } from 'react-router-dom'
import UpdateFormUser from '../../widgets/FormUpdate/UpdateForm'
import { useGetUser } from '../../shared/hooks/useGetUser'
import { users, foodListForSelectInput } from '../../defaultValues'

const UpdateUserPage = () => {
  const { id } = useParams()

  const user = useGetUser(id)

  if (!user) return null

  // const { data, photoUrl, foodsList, defValueFoods } = user  {/* API */}

  const data = users.find((el) => el.id === id)
  const photoUrl = ''
  const defValueFoods = foodListForSelectInput.filter((el) =>
    data.favorite_food_ids.includes(el.id)
  )

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <UpdateFormUser
            defValueFoods={defValueFoods}
            photoUrl={photoUrl}
            userData={data}
            // foodsList={foodsList}
            foodsList={foodListForSelectInput}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateUserPage

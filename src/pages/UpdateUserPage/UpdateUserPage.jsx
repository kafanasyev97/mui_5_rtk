import { useNavigate, useParams } from 'react-router-dom'
import { useGetUser } from '../../shared/hooks/useGetUser'
import { users, foodListForSelectInput } from '../../defaultValues'
import UserForm from '../../widgets/Form/UserForm'
import { useUpdateUserMutation } from '../../app/redux'

const UpdateUserPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [updateUser] = useUpdateUserMutation()

  const user = useGetUser(id)

  if (!user) return null

  // const { data, photoUrl, foodsList, defValueFoods } = user  {/* API */}

  const data = users.find((el) => el.id === id)
  const photoUrl = ''
  const defValueFoods = foodListForSelectInput.filter((el) =>
    data.favorite_food_ids.includes(el.id)
  )

  const onSubmit = async (data) => {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].forEach((value, index) => {
            formData.append(`${key}[${index}]`, value)
          })
        } else formData.set(key, data[key])
      }
    })

    if (!data['favorite_food_ids'] || data['favorite_food_ids'].length === 0)
      formData.set('favorite_food_ids', '')

    const user = await updateUser({ id, formData }).unwrap()

    navigate(`/user/view/${user.id}`, { replace: true })
    navigate(0)
  }

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <UserForm
            onSubmit={onSubmit}
            defValueFoods={defValueFoods}
            photoUrl={photoUrl}
            userData={data}
            // foodsList={foodsList}  {/* API */}
            foodsList={foodListForSelectInput}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateUserPage

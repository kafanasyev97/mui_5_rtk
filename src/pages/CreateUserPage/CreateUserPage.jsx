import { useNavigate } from 'react-router-dom'
import { useCreateUserMutation, useGetFoodsListQuery } from '../../app/redux'
import UserForm from '../../widgets/Form/UserForm'
import { foodListForSelectInput } from '../../defaultValues'

const CreateUserPage = () => {
  const navigate = useNavigate()
  const [addUser] = useCreateUserMutation()

  const foods = useGetFoodsListQuery()
  const foodsData = foods.data

  const foodsList = []

  for (const food in foodsData) {
    foodsList.push({ id: food, label: foodsData[food] })
  }

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

    if (!data['favorite_food_ids']) formData.set('favorite_food_ids', '')

    const user = await addUser(formData).unwrap()

    navigate(`/user/view/${user.id}`, { replace: true })
  }

  return (
    <div>
      <div className="container">
        <div className="user-form">
          <UserForm
            onSubmit={onSubmit}
            //  foodsList={foodsList}  {/* API */}
            foodsList={foodListForSelectInput}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

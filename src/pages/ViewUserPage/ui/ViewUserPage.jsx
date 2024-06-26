import { Link, useParams } from 'react-router-dom'
import UserButton from '../../../shared/ui/UserButton'
import { useDeleteUser } from '../../../shared/hooks/useDeleteUser'
import { useGetUser } from '../../../shared/hooks/useGetUser'
import UserInfoTable from './UserInfoTable'
import { users, foodListForSelectInput } from '../../../defaultValues'
import NavigationHistory from '../../../widgets/NavigationHistory/NavigationHistory'
import './ViewUserPage.scss'

const ViewUserPage = () => {
  const { id } = useParams()

  const { handleDeleteUser } = useDeleteUser(id)
  const user = useGetUser(id)

  if (!user) return null

  // const { data, photoUrl, defValueFoods } = user  {/* API */}
  const data = users.find((el) => el.id === id)
  if (!data) return null

  const photoUrl = ''
  const defValueFoods = foodListForSelectInput.filter((el) =>
    data.favorite_food_ids.includes(el.id)
  )

  return (
    <div className="container">
      <NavigationHistory />
      <div className="user-buttons">
        <Link to={`/user/update/${id}`}>
          <UserButton
            width="100px"
            title="Изменить"
            bgColor="#007bff"
            bgColorHover="#0069d9"
            bgBorderColor="#0062cc"
          />
        </Link>
        <UserButton
          width="100px"
          handleClick={handleDeleteUser}
          title="Удалить"
          bgColor="#dc3545"
          bgColorHover="#c82333"
          bgBorderColor="#bd2130"
        />
      </div>
      <UserInfoTable
        data={data}
        photoUrl={photoUrl}
        defValueFoods={defValueFoods}
      />
    </div>
  )
}

export default ViewUserPage

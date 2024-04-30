const UserInfoTable = ({ data, photoUrl, defValueFoods }) => {
  const userFoodsList = (foodsList) => {
    if (foodsList.length === 0) return 'Не корректный ID еды'
    const foodsNameList = foodsList.map((item) => item.label)
    return foodsNameList.join(', ')
  }

  return (
    <table className="user-table">
      <tr>
        <th className="user-table__th">ID</th>
        <td className="user-table__td">{data.id}</td>
      </tr>
      <tr>
        <th className="user-table__th">Имя</th>
        <td className="user-table__td">{data.username}</td>
      </tr>
      <tr>
        <th className="user-table__th">Email</th>
        <td className="user-table__td">{data.email}</td>
      </tr>
      <tr>
        <th className="user-table__th">Дата рождения</th>
        <td className="user-table__td">{data.birthdate}</td>
      </tr>
      <tr>
        <th className="user-table__th">Любимая еда</th>
        <td className="user-table__td">{userFoodsList(defValueFoods)}</td>
      </tr>
      <tr>
        <th className="user-table__th">Фото</th>
        <td className="user-table__td">
          <img className="user-img" src={photoUrl} alt="user" />
        </td>
      </tr>
    </table>
  )
}

export default UserInfoTable

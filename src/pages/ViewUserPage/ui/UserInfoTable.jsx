const UserInfoTable = ({ data, photoUrl, defValueFoods }) => {
  const userFoodsList = (foodsList) => {
    if (foodsList.length === 0) return 'Не корректный ID еды'
    const foodsNameList = foodsList.map((item) => item.label)
    return foodsNameList.join(', ')
  }

  return (
    <table className="table-view">
      <tr>
        <th className="th-view">ID</th>
        <td className="td-view">{data.id}</td>
      </tr>
      <tr>
        <th className="th-view">Имя</th>
        <td className="td-view">{data.username}</td>
      </tr>
      <tr>
        <th className="th-view">Email</th>
        <td className="td-view">{data.email}</td>
      </tr>
      <tr>
        <th className="th-view">Дата рождения</th>
        <td className="td-view">{data.birthdate}</td>
      </tr>
      <tr>
        <th className="th-view">Любимая еда</th>
        <td className="td-view">{userFoodsList(defValueFoods)}</td>
      </tr>
      <tr>
        <th className="th-view">Фото</th>
        <td className="td-view">
          <img className="user-img" src={photoUrl} alt="" />
        </td>
      </tr>
    </table>
  )
}

export default UserInfoTable

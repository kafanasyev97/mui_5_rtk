import { useGetUserListQuery } from '../app/redux'
import png from '../shared/images/user-placeholder.png'

const UserListPage = () => {
  const { data = [] } = useGetUserListQuery()

  return (
    <div className="container">
      <nav className="nav-block">
        <ol className="nav-ol">
          <li>
            <a href="#">Главная</a>
          </li>
          <li className="lol">
            <a href="#">Пользователи</a>
          </li>
        </ol>
      </nav>
      <p>
        <a href="#">Добавить пользователя</a>
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Фото</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Дата рождения</th>
            <th>Любимая еда</th>
          </tr>
          <tr>
            <th></th>
            <th>
              <input type="text" />
            </th>
            <th></th>
            <th>
              <input type="text" />
            </th>
            <th>
              <input type="text" />
            </th>
            <th>
              <input type="text" />
            </th>
            <th>
              <input type="text" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>
                  <img className="user-img" src={png} alt="" />
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.birthdate}</td>
                <td>{[...user.favorite_food_ids]}</td>
                <td>
                  <a href="#">
                    <svg
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        fontSize: 'inherit',
                        height: '1em',
                        overflow: 'visible',
                        verticalAlign: '-.125em',
                        width: '1.125em',
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="#007bff"
                        d="M573 241C518 136 411 64 288 64S58 136 3 241a32 32 0 000 30c55 105 162 177 285 177s230-72 285-177a32 32 0 000-30zM288 400a144 144 0 11144-144 144 144 0 01-144 144zm0-240a95 95 0 00-25 4 48 48 0 01-67 67 96 96 0 1092-71z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        fontSize: 'inherit',
                        height: '1em',
                        overflow: 'visible',
                        verticalAlign: '-.125em',
                        width: '1em',
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#007bff"
                        d="M498 142l-46 46c-5 5-13 5-17 0L324 77c-5-5-5-12 0-17l46-46c19-19 49-19 68 0l60 60c19 19 19 49 0 68zm-214-42L22 362 0 484c-3 16 12 30 28 28l122-22 262-262c5-5 5-13 0-17L301 100c-4-5-12-5-17 0zM124 340c-5-6-5-14 0-20l154-154c6-5 14-5 20 0s5 14 0 20L144 340c-6 5-14 5-20 0zm-36 84h48v36l-64 12-32-31 12-65h36v48z"
                      ></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        fontSize: 'inherit',
                        height: '1em',
                        overflow: 'visible',
                        verticalAlign: '-.125em',
                        width: '.875em',
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#007bff"
                        d="M32 464a48 48 0 0048 48h288a48 48 0 0048-48V128H32zm272-256a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zM432 32H312l-9-19a24 24 0 00-22-13H167a24 24 0 00-22 13l-9 19H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z"
                      ></path>
                    </svg>
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserListPage

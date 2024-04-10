import { useCreateUserMutation } from '../app/redux'
import UserInput from '../shared/TextField'
import png from '../shared/images/user-placeholder.png'

const CreateUserPage = () => {
  const [addUser, { isError }] = useCreateUserMutation()

  const user = {
    username: 'gera',
    email: 'asd@mail.ru',
    birthdate: '12.12.12',
  }

  const handleCreateUser = async () => {
    await addUser(user).unwrap()
  }

  return (
    <div>
      <p>Create</p>
      <button onClick={handleCreateUser}>Click me</button>
      <div className="container">
        <div className="user-form">
          <form action="">
            <img className="user-img" src={png} alt="" />
            <br />
            <label htmlFor="file">Заменить</label>
            <input type="file" id="file" />
            <br />

            <label htmlFor="name"></label>
            <UserInput />
            <br />

            <label htmlFor="email"></label>
            <UserInput />
            <br />

            <label htmlFor="date"></label>
            <input type="date" id="date" name="date" />
            <br />

            <label htmlFor="programming-language">Любимая еда</label>
            <select
              id="programming-language"
              name="programming-language"
              multiple
            >
              <option value="ruby">Выбрать все</option>
              <option value="python">Морковка</option>
              <option value="javascript">Капуста</option>
              <option value="java">Свекла</option>
              <option value="csharp">Редиска</option>
              <option value="cpp">Сосиска</option>
              <option value="php">Пирожок</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

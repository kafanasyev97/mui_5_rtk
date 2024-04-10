import { useCreateUserMutation } from '../app/redux'
import ButtonSave from '../shared/ButtonSave'
import CreateFormUser from '../shared/CreateForm'
import SelectInput from '../shared/SelectInput'
import UserInput from '../shared/UserInput'
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
      {/* <p>Create</p>
      <button onClick={handleCreateUser}>Click me</button> */}
      <div className="container">
        <div className="user-form">
          {/* <form className="formm" action="">
            <div className="create_form">
              <img className="user-img" src={png} alt="" />
            </div>
            <div className="img-input">
              <label htmlFor="file">Заменить</label>
              <input type="file" id="file" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Имя</label>
              <UserInput />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <UserInput />
            </div>

            <div className="input-block">
              <label htmlFor="date">Дата рождения</label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-block">
              <label htmlFor="programming-language">Любимая еда</label>
              <SelectInput id="programming-language" width="100%" />
            </div>
            <ButtonSave
              title="Сохранить"
              bgColor="#28a745"
              bgColorHover="#218838"
              bgBorderColor="#1e7e34"
            />
          </form> */}
          <CreateFormUser />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

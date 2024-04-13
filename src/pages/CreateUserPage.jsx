import { useCreateUserMutation } from '../app/redux'
import CreateFormUser from '../shared/CreateForm'

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
          <CreateFormUser />
        </div>
      </div>
    </div>
  )
}

export default CreateUserPage

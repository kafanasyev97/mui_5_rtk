import { useForm, Controller } from 'react-hook-form'
import SelectInput from './SelectInput'
import UserInput from './UserInput'
import png from '../shared/images/user-placeholder.png'
import ButtonSave from '../shared/ButtonSave'

const CreateFormUser = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {},
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <form className="formm" onSubmit={handleSubmit(onSubmit)}>
        <div className="create_form">
          <img className="user-img" src={png} alt="" />
        </div>
        <div className="img-input">
          <label htmlFor="file">Заменить</label>
          <input type="file" id="file" />
        </div>

        <div className="input-block">
          <label htmlFor="name">Имя</label>
          <Controller
            width="300"
            name="name"
            control={control}
            render={({ field }) => <UserInput {...field} id="name" />}
          />
        </div>

        <div className="input-block">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <UserInput {...field} id="email" />}
          />
        </div>

        <div className="input-block">
          <label htmlFor="date">Дата рождения</label>
          <Controller
            id="date"
            name="birthdate"
            control={control}
            render={({ field }) => <UserInput {...field} id="date" />}
          />
        </div>

        <div className="input-block">
          <label htmlFor="favorite_food_ids">Любимая еда</label>
          <Controller
            name="favorite_food_ids"
            control={control}
            defaultValue={[]}
            render={({ field }) => <SelectInput {...field} width="100%" />}
          />
        </div>

        <ButtonSave
          title="Сохранить"
          bgColor="#28a745"
          bgColorHover="#218838"
          bgBorderColor="#1e7e34"
        />
      </form>
    </div>
  )
}

export default CreateFormUser

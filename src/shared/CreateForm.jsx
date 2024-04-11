import { useForm, Controller } from 'react-hook-form'
import SelectInput from './SelectInput'
import UserInput from './UserInput'
import png from '../shared/images/user-placeholder.png'
import MultipleSelect from './MultSelect'
import Form from './MultSelect'
import { useState } from 'react'

const CreateFormUser = () => {
  const [selectValue, setSelectValue] = useState([])
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
            render={({ field }) => <UserInput {...field} />}
          />
        </div>

        <div className="input-block">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <UserInput {...field} />}
          />
        </div>

        <div className="input-block">
          <label htmlFor="date">Дата рождения</label>
          <Controller
            id="date"
            name="birthdate"
            control={control}
            render={({ field }) => <UserInput {...field} />}
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

        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateFormUser

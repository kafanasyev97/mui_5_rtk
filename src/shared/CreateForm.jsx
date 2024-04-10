import { useForm, Controller } from 'react-hook-form'
import SelectInput from './SelectInput'
import UserInput from './UserInput'
import png from '../shared/images/user-placeholder.png'

const CreateFormUser = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {},
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
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
          name="name"
          control={control}
          render={({ field }) => <input {...field} />}
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
          name="birthdate"
          control={control}
          render={({ field }) => <UserInput {...field} />}
        />
      </div>

      <div className="input-block">
        <label htmlFor="programming-language">Любимая еда</label>
        <Controller
          name="favorite_food_ids"
          control={control}
          render={({ field }) => (
            <SelectInput
              {...field}
              options={[
                { value: 'morkov', label: 'Морковка' },
                { value: 'kapusta', label: 'Капуста' },
                { value: 'svekla', label: 'Свекла' },
                { value: 'rediska', label: 'Редиска' },
                { value: 'sosiska', label: 'Сосиска' },
                { value: 'pirozhok', label: 'Пирожок' },
              ]}
            />
          )}
        />
      </div>
      <input type="submit" />
    </form>
  )
}

export default CreateFormUser

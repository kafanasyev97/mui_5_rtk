import { useForm, Controller } from 'react-hook-form'
import SelectInput from './SelectInput'
import UserInput from './UserInput'
import png from '../shared/images/user-placeholder.png'
import ButtonSave from '../shared/ButtonSave'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Необходимо заполнить «Имя».'),
  email: yup
    .string()
    .required('Необходимо заполнить «Email».')
    .email('Значение «Email» не является правильным email адресом.'),
  birthdate: yup.string().required('Необходимо заполнить «Дата рождения».'),
})

const CreateFormUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <div>
      <form className="formm" onSubmit={handleSubmit(onSubmit)}>
        <div className="create_form">
          <img className="user-img" src={png} alt="" />
        </div>
        <div className="img-input">
          <label htmlFor="file">Заменить</label>
          <input style={{ display: 'none' }} type="file" id="file" />
        </div>

        <div className="input-block">
          <label htmlFor="name">Имя</label>
          <Controller
            width="300"
            name="name"
            control={control}
            render={({ field }) => <UserInput {...field} id="name" />}
          />
          <p className="error-text">{errors.name?.message}</p>
        </div>

        <div className="input-block">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <UserInput {...field} id="email" />}
          />
          <p className="error-text">{errors.email?.message}</p>
        </div>

        <div className="input-block">
          <label htmlFor="birthdate">Дата рождения</label>
          <Controller
            name="birthdate"
            control={control}
            render={({ field }) => <UserInput {...field} id="birthdate" />}
          />
          <p className="error-text">{errors.birthdate?.message}</p>
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

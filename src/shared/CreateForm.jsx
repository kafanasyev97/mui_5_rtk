import { useForm, Controller } from 'react-hook-form'
import SelectInput from './SelectInput'
import UserInput from './UserInput'
import png from '../shared/images/user-placeholder.png'
import ButtonSave from '../shared/ButtonSave'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import { useCreateUserMutation } from '../app/redux'

const schema = yup.object({
  username: yup.string().required('Необходимо заполнить «Имя».'),
  email: yup
    .string()
    .required('Необходимо заполнить «Email».')
    .email('Значение «Email» не является правильным email адресом.'),
  birthdate: yup.string().required('Необходимо заполнить «Дата рождения».'),
})

const CreateFormUser = ({ foodsList }) => {
  const [addUser] = useCreateUserMutation()
  const [imageUrl, setImageUrl] = useState(png)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    const formData = new FormData()
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].forEach((value, index) => {
            formData.append(`${key}[${index}]`, value)
          })
        } else formData.set(key, data[key])
      }
    })

    await addUser(formData).unwrap()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImageUrl(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <form className="formm" onSubmit={handleSubmit(onSubmit)}>
        <div className="create_form">
          <img className="user-img" src={imageUrl} alt="" />
        </div>
        <div className="img-input">
          <label htmlFor="upload_photo">Заменить</label>
          <Controller
            name="upload_photo"
            control={control}
            // defaultValue={null} // Значение по умолчанию
            render={({ field }) => (
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => {
                  handleFileChange(e)
                  field.onChange(e.target.files[0])
                }}
                id="upload_photo"
              />
            )}
          />
        </div>

        <div className="input-block">
          <label htmlFor="username">Имя</label>
          <Controller
            width="300"
            name="username"
            control={control}
            render={({ field }) => <UserInput {...field} id="username" />}
          />
          <p className="error-text">{errors.username?.message}</p>
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
            id="favorite_food_ids"
            name="favorite_food_ids"
            control={control}
            // defaultValue={[]}
            render={({ field }) => (
              <SelectInput {...field} foodsList={foodsList} width="100%" />
            )}
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

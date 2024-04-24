import { useForm, Controller } from 'react-hook-form'
import SelectInput from '../../shared/ui/SelectInput'
import ButtonSave from '../../shared/ui/ButtonSave'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useUpdateUserMutation } from '../../app/redux'
import UserUpdateInput from '../../shared/ui/UserUpdateInput'
import { useNavigate } from 'react-router-dom'
import { schema } from '../../features/FormValidation/schemaYup'

const UpdateFormUser = ({ foodsList, userData, photoUrl, defValueFoods }) => {
  const [updateUser] = useUpdateUserMutation()
  const [imageUrl, setImageUrl] = useState(photoUrl)
  const navigate = useNavigate()

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

    console.log('bbbb', data, data['favorite_food_ids'])

    if (!data['favorite_food_ids'] || data['favorite_food_ids'].length === 0)
      formData.set('favorite_food_ids', '')

    const user = await updateUser({ id: userData.id, formData }).unwrap()

    navigate(`/user/view/${user.id}`, { replace: true })
    navigate(0)
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
            defaultValue={userData.username}
            control={control}
            render={({ field }) => (
              <UserUpdateInput
                {...field}
                id="username"
                defaultValue={userData.username}
              />
            )}
          />
          <p className="error-text">{errors.username?.message}</p>
        </div>

        <div className="input-block">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            defaultValue={userData.email}
            control={control}
            render={({ field }) => (
              <UserUpdateInput
                {...field}
                id="email"
                defaultValue={userData.email}
              />
            )}
          />
          <p className="error-text">{errors.email?.message}</p>
        </div>

        <div className="input-block">
          <label htmlFor="birthdate">Дата рождения</label>
          <Controller
            name="birthdate"
            defaultValue={userData.birthdate}
            control={control}
            render={({ field }) => (
              <UserUpdateInput
                {...field}
                id="birthdate"
                defaultValue={userData.birthdate}
              />
            )}
          />
          <p className="error-text">{errors.birthdate?.message}</p>
        </div>

        <div className="input-block">
          <label htmlFor="favorite_food_ids">Любимая еда</label>
          <Controller
            id="favorite_food_ids"
            name="favorite_food_ids"
            control={control}
            render={({ field }) => (
              <SelectInput
                {...field}
                foodsList={foodsList}
                width="100%"
                defaultValue={defValueFoods}
              />
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

export default UpdateFormUser
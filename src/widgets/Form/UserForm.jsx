import { useForm, Controller } from 'react-hook-form'
import SelectInput from '../../shared/ui/SelectInput'
import UserInput from '../../shared/ui/UserInput'
import defaultPng from '../../shared/images/user-placeholder.png'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { schema } from '../../features/FormValidation/schemaYup'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'
import UserButton from '../../shared/ui/UserButton'
import './UserForm.scss'

const UserForm = ({
  foodsList,
  onSubmit,
  userData = {},
  photoUrl = '',
  defValueFoods = [],
}) => {
  const [imageUrl, setImageUrl] = useState(photoUrl || defaultPng)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImageUrl(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__img">
        <img className="user-img" src={imageUrl} alt="user" />
      </div>
      <div className="form__img-input">
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

      <div className="form__input">
        <label htmlFor="username">Имя</label>
        <Controller
          width="300"
          name="username"
          defaultValue={userData.username || ''}
          control={control}
          render={({ field }) => <UserInput {...field} id="username" />}
        />
        <p className="error-text">{errors.username?.message}</p>
      </div>

      <div className="form__input">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          defaultValue={userData.email || ''}
          control={control}
          render={({ field }) => <UserInput {...field} id="email" />}
        />
        <p className="error-text">{errors.email?.message}</p>
      </div>

      <div className="form__input">
        <label htmlFor="birthdate">Дата рождения</label>
        <Controller
          name="birthdate"
          defaultValue={userData.birthdate || ''}
          control={control}
          render={({ field }) => <UserInput {...field} id="birthdate" />}
        />
        <p className="error-text">{errors.birthdate?.message}</p>
      </div>

      <div className="form__input">
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

      <UserButton
        type="submit"
        width="105px"
        title="Сохранить"
        bgColor="#28a745"
        bgColorHover="#218838"
        bgBorderColor="#1e7e34"
      />
    </form>
  )
}

export default UserForm

{
  /* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          field={TextField}
          open={open}
          slots={{ textField: UserInput }}
          slotProps={{
            textField: { onClick: () => setOpen(true) },
            openPickerIcon: { sx: { display: 'none' } },
          }}
          disablePast={true}
        />
      </LocalizationProvider> */
}

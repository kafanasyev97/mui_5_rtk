import { useForm, Controller } from 'react-hook-form'
import SelectInput from '../../shared/ui/SelectInput'
import UserInput from '../../shared/ui/UserInput'
import defaultPng from '../../shared/images/user-placeholder.png'
import ButtonSave from '../../shared/ui/ButtonSave'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useCreateUserMutation } from '../../app/redux'
import { useNavigate } from 'react-router-dom'
import { schema } from '../../features/FormValidation/schemaYup'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material'

const CreateFormUser = ({ foodsList }) => {
  const [addUser] = useCreateUserMutation()

  const [imageUrl, setImageUrl] = useState(defaultPng)
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

    if (!data['favorite_food_ids']) formData.set('favorite_food_ids', '')

    const user = await addUser(formData).unwrap()

    navigate(`/user/view/${user.id}`, { replace: true })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImageUrl(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  // const [open, setOpen] = useState(false)

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

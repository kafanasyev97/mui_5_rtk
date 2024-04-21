import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required('Необходимо заполнить «Имя».'),
  email: yup
    .string()
    .required('Необходимо заполнить «Email».')
    .email('Значение «Email» не является правильным email адресом.'),
  birthdate: yup.string().required('Необходимо заполнить «Дата рождения».'),
})

export { schema }

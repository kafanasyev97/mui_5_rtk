import { useForm, Controller } from 'react-hook-form'

const TestInput = () => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    // Вы можете отправить данные на сервер здесь
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Контроллер для текстового input */}
      <Controller
        name="text" // Название поля формы
        control={control}
        defaultValue="" // Значение по умолчанию
        render={({ field }) => <input type="text" {...field} />} // Передаем пропсы field в input
      />

      {/* Контроллер для input файла */}
      <Controller
        name="file" // Название поля формы
        control={control}
        defaultValue={null} // Значение по умолчанию
        render={({ field }) => (
          <input
            type="file"
            onChange={(e) => field.onChange(e.target.files[0])}
          />
        )} // Передаем пропсы field в input
      />

      <button type="submit">Отправить</button>
    </form>
  )
}

export default TestInput

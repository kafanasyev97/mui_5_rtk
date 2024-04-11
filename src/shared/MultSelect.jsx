import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Select, MenuItem, Button } from '@mui/material'

const Form = () => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('Выбранные блюда:', data.food)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="food">Любимая еда:</label>
        <Controller
          name="food"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              multiple
              variant="outlined"
              style={{ minWidth: 200 }}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <div key={value}>{value}</div>
                  ))}
                </div>
              )}
            >
              <MenuItem value="1">Морковка</MenuItem>
              <MenuItem value="2">Капуста</MenuItem>
              <MenuItem value="3">Свекла</MenuItem>
              <MenuItem value="4">Редиска</MenuItem>
              <MenuItem value="5">Сосиска</MenuItem>
              <MenuItem value="6">Пирожок</MenuItem>
            </Select>
          )}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Отправить
      </Button>
    </form>
  )
}

export default Form

const lst = {
  1: 'Морковка',
  2: 'Капуста',
  3: 'Свёкла',
  4: 'Редиска',
  5: 'Сосиска',
  6: 'Пирожок',
}

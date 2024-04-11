import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import UserInput from './UserInput'

export default function SelectInput(field) {
  const width = field.width || 200
  return (
    <Stack spacing={3} sx={{ width }}>
      <Autocomplete
        {...field}
        forcePopupIcon={false}
        multiple
        options={list}
        getOptionLabel={list.label}
        onChange={(event, value) => field.onChange(value)}
        filterSelectedOptions
        renderInput={(params) => <UserInput {...params} />}
      />
    </Stack>
  )
}

const list = [
  { id: 1, label: 'Морковка' },
  { id: 2, label: 'Капуста' },
  { id: 3, label: 'Свекла' },
  { id: 4, label: 'Редиска' },
  { id: 5, label: 'Сосиска' },
  { id: 6, label: 'Пирожок' },
]

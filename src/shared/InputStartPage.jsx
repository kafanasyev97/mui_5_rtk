import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import UserInput from './UserInput'

export default function InputStartPage() {
  return (
    <Stack spacing={3} sx={{ width: 250 }}>
      <Autocomplete
        forcePopupIcon={false}
        multiple
        options={list}
        getOptionLabel={list.label}
        // onChange={(event, value) => field.onChange(value)}
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

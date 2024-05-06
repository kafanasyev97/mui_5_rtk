import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import UserInput from './UserInput'

export default function InputStartPage({ foods }) {
  const foodsList = []

  for (const food in foods) {
    foodsList.push({ id: food, label: foods[food] })
  }

  return (
    <Stack spacing={3} sx={{ width: 250 }}>
      <Autocomplete
        forcePopupIcon={false}
        multiple
        options={foodsList}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => <UserInput {...params} />}
      />
    </Stack>
  )
}

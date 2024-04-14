import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import UserInput from './UserInput'

export default function SelectInput(field) {
  const width = field.width || 200

  return (
    <Stack spacing={3} sx={{ width }}>
      <Autocomplete
        {...field}
        // value={field.value}
        forcePopupIcon={false}
        multiple
        options={field.foodsList}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(event, value) => field.onChange(value.map((val) => val.id))}
        filterSelectedOptions
        renderInput={(params) => <UserInput {...params} />}
      />
    </Stack>
  )
}

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        forcePopupIcon={false}
        multiple
        id="tags-outlined"
        options={list}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  )
}

const list = ['Морковка', 'Капуста', 'Свекла']

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function SelectInput(props) {
  const width = props.width || 300
  return (
    <Stack spacing={3} sx={{ width }}>
      <Autocomplete
        forcePopupIcon={false}
        multiple
        id={props.id}
        options={list}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  )
}

const list = ['Морковка', 'Капуста', 'Свекла']

import { InfinitySpin } from 'react-loader-spinner'
import { Stack } from '@mui/material'

const Loader = () => {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      width='100%'
    >
      <InfinitySpin color='gray' />
    </Stack>
  )
}

export default Loader
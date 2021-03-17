import { Box, CircularProgress } from '@material-ui/core'

export default function Preload () {
  return (
    <Box display='flex' flex='1' justifyContent='space-around'>
      <CircularProgress size={100} />
    </Box>
  )
}
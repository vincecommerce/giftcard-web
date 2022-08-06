import { Stack, Box, Fab, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East'
import React from 'react'
import { IStoreGiftCard } from '../types'

export const StoreGiftCard = (props: IStoreGiftCard) => {
  return (
    <Box sx={{ mb: { xs: '1.5rem' } }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          width: '390px',
          height: '230px',
          backgroundImage: `url(http://127.0.0.1:8080/ipfs/${props.imageHash})`,
          backgroundSize: 'cover',
          borderRadius: '1.3rem',
          resize: 'both'
        }}
      >
        <Fab variant="extended" size="small" color={props.isInCart ? 'error' : 'success'} sx={{ m: 1, boxShadow: 1 }}>
          {props.isInCart ? '-' : '+'}
        </Fab>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: 'wrap', mt: '1rem' }}>
        <Typography sx={{ color: 'white', fontWeight: '500', fontSize: '1.3rem' }}>{props.text}</Typography>
        <Typography sx={{ color: 'white', fontWeight: 'light', fontSize: '1.3rem' }}>${props.price}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: 'wrap', mt: '0.5rem' }}>
        <Fab variant="extended" size="medium" color="info" sx={{ boxShadow: 1 }}>
          Buy Now
          <EastIcon sx={{ ml: 1 }} />
        </Fab>
      </Stack>
    </Box>
  )
}

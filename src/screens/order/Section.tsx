import React from 'react'
import Box from '~/atoms/Box'
import Foods from './Foods'
import Cart from './Cart'

const Section = () => {
  return (
    <Box f={1}>
        <Foods />
        <Cart />
    </Box>
  )
}

export default Section
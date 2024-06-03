import React from 'react'
import Box from '~/atoms/Box'
import Foods from './Foods'
import Cart from './Cart'
import { useResponsiveOrder } from '~/hooks/responsive'

const Section = () => {
  const useResponsive = useResponsiveOrder()

  return (
    <Box f={1} row={useResponsive.portrait}>
        <Foods useResponsive={useResponsive} />
        <Cart useResponsive={useResponsive} />
    </Box>
  )
}

export default Section
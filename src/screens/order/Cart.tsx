import React from 'react'
import Box from '~/atoms/Box'
import { ResponsiveOrder } from '~/models/responsive'
import { colors } from '~/themes/colors'
import Ordered from './Ordered'
import FoodsOrder from './FoodsOrder'

interface Props {
    useResponsive: ResponsiveOrder
}

const Cart = ({ useResponsive }: Props) => {
    return (
        <Box w={useResponsive.widthOrder} bg={colors.white} h={useResponsive.heighOrder}>
            <Ordered />
            <FoodsOrder />
        </Box>
    )
}

export default Cart
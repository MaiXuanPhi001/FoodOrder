import React from 'react'
import Box from '~/atoms/Box'
import { ResponsiveOrder } from '~/models/responsive'
import { colors } from '~/themes/colors'
import TabOrder from './TabOrder'
import FoodsOrder from './FoodsOrder'
import { useAppSelector } from '~/hooks/redux'
import { orderedTabMainSelector } from '~/reduxs/selectors/mainSelector'

interface Props {
    useResponsive: ResponsiveOrder
}

const Cart = ({ useResponsive }: Props) => {
    const orderedTab = useAppSelector(orderedTabMainSelector)

    return (
        <Box w={useResponsive.widthOrder} bg={colors.white} h={useResponsive.heighOrder}>
            <TabOrder orderedTab={orderedTab} />
            <FoodsOrder />
        </Box>
    )
}

export default Cart
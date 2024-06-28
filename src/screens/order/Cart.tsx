import React from 'react'
import Box from '~/atoms/Box'
import { useAppSelector } from '~/hooks/redux'
import { ResponsiveOrder } from '~/models/responsive'
import { orderedTabMainSelector } from '~/reduxs/selectors/mainSelector'
import { colors } from '~/themes/colors'
import FoodsOrder from './FoodsOrder'
import TabOrder from './TabOrder'

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
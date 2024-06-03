import React from 'react'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { orderedTabMainSelector } from '~/reduxs/selectors/mainSelector'
import { setOrderedTab } from '~/reduxs/slices/mainSlice'
import { colors } from '~/themes/colors'

const Ordered = () => {
    const dispatch = useAppDispatch()
    const orderedTab = useAppSelector(orderedTabMainSelector)

    return (
        <Box row borderColor={colors.background} borderWidth={1} m={5} p={5}>
            <TouchOpacity
                onPress={() => dispatch(setOrderedTab(false))}
                f={1}
                center
                bg={!orderedTab ? colors.background : colors.white}
            >
                <Txt color={!orderedTab ? colors.white : colors.black} bold>
                    Món đang gọi
                </Txt>
            </TouchOpacity>
            <TouchOpacity
                onPress={() => dispatch(setOrderedTab(true))}
                f={1}
                center
                bg={orderedTab ? colors.background : colors.white}
            >
                <Txt color={orderedTab ? colors.white : colors.black} bold>
                    Món đã gọi
                </Txt>
            </TouchOpacity>
        </Box>
    )
}

export default Ordered
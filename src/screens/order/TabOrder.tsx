import React from 'react'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { useAppDispatch } from '~/hooks/redux'
import { setOrderedTab } from '~/reduxs/slices/mainSlice'
import { colors } from '~/themes/colors'

interface Props {
    orderedTab: 'orderPending' | 'ordered'
}

const TabOrder = ({ orderedTab }: Props) => {
    const dispatch = useAppDispatch()

    const tabOrdered = orderedTab === 'ordered'

    return (
        <Box row borderColor={colors.background} borderWidth={1} m={5}>
            <TouchOpacity
                onPress={() => dispatch(setOrderedTab('orderPending'))}
                f={1}
                center
                p={5}
                bg={!tabOrdered ? colors.background : colors.white}
            >
                <Txt color={!tabOrdered ? colors.white : colors.black} bold>
                    Món đang gọi
                </Txt>
            </TouchOpacity>
            <TouchOpacity
                onPress={() => dispatch(setOrderedTab('ordered'))}
                f={1}
                p={5}
                center
                bg={tabOrdered ? colors.background : colors.white}
            >
                <Txt color={tabOrdered ? colors.white : colors.black} bold>
                    Món đã gọi
                </Txt>
            </TouchOpacity>
        </Box>
    )
}

export default TabOrder
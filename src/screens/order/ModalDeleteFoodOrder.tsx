import React from 'react'
import Box from '~/atoms/Box'
import Press from '~/atoms/Press'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import Modality from '~/components/Modality'
import { Food } from '~/models/database'
import { deleteFoodOrder } from '~/reduxs/slices/mainSlice'
import { AppDispatch } from '~/reduxs/store'
import { colors } from '~/themes/colors'

interface Props {
    dispatch: AppDispatch
    isShow: boolean
    foodDelete: any
    setFoodDelete: React.Dispatch<React.SetStateAction<Food | null>>
}

const ModalDeleteFoodOrder = ({
    dispatch,
    isShow,
    foodDelete,
    setFoodDelete
}: Props) => {

    const handleDeleteFoodOrder = () => {
        dispatch(deleteFoodOrder(foodDelete))
        setFoodDelete(null)
    }

    return (
        <Modality
            show={isShow}
        >
            <Press
                onPress={() => setFoodDelete(null)}
                jc='center'
                w={'100%'}
                h={'100%'}
            >
                <Box bg={colors.white} as='center'>
                    <Box bg={colors.background} p={10} mw={'80%'} minW={'40%'}>
                        <Txt color={colors.white} numberOfLines={1}>{foodDelete.name}</Txt>
                    </Box>
                    <TouchOpacity onPress={handleDeleteFoodOrder} p={10}>
                        <Txt>Xóa</Txt>
                    </TouchOpacity>
                </Box>
            </Press>
        </Modality>
    )
}

export default ModalDeleteFoodOrder
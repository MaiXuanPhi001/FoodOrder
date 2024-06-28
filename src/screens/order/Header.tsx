import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Back, MoneySend } from 'iconsax-react-native'
import React from 'react'
import Box from '~/atoms/Box'
import Input from '~/atoms/Input'
import TouchOpacity from '~/atoms/TouchOpacity'
import { storages } from '~/constants/storages'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { OrderPending } from '~/models/order'
import { orderPendingMainSelector } from '~/reduxs/selectors/mainSelector'
import { setSearchKeyFoods } from '~/reduxs/slices/mainSlice'
import { colors } from '~/themes/colors'

const heightContainer = 50

const Header = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const orderPending = useAppSelector(orderPendingMainSelector)

    // Hoàn tất order
    const handeDoneOrderPending = async () => {
        const orderedJSON = await AsyncStorage.getItem(storages.ordered) || '[]'
        let ordered = JSON.parse(orderedJSON)
        ordered.push()
    }

    return (
        <Box row jc='space-between' ai='center' h={heightContainer} bg={colors.background} w={'100%'} p={5}>
            <TouchOpacity onPress={() => navigation.goBack()}>
                <Back color={colors.white} />
            </TouchOpacity>
            <Box f={1}>
                <Input
                    onChangeText={(text: string) => dispatch(setSearchKeyFoods(text))}
                    borderBottomWidth={1}
                    borderColor={colors.white}
                />
            </Box>
            <TouchOpacity mx={10}>
                <MoneySend color={colors.white} />
            </TouchOpacity>
        </Box>
    )
}

export default Header
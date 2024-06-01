import { useNavigation } from '@react-navigation/native'
import { Back } from 'iconsax-react-native'
import React from 'react'
import Box from '~/atoms/Box'
import TouchOpacity from '~/atoms/TouchOpacity'
import { colors } from '~/themes/colors'

const heightContainer = 50

const Header = () => {
    const navigation = useNavigation()

    return (
        <Box row jc='space-between' ai='center' h={heightContainer} bg={colors.background} w={'100%'} p={5}>
            <TouchOpacity onPress={() => navigation.goBack()}>
                <Back color={colors.white} />
            </TouchOpacity>
        </Box>
    )
}

export default Header
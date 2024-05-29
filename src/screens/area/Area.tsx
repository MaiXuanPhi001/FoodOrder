import React from 'react'
import Box from '~/atoms/Box'
import { Area as AreaInter, areas } from '~/servers/databases/area'
import { colors } from '~/themes/colors'
import Header from './Header'
import ItemArea from './ItemArea'
import { ScrollView } from 'react-native'
import { width } from '~/utils/responsive'

export const WIDTH_LIST_ITEM = width * 94 / 100
export const PADDING = 10
export const GAP = 10

const Area = () => {
  
    return (
        <Box f={1}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box row wrap bg={colors.gray} p={PADDING} gap={GAP} w={WIDTH_LIST_ITEM}>
                    {areas.map((area: AreaInter) =>
                        <ItemArea key={area._id} area={area} />
                    )}
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Area
import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useResponsiveArea } from '~/hooks/responsive'
import { Area as AreaInter, areas } from '~/servers/databases/areas'
import { colors } from '~/themes/colors'
import Header from './Header'
import ItemTable from './ItemTable'
import { useAppSelector } from '~/hooks/redux'
import { areaChooseMainSelector, tablesMainSelector } from '~/reduxs/selectors/mainSelector'
import { Table } from '~/servers/databases/tables'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '~/navigators/MainNavigator'

const Area = () => {
    const useResponsive = useResponsiveArea()
    const areaChoose = useAppSelector(areaChooseMainSelector)
    const tables = useAppSelector(tablesMainSelector)
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    const tablesByArea = tables.filter(table => table._idArea === areaChoose?._id)

    // Di chuyển đến màn hình order của một bàn
    const handleMoveOrderScreen = (table: Table) => {
        navigation.navigate('Order', { table: table })
    }

    return (
        <Box f={1} bg={colors.gray}>
            <Header useResponsive={useResponsive} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box
                    row
                    wrap
                    bg={colors.gray}
                    p={useResponsive.padding}
                    gap={useResponsive.gap}
                    w={useResponsive.widthListItem}
                >
                    {tablesByArea.map((table: Table) =>
                        <ItemTable
                            key={table._id}
                            table={table}
                            useResponsive={useResponsive}
                            onMoveOrderScreen={handleMoveOrderScreen}
                        />
                    )}
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Area
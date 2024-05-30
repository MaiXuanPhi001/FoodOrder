import React from 'react'
import { ScrollView } from 'react-native'
import Box from '~/atoms/Box'
import { useResponsiveArea } from '~/hooks/responsive'
import { Area as AreaInter, areas } from '~/servers/databases/areas'
import { colors } from '~/themes/colors'
import Header from './Header'
import ItemArea from './ItemArea'
import { useAppSelector } from '~/hooks/redux'
import { areaChooseMainSelector, tablesMainSelector } from '~/reduxs/selectors/mainSelector'
import { Table } from '~/servers/databases/tables'

const Area = () => {
    const useResponsive = useResponsiveArea()
    const areaChoose = useAppSelector(areaChooseMainSelector)
    const tables = useAppSelector(tablesMainSelector)

    const tablesByArea = tables.filter(table => table._idArea === areaChoose?._id)

    return (
        <Box f={1} bg={colors.gray}>
            <Header />
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
                        <ItemArea
                            key={table._id}
                            table={table}
                            useResponsive={useResponsive}
                        />
                    )}
                </Box>
            </ScrollView>
        </Box>
    )
}

export default Area
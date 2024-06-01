import React from 'react'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { Area } from '~/servers/databases/areas'
import { colors } from '~/themes/colors'
import { ResponsiveArea } from '~/models/responsive'
import { Table } from '~/servers/databases/tables'

interface Props {
    table: Table
    useResponsive: ResponsiveArea
    onMoveOrderScreen: (table: Table) => void
}

const ItemTable = ({ table, useResponsive, onMoveOrderScreen }: Props) => {
    return (
        <TouchOpacity
            onPress={() => onMoveOrderScreen(table)}
            center
            borderWidth={1}
            w={useResponsive.widthItem}
            h={useResponsive.widthItem}
            bg={colors.white}
            radius={2}
            borderColor={colors.borderItem}
        >
            <Txt>{table.name}</Txt>
        </TouchOpacity>
    )
}

export default ItemTable
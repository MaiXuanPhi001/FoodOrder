import React from 'react'
import TouchOpacity from '~/atoms/TouchOpacity'
import Txt from '~/atoms/Txt'
import { Area } from '~/servers/databases/area'
import { colors } from '~/themes/colors'
import { width } from '~/utils/responsive'
import { GAP, PADDING, WIDTH_LIST_ITEM } from './Area'

interface Props {
    area: Area
}

const ItemArea = ({ area }: Props) => {
    const ITEM_ON_LINE = 6
    const widthItem = (WIDTH_LIST_ITEM - GAP)  / ITEM_ON_LINE - PADDING
    // 90 => 30   100
    return (
        <TouchOpacity
            center
            borderWidth={1}
            w={widthItem}
            h={widthItem}
            bg={colors.white}
            radius={2}
            borderColor={colors.borderItem}
        >
            <Txt>{area.name}</Txt>
        </TouchOpacity>
    )
}

export default ItemArea
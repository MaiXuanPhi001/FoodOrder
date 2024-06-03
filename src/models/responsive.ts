import { DimensionValue } from "react-native"

export interface ResponsiveArea {
    padding: number
    gap: number
    itemOnLine: number
    widthItem: number
    widthListItem: number
    heightScrollPoppupMenu: number
    heightItemMenuOption: number
}

export interface ResponsiveOrder {
    padding: number
    gap: number
    itemOnLine: number
    widthItem: number
    portrait: boolean
    widthFoods: number
    widthOrder: number
    heighFoods: DimensionValue
    heighOrder: DimensionValue
    heightItem: number
    sizeIconItem: number
}